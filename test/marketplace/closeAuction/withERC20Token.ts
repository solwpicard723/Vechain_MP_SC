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

describe("Close / Cancel auction: ERC20 token", function () {
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

  describe("Cancel auction: before auction starts", function () {
    describe("Revert cases", function () {
      it("Should revert if caller is not auction lister.", async () => {
        await expect(marketv2.connect(buyer).closeAuction(listingId, buyer.address)).to.be.revertedWith(
          "Marketplace: caller is not the listing creator.",
        );
      });
    });

    describe("Events", function () {
      it("Should emit AuctionClosed with relevant info", async () => {
        await expect(marketv2.connect(lister).closeAuction(listingId, lister.address))
          .to.emit(marketv2, "AuctionClosed")
          .withArgs(
            ...Object.values({
              listingId: listingId,
              closer: lister.address,
              cancelled: true,
              auctionCreator: lister.address,
              winningBidder: ethers.constants.AddressZero,
            }),
          );
      });
    });

    describe("Balances", function () {
      it("Should transfer back tokens to auction lister", async () => {
        const listerBalBefore: BigNumber = await mockNft.balanceOf(lister.address, nftTokenId);
        const marketBalBefore: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);

        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listerBalAfter: BigNumber = await mockNft.balanceOf(lister.address, nftTokenId);
        const marketBalAfter: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);

        expect(listerBalAfter).to.equal(listerBalBefore.add(listingParams.quantityToList));
        expect(marketBalAfter).to.equal(marketBalBefore.sub(listingParams.quantityToList));
      });
    });

    describe("Contract state", function () {
      it("Should reset listing", async () => {
        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listing = await marketv2.listings(listingId);

        expect(listing.tokenOwner).to.equal(ethers.constants.AddressZero);
        expect(listing.quantity).to.equal(0);
        expect(listing.endTime).to.equal(0);
      });
    });
  });

  describe("Cancel auction: auction ends without bids", function () {
    beforeEach(async () => {
      // Time travel
      await timeTravelToAfterListingWindow(listingId);
    });

    describe("Revert cases", function () {
      it("Should revert if caller is not auction lister.", async () => {
        await expect(marketv2.connect(buyer).closeAuction(listingId, buyer.address)).to.be.revertedWith(
          "Marketplace: caller is not the listing creator.",
        );
      });
    });

    describe("Events", function () {
      it("Should emit AuctionClosed with relevant info", async () => {
        await expect(marketv2.connect(lister).closeAuction(listingId, lister.address))
          .to.emit(marketv2, "AuctionClosed")
          .withArgs(
            ...Object.values({
              listingId: listingId,
              closer: lister.address,
              cancelled: true,
              auctionCreator: lister.address,
              winningBidder: ethers.constants.AddressZero,
            }),
          );
      });
    });

    describe("Balances", function () {
      it("Should transfer back tokens to auction lister", async () => {
        const listerBalBefore: BigNumber = await mockNft.balanceOf(lister.address, nftTokenId);
        const marketBalBefore: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);

        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listerBalAfter: BigNumber = await mockNft.balanceOf(lister.address, nftTokenId);
        const marketBalAfter: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);

        expect(listerBalAfter).to.equal(listerBalBefore.add(listingParams.quantityToList));
        expect(marketBalAfter).to.equal(marketBalBefore.sub(listingParams.quantityToList));
      });
    });

    describe("Contract state", function () {
      it("Should reset listing", async () => {
        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listing = await marketv2.listings(listingId);

        expect(listing.tokenOwner).to.equal(ethers.constants.AddressZero);
        expect(listing.quantity).to.equal(0);
        expect(listing.endTime).to.equal(0);
      });
    });
  });

  describe("Regular auction closing", function () {
    beforeEach(async () => {
      // Time travel
      await timeTravelToListingWindow(listingId);

      await marketv2.connect(buyer).offer(listingId, quantityWanted, currencyForOffer, offerPricePerToken);
    });

    describe("Revert cases", function () {
      it("Should revert if listing is not an auction.", async () => {
        const newListingId = await marketv2.totalListings();
        const newTokenId: BigNumber = nftTokenId.add(1);
        await mockNft
          .connect(protocolAdmin)
          .mint(lister.address, newTokenId, nftTokenSupply, ethers.utils.toUtf8Bytes(""));

        const newListingParams = {
          ...listingParams,
          tokenId: newTokenId,
          quantityToList: 1,
          startTime: 0,
          listingType: ListingType.Direct,
        };

        await marketv2.connect(lister).createListing(newListingParams);

        await expect(marketv2.connect(lister).closeAuction(newListingId, lister.address)).to.be.revertedWith(
          "Marketplace: not an auction.",
        );
      });

      it("Should revert if the auction duration is not over.", async () => {
        await expect(marketv2.connect(lister).closeAuction(listingId, lister.address)).to.be.revertedWith(
          "Marketplace: cannot close auction before it has ended.",
        );
      });
    });

    describe("Events", function () {
      beforeEach(async () => {
        // Time travel to auction end
        await timeTravelToAfterListingWindow(listingId);
      });

      it("Should emit AuctionClosed with relevant closing info: closed by lister", async () => {
        await expect(marketv2.connect(lister).closeAuction(listingId, lister.address))
          .to.emit(marketv2, "AuctionClosed")
          .withArgs(
            ...Object.values({
              listingId: listingId,
              closer: lister.address,
              cancelled: false,
              auctionCreator: lister.address,
              winningBidder: buyer.address,
            }),
          );
      });

      it("Should emit AuctionClosed with relevant closing info: closed by bidder", async () => {
        const listing: ListingStruct = await marketv2.listings(listingId);

        await expect(marketv2.connect(buyer).closeAuction(listingId, lister.address))
          .to.emit(marketv2, "AuctionClosed")
          .withArgs(
            ...Object.values({
              listingId: listingId,
              closer: buyer.address,
              cancelled: false,
              auctionCreator: lister.address,
              winningBidder: buyer.address,
            }),
          );
      });
    });

    describe("Balances", function () {
      beforeEach(async () => {
        // Time travel to auction end
        await timeTravelToAfterListingWindow(listingId);
      });

      it("Should payout bid to lister when called for lister", async () => {
        const listerBalBefore: BigNumber = await erc20Token.balanceOf(lister.address);
        const marketBalBefore: BigNumber = await erc20Token.balanceOf(marketv2.address);

        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listerBalAfter: BigNumber = await erc20Token.balanceOf(lister.address);
        const marketBalAfter: BigNumber = await erc20Token.balanceOf(marketv2.address);

        expect(listerBalAfter).to.equal(listerBalBefore.add(totalOfferAmount));
        expect(marketBalAfter).to.equal(marketBalBefore.sub(totalOfferAmount));
      });

      it("Should transfer auctioned tokens to bidder when called for bidder", async () => {
        const marketBalBefore: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);
        const buyerBalBefore: BigNumber = await mockNft.balanceOf(buyer.address, nftTokenId);

        await marketv2.connect(buyer).closeAuction(listingId, buyer.address);

        const marketBalAfter: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);
        const buyerBalAfter: BigNumber = await mockNft.balanceOf(buyer.address, nftTokenId);

        expect(marketBalAfter).to.equal(marketBalBefore.sub(listingParams.quantityToList));
        expect(buyerBalAfter).to.equal(buyerBalBefore.add(listingParams.quantityToList));
      });

      it("Should not affect any currency balances on repeat calls by bidder of lister", async () => {
        await marketv2.connect(lister).closeAuction(listingId, lister.address);
        await marketv2.connect(buyer).closeAuction(listingId, buyer.address);

        const listerBalBefore: BigNumber = await erc20Token.balanceOf(lister.address);
        const marketBalBefore: BigNumber = await erc20Token.balanceOf(marketv2.address);

        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listerBalAfter: BigNumber = await erc20Token.balanceOf(lister.address);
        const marketBalAfter: BigNumber = await erc20Token.balanceOf(marketv2.address);

        expect(listerBalAfter).to.equal(listerBalBefore);
        expect(marketBalBefore).to.equal(marketBalAfter);
      });

      it("Should not affect any token balances on repeat calls by bidder of lister", async () => {
        await marketv2.connect(lister).closeAuction(listingId, lister.address);
        await marketv2.connect(buyer).closeAuction(listingId, buyer.address);

        const marketBalBefore: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);
        const buyerBalBefore: BigNumber = await mockNft.balanceOf(buyer.address, nftTokenId);

        await marketv2.connect(buyer).closeAuction(listingId, buyer.address);

        const marketBalAfter: BigNumber = await mockNft.balanceOf(marketv2.address, nftTokenId);
        const buyerBalAfter: BigNumber = await mockNft.balanceOf(buyer.address, nftTokenId);

        expect(marketBalAfter).to.equal(marketBalBefore);
        expect(buyerBalAfter).to.equal(buyerBalBefore);
      });
    });

    describe("Contract state", function () {
      beforeEach(async () => {
        // Time travel to auction end
        await timeTravelToAfterListingWindow(listingId);
      });

      it("Should reset listing quantity, end time, and offer's offer amount when called by lister", async () => {
        await marketv2.connect(lister).closeAuction(listingId, lister.address);

        const listing = await marketv2.listings(listingId);
        expect(listing.quantity).to.equal(0);
        expect(listing.endTime).to.equal((await ethers.provider.getBlock("latest")).timestamp);

        const offer = await marketv2.winningBid(listingId);
        expect(offer.pricePerToken).to.equal(0);
      });

      it("Should reset the bid's quantity when called by bidder", async () => {
        await marketv2.connect(buyer).closeAuction(listingId, buyer.address);

        const offer = await marketv2.winningBid(listingId);
        expect(offer.quantityWanted).to.equal(0);
      });
    });
  });
});
