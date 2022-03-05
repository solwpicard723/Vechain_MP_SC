import { ethers } from "hardhat";
import { expect, use } from "chai";
import { solidity } from "ethereum-waffle";

// Contract Types
import { MockERC1155 } from "../../../typechain/MockERC1155";
import { Coin } from "../../../typechain/Coin";
import { Marketplace, ListingParametersStruct, ListingStruct } from "../../../typechain/Marketplace";

// Types
import { BigNumber } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

// Test utils
import { getContracts, Contracts } from "../../../utils/tests/getContracts";

use(solidity);

describe("Bid with ERC20 token: Auction Listing", function () {
  // Signers
  let protocolProvider: SignerWithAddress;
  let protocolAdmin: SignerWithAddress;
  let lister: SignerWithAddress;
  let buyer: SignerWithAddress;
  let dummy: SignerWithAddress;

  // Contracts
  let marketv2: Marketplace;
  let mockNft: MockERC1155;
  let erc20Token: Coin;

  // MockERC1155: `mint` parameters
  const nftTokenId: BigNumber = BigNumber.from(1);
  const nftTokenSupply: BigNumber = BigNumber.from(Math.floor(1 + Math.random()) * 5);

  // Market: `createListing` params
  enum ListingType {
    Direct,
    Auction,
  }
  enum TokenType {
    ERC1155,
    ERC721,
  }
  let listingId: BigNumber;
  let listingParams: ListingParametersStruct;

  // Market: `offer` params
  let quantityWanted: BigNumber;
  let offerPricePerToken: BigNumber;
  let currencyForOffer: string;
  let totalOfferAmount: BigNumber;

  // Semantic helpers
  const mintNftToLister = async () =>
    await mockNft.connect(protocolAdmin).mint(lister.address, nftTokenId, nftTokenSupply, ethers.utils.toUtf8Bytes(""));

  const mintERC20To = async (to: SignerWithAddress, amount: BigNumber) => {
    // Mint currency to buyer
    await erc20Token.connect(protocolAdmin).mint(to.address, amount);

    // Approve Market to transfer currency
    await erc20Token.connect(to).approve(marketv2.address, amount);
  };

  const approveMarketToTransferTokens = async (toApprove: boolean) =>
    await mockNft.connect(lister).setApprovalForAll(marketv2.address, toApprove);

  const timeTravelToListingWindow = async (listingId: BigNumber) => {
    // Time travel
    const listingStart: string = (await marketv2.listings(listingId)).startTime.toString();
    await ethers.provider.send("evm_mine", [parseInt(listingStart)]);
  };

  const timeTravelToAfterListingWindow = async (listingId: BigNumber) => {
    // Time travel
    const listingEnd: string = (await marketv2.listings(listingId)).endTime.toString();
    await ethers.provider.send("evm_mine", [parseInt(listingEnd)]);
  };

  before(async () => {
    // Get signers
    const signers: SignerWithAddress[] = await ethers.getSigners();
    [protocolAdmin, lister, buyer, dummy] = signers;
  });

  beforeEach(async () => {
    // Get contracts
    mockNft = await ethers.getContractFactory("MockERC1155").then(f => f.connect(protocolAdmin).deploy());
    const contracts: Contracts = await getContracts(protocolAdmin);
    marketv2 = contracts.marketv2;
    erc20Token = contracts.coin;

    // Setup: mint NFT to `lister` for `lister` to list these NFTs for sale.
    await mintNftToLister();

    // Setup: `lister` approves Market to transfer tokens.
    await approveMarketToTransferTokens(true);

    // Setup: get expected listingId
    listingId = await marketv2.totalListings();

    // Setup: set default `createListing` paramters.
    listingParams = {
      assetContract: mockNft.address,
      tokenId: nftTokenId,

      startTime: BigNumber.from((await ethers.provider.getBlock("latest")).timestamp).add(100),
      secondsUntilEndTime: BigNumber.from(1000),

      quantityToList: nftTokenSupply,
      currencyToAccept: erc20Token.address,

      reservePricePerToken: ethers.utils.parseEther("0.01"),
      buyoutPricePerToken: ethers.utils.parseEther("0.02"),

      listingType: ListingType.Auction,
    };

    // Setup: `lister` lists nft for sale in a direct listing.
    await marketv2.connect(lister).createListing(listingParams);

    // Setup: set default `offer` parameters.
    quantityWanted = BigNumber.from(1);
    offerPricePerToken = listingParams.reservePricePerToken as BigNumber;
    currencyForOffer = listingParams.currencyToAccept;
    totalOfferAmount = offerPricePerToken.mul(listingParams.quantityToList);

    // Setup: mint some curreny to buyer so they can fulfill the offer made.
    await mintERC20To(buyer, (listingParams.buyoutPricePerToken as BigNumber).mul(listingParams.quantityToList));
  });

  describe("Revert cases", async () => {
    it("Should revert if bid is made outside the auction window", async () => {
      // Invalid behaviour: bid is made outside auction window.
      await expect(
        marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken),
      ).to.be.revertedWith("Marketplace: inactive listing.");

      await timeTravelToAfterListingWindow(listingId);

      await expect(
        marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken),
      ).to.be.revertedWith("Marketplace: inactive listing.");
    });

    it("Should revert if bid is less than reserve price", async () => {
      await timeTravelToListingWindow(listingId);

      // Invalid behaviour: total offer amount is less than reserve price per token * quantity of auctioned item.
      const invalidOfferPricePerToken = (listingParams.reservePricePerToken as BigNumber).sub(
        ethers.utils.parseEther("0.005"),
      );

      await expect(
        marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, invalidOfferPricePerToken),
      ).to.be.revertedWith("Marketplace: not winning bid.");
    });

    it("Should revert if bid is not winning bid", async () => {
      await timeTravelToListingWindow(listingId);

      await marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken);

      const onePercentIncrement: BigNumber = offerPricePerToken.mul(quantityWanted).mul(100).div(10000);
      const newPricePerToken: BigNumber = offerPricePerToken
        .mul(quantityWanted)
        .add(onePercentIncrement)
        .div(quantityWanted);

      await expect(
        marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, newPricePerToken),
      ).to.be.revertedWith("Marketplace: not winning bid.");
    });

    it("Should revert if buyer does not own the required amount of currency", async () => {
      // Invalid behaviour: buyer does not own the offer amount
      await erc20Token.connect(buyer).transfer(protocolAdmin.address, await erc20Token.balanceOf(buyer.address));

      await expect(marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken)).to.be
        .reverted;
    });

    it("Should revert if buyer has not approved Market to transfer currency", async () => {
      // Invalid behaviour: buyer has not approved Market to transfer currency.
      await erc20Token
        .connect(buyer)
        .decreaseAllowance(marketv2.address, await erc20Token.allowance(buyer.address, marketv2.address));

      await expect(marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken)).to.be
        .reverted;
    });
  });

  describe("Events", function () {
    beforeEach(async () => {
      await timeTravelToListingWindow(listingId);
    });

    it("Should emit NewOffer with relevant bid info, if bid is not buyout price", async () => {
      const listing: ListingStruct = await marketv2.listings(listingId);

      await expect(marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken))
        .to.emit(marketv2, "NewOffer")
        .withArgs(
          ...Object.values({
            listingId: listingId,
            offeror: buyer.address,
            listingType: listing.listingType,
            quantityWanted: listingParams.quantityToList,
            totalOfferAmount: offerPricePerToken.mul(listingParams.quantityToList),
            currency: currencyForOffer,
          }),
        );
    });

    it("Should emit AuctionClosed if bid is greater or equal to buyout price", async () => {
      await expect(
        marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, listingParams.buyoutPricePerToken),
      )
        .to.emit(marketv2, "AuctionClosed")
        .withArgs(listingId, buyer.address, false, lister.address, buyer.address);
    });
  });

  describe("Balances", async () => {
    beforeEach(async () => {
      await timeTravelToListingWindow(listingId);
    });

    it("Should escrow currency in Market if bid is valid", async () => {
      const buyerBalBefore: BigNumber = await erc20Token.balanceOf(buyer.address);
      const marketBalBefore: BigNumber = await erc20Token.balanceOf(marketv2.address);

      await marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken);

      const buyerBalAfter: BigNumber = await erc20Token.balanceOf(buyer.address);
      const marketBalAfter: BigNumber = await erc20Token.balanceOf(marketv2.address);

      expect(buyerBalAfter).to.equal(buyerBalBefore.sub(totalOfferAmount));
      expect(marketBalAfter).to.equal(marketBalBefore.add(totalOfferAmount));
    });

    it("Should payout the previous bidder, if new bid is higher than the previous bid", async () => {
      const highOfferAmount = (listingParams.reservePricePerToken as BigNumber)
        .mul(listingParams.quantityToList)
        .add(ethers.utils.parseEther("0.01"));

      const lowOfferPricePerToken = offerPricePerToken;

      // Set up `prevBuyer`
      const prevBuyer = protocolAdmin; // doesn't matter who
      await mintERC20To(prevBuyer, highOfferAmount);

      const prevBuyerBalBefore: BigNumber = await erc20Token.balanceOf(prevBuyer.address);
      const buyerBalBefore: BigNumber = await erc20Token.balanceOf(buyer.address);
      const marketBalBefore: BigNumber = await erc20Token.balanceOf(marketv2.address);

      await marketv2.connect(prevBuyer).offer(listingId, quantityWanted, currencyForOffer, lowOfferPricePerToken);
      await marketv2
        .connect(buyer)
        .offer(listingId, quantityWanted, currencyForOffer, highOfferAmount.div(listingParams.quantityToList));

      const prevBuyerBalAfter: BigNumber = await erc20Token.balanceOf(prevBuyer.address);
      const buyerBalAfter: BigNumber = await erc20Token.balanceOf(buyer.address);
      const marketBalAfter: BigNumber = await erc20Token.balanceOf(marketv2.address);

      expect(prevBuyerBalAfter).to.equal(prevBuyerBalBefore);
      expect(buyerBalAfter).to.equal(buyerBalBefore.sub(highOfferAmount));
      expect(marketBalAfter).to.equal(marketBalBefore.add(highOfferAmount));
    });

    it("Should transfer auctioned tokens to bidder if bid is at buyout price.", async () => {
      const auctionQuantity: BigNumber = (await marketv2.listings(listingId)).quantity;

      const buyerBalBefore: BigNumber = await mockNft.balanceOf(buyer.address, nftTokenId);
      const marketBalBefore: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);

      await marketv2
        .connect(buyer)
        .offer(listingId, quantityWanted, currencyForOffer, listingParams.buyoutPricePerToken);

      const buyerBalAfter: BigNumber = await mockNft.balanceOf(buyer.address, nftTokenId);
      const marketBalAfter: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);

      expect(buyerBalAfter).to.equal(buyerBalBefore.add(auctionQuantity));
      expect(marketBalAfter).to.equal(marketBalBefore.sub(auctionQuantity));
    });
  });

  describe("Contract state", function () {
    beforeEach(async () => {
      await timeTravelToListingWindow(listingId);
    });

    it("Should store the offer as the winning bid if it is the new highest bid", async () => {
      await marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken);

      const winningBid = await marketv2.winningBid(listingId);

      expect(winningBid.listingId).to.equal(listingId);
      expect(winningBid.offeror).to.equal(buyer.address);
      expect(winningBid.quantityWanted).to.equal(listingParams.quantityToList);
      expect(winningBid.pricePerToken).to.equal(offerPricePerToken);
    });

    it("Should increment the listing's end time if the bid is within the time buffer", async () => {
      const timeBuffer: BigNumber = await marketv2.timeBuffer();
      const endTimeBefore: BigNumber = (await marketv2.listings(listingId)).endTime;

      await ethers.provider.send("evm_mine", [endTimeBefore.sub(timeBuffer).add(1).toNumber()]);

      await marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken);

      const endTimeAfter: BigNumber = (await marketv2.listings(listingId)).endTime;

      expect(endTimeAfter).to.equal(endTimeBefore.add(timeBuffer));
    });

    it("Should close the auction by updating the listing's end time and bid's quantity wanted, if the bid is buyout price", async () => {
      await marketv2
        .connect(buyer)
        .offer(listingId, quantityWanted, currencyForOffer, listingParams.buyoutPricePerToken);

      const timeStamp = (await ethers.provider.getBlock("latest")).timestamp;
      const endTimeAfter: BigNumber = (await marketv2.listings(listingId)).endTime;
      const quantityWantedInBid: BigNumber = (await marketv2.winningBid(listingId)).quantityWanted;

      expect(timeStamp).to.equal(endTimeAfter);
      expect(quantityWantedInBid).to.equal(0);
    });
  });
});
