# Marketplace

`Marketplace` is a market where where people can either sell NFTs — [ERC 721](https://eips.ethereum.org/EIPS/eip-721) or [ERC 1155](https://eips.ethereum.org/EIPS/eip-1155) tokens — at a fixed price ( what we'll refer to as a "Direct listing"), or auction them (what we'll refer to as an "Auction listing").

### Direct Listings

An NFT owner (or 'lister') can list their NFTs for sale at a fixed price. A potential buyer can buy the NFT for the specified price, or make an offer to buy the listed NFTs at a different price, which the lister can choose to accept.

To list NFTs for sale, the lister specifies —

| Parameter             | Description                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `assetContract`       | The contract address of the NFTs being listed for sale                                                                                   |
| `tokenId`             | The token ID on the 'assetContract' of the NFTs to list for sale.                                                                        |
| `startTime`           | The unix timestamp after which NFTs can be bought from the listing.                                                                      |
| `secondsUntilEndTime` | The number of seconds after which NFTs can no longer be bought from the listing.                                                         |
| `quantityToList`      | The amount of NFTs of the given 'assetContract' and 'tokenId' to list for sale. For ERC721 NFTs, this is always 1.                       |
| `currencyToAccept`    | The address of the currency accepted by the listing. Either an ERC20 token or the chain's native token (e.g. ether on Ethereum mainnet). |
| `buyoutPricePerToken` | The price per unit of NFT listed for sale.                                                                                               |

To make an offer to a direct listing, a buyer specifies —

| Parameter        | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| `listingId`      | The unique identifier of the listing to buy NFTs from.                                                |
| `quantityWanted` | The quantity of NFTs from the listing for which the offer is made. For ERC721 NFTs, this is always 1. |
| `pricePerToken`  | The offered price per token.                                                                          |
| `currency`       | The currency in which the offer is made.                                                              |

The listed NFTs do not leave the wallet of the lister until a sale is executed with the seller and buyer's consent. To list NFTs for sale, the lister must own the NFTs being listed, and approve the market to transfer the NFTs. The latter lets the market transfer NFTs to a buyer who buys the NFTs for the accepted price.

When making an offer to a direct listing, the offer amount is not escrowed in the Marketplace. Instead, making an offer requires the buyer to approve Marketplace to transfer the appropriate amount of currency, to let Marketplace transfer the offer amount from the buyer to the lister, in case the lister accepts the buyer's offer.

A sale is executed when either a buyer pays the fixed price, or the seller accepts an offer made to the listing.

### Auction listings

An NFT owner (or 'lister') can auction their NFTs. Potential buyers make bids in the auction. At the closing of the auction, the buyer with the wining bid gets the auctioned NFTs, and the lister gets the winning bid amount.

To list NFTs in an auction, a lister specifies —

| Parameter               | Description                                                                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assetContract`         | The contract address of the NFTs being auctioned.                                                                                                                                                                                                  |
| `tokenId`               | The token ID on the 'assetContract' of the NFTs being auctioned.                                                                                                                                                                                   |
| `startTime`             | The unix timestamp after which NFTs can be bought from the listing.                                                                                                                                                                                |
| `secondsUntilEndTime`   | The number of seconds after which buyers can no longer make bids to the auction.                                                                                                                                                                   |
| `quantityToList`        | The amount of NFTs of the given 'assetContract' and 'tokenId' to put up for auction. For ERC721 NFTs, this is always 1.                                                                                                                            |
| `currencyToAccept`      | The address of the currency accepted by the auction. Either an ERC20 token or the chain's native token (e.g. ether on Ethereum mainnet).                                                                                                           |
| `rerservePricePerToken` | All bids made to this auction must be at least as great as the reserve price per unit of NFTs auctioned, times the total number of NFTs put up for auction.                                                                                        |
| `buyoutPricePerToken`   | An optional parameter. If a buyer bids an amount greater than or equal to the buyout price per unit of NFTs auctioned, times the total number of NFTs put up for auction, the auction is considered closed and the buyer wins the auctioned items. |

Every auction listing obeys two 'buffers' to make it a fair auction:

1. **Time buffer**: this is measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer to prevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.
2. **Bid buffer**: this is a percentage (e.g. 5%). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making _very slightly_ higher bids to win the auctioned items.

These buffer values are contract-wide, which means every auction conduction in the Marketplace obeys, at any given moment, the same buffers. These buffers can be configured by accounts with the `DEFAULT_ADMIN_ROLE` role.

The NFTs to list in an auction _do_ leave the wallet of the lister, and are escrowed in the market until the closing of the auction. Whenever a new winning bid is made by a buyer, the buyer deposits this bid amount into the market; this bid amount is escrowed in the market until a new winning bid is made. The previous winning bid amount is automatically refunded to the respective bidder.

**Note:** As a result, the new winning bidder pays for the gas used in refunding the previous winning bidder. This trade-off is made for better UX for bidders — a bidder that has been outbid is automatically refunded, and does not need to pull out their deposited bid manually. This reduces bidding to a single action, instead of two actions — bidding, and pulling out the bid on being outbid.

Once the auction window ends, the seller collects the highest bid, and the buyer collects the auctioned NFT.

### Main difference in treatment: Direct vs Auction listings

The main difference in how we treat 'direct listings' versus 'auction listings' concerns the level of commitment from the seller and buyers.

- **Direct listings** are _low commitment_, high frequency listings; people constantly list and de-list their NFTs based on market trends. So, the listed NFTs and offer amounts are _not_ escrowed in the Marketplace to keep the seller's NFTs and the buyer's currency liquid. Allowing users to list NFTs for sale just by approvals gives them the freedom to list the same NFT in multiple marketplaces, e.g. this `Marketplace` contract, OpenSea, etc. at the same time.
- **Auction listings** are _high commitment_, low frequency listings. The seller and bidders respect the auction window, recognize that their NFTs / bid amounts will be illiquid for the auction duration, and expect a guaranteed payout at auction closing — the auctioned items for the bidder, and the winning bid amount for the seller. So, tokens listed for sale in an auction, and the highest bid at any given moment _are_ escrowed in the market.

## Technical details

At a high level, we want `Marketplace` to be a single, compact smart contract that supports all features related to both direct listings _and_ auction listings.

To write the feature-rich Marketplace contract without exceeding the code size limit of smart contracts, we leverage the similarity in the concepts required by direct and auction listings.

| Listing type | Concepts for a listing on the market |          |                           |                              |                                   |                                                             |                                                                        |                                         |
| ------------ | ------------------------------------ | -------- | ------------------------- | ---------------------------- | --------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------- |
|              | start time                           | end time | quantity of tokens listed | currency accepted by listing | reserve price: minimum bid amount | buyout price: price to pay to directly buy the token listed | limit for the amount of tokens a single buyer can buy from the listing | Type of token listed: ERC721 or ERC1155 |
| Direct       | ✅                                   | ✅       | ✅                        | ✅                           | ❌                                | ✅                                                          | ✅                                                                     | ✅                                      |
| Auction      | ✅                                   | ✅       | ✅                        | ✅                           | ✅                                | ✅                                                          | ❌                                                                     | ✅                                      |

As we can see, the parameters that make up a direct listing and an auction listing are highly similar. So, we use common data structures and functions to handle direct listing and auction listing features. This means e.g. a single function can have multiple behaviors based on which actor calls it, when they call it, and the listing type of the listing in question.

The same goes for offers to direct listings, and bids made in an auction. The parameters for offers to direct listings and bids made in an auction are identical.

| Offer type              | Concepts for an offer                 |                                  |                    |                                     |
| ----------------------- | ------------------------------------- | -------------------------------- | ------------------ | ----------------------------------- |
|                         | Offeror: the account making the offer | quantity wanted from the listing | total offer amount | currency in which the offer is made |
| Bid                     | ✅                                    | ✅                               | ✅                 | ✅                                  |
| Offer to direct listing | ✅                                    | ✅                               | ✅                 | ✅                                  |

An so, we use common data structures and functions to handle offers to direct listings and bids to auctions. Though the two types of offers share the same concepts, they require different logic. This again means e.g. a single function can have multiple behaviors based on which actor calls it, when they call it, and the listing type of the listing in question.

### Design strategy for `Marketplace`

The `Marketplace` smart contract works with two main concepts — (1) direct listings + offers, and (2) auctions + bids.

We use common functions and data structures wherever an (1) action is common to both concepts and (2) the data to manage for that action is common to both concepts.

**Example**: Common action and data handled.

- Action: creating a listing | Data: `ListingParameters`
- There is a single `createListing` function to create both a direct listing, or an auction.

Although the concepts used for (1) direct listings + offers, and (2) auctions + bids is similar, the logic required to the two is generally different. For example —

- One calls the _same_ `offer` function to make an offer to a direct listing, or to make a bid in an auction. Internally, the smart contract uses different logic to handle each of the two cases.
- An auction has the concept of formally being closed whereas a direct listing does not. On auction closing, both the lister and winning bidder call can call `closeAuction` to collect the winning bid, and the auctioned items, respectively. There is no such corollary in the case of direct listings.

### EIPs implemented / supported

To be able to escrow NFTs in the case of auctions, Marketplace implements the receiver interfaces for [ERC1155](https://eips.ethereum.org/EIPS/eip-1155) and [ERC721](https://eips.ethereum.org/EIPS/eip-721) tokens.

Marketplace also implements [ERC2981](https://eips.ethereum.org/EIPS/eip-2981) for the distribution of royalties on direct and auction listings.

### Events emitted

All events emitted by the contract, as well as when they're emitted, can be found in the interface of the contract. In general, events are emitted whenever there is a state change in the contract.

### Currency transfers

The `Marketplace` contract supports both ERC20 compatible currencies, and a chain's native token (e.g. ether for Ethereum mainnet). This means that any action that involves transferring currency (e.g. buying a token from a direct listing) can be performed with either an ERC20 token or the chain's native token.

💡 **Note**: The only exception is offers to direct listings — these can only be made with ERC20 tokens, since Marketplace needs to transfer the offer amount from the buyer to the lister, in case the lister accepts the buyer's offer. This cannot be done with native tokens.

The contract wraps all native tokens deposited into it as the canonical ERC20 wrapped version of the native token (e.g. WETH for ether). The contract unwraps the wrapped native token when transferring native tokens to a given address.

If the contract fails to transfer out native tokens, it wraps them back to wrapped native tokens, and transfers the wrapped native tokens to the concerned address. The contract may fail to transfer out native tokens to an address, if the address represents a smart contract that cannot accept native tokens transferred to it directly.
