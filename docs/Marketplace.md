# Marketplace









## Methods

### ASSET_ROLE

```solidity
function ASSET_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### LISTER_ROLE

```solidity
function LISTER_ROLE() external view returns (bytes32)
```



*Access control: aditional roles.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### MAX_BPS

```solidity
function MAX_BPS() external view returns (uint64)
```



*The max bps of the contract. So, 10_000 == 100 %*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### NATIVE_TOKEN

```solidity
function NATIVE_TOKEN() external view returns (address)
```



*The address interpreted as native token of the chain.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### VERSION

```solidity
function VERSION() external view returns (uint256)
```



*Version of the contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### acceptOffer

```solidity
function acceptOffer(uint256 _listingId, address offeror) external nonpayable
```



*Lets a listing&#39;s creator accept an offer for their direct listing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined
| offeror | address | undefined

### bidBufferBps

```solidity
function bidBufferBps() external view returns (uint64)
```



*The minimum % increase required from the previous winning bid. Default: 5%.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### buy

```solidity
function buy(uint256 _listingId, uint256 _quantityToBuy, address _currency, uint256 _totalPrice) external payable
```



*Lets an account buy a given quantity of tokens from a listing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined
| _quantityToBuy | uint256 | undefined
| _currency | address | undefined
| _totalPrice | uint256 | undefined

### closeAuction

```solidity
function closeAuction(uint256 _listingId, address _closeFor) external nonpayable
```



*Lets an account close an auction for either the (1) winning bidder, or (2) auction creator.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined
| _closeFor | address | undefined

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Collection level metadata.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### createListing

```solidity
function createListing(IMarketplace.ListingParameters _params) external nonpayable
```



*Lets a token owner list tokens for sale: Direct Listing or Auction.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _params | IMarketplace.ListingParameters | undefined

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### getRoleMember

```solidity
function getRoleMember(bytes32 role, uint256 index) external view returns (address)
```



*Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| index | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getRoleMemberCount

```solidity
function getRoleMemberCount(bytes32 role) external view returns (uint256)
```



*Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### listings

```solidity
function listings(uint256) external view returns (uint256 listingId, address tokenOwner, address assetContract, uint256 tokenId, uint256 startTime, uint256 endTime, uint256 quantity, address currency, uint256 reservePricePerToken, uint256 buyoutPricePerToken, enum IMarketplace.TokenType tokenType, enum IMarketplace.ListingType listingType)
```



*listingId =&gt; listing info.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| listingId | uint256 | undefined
| tokenOwner | address | undefined
| assetContract | address | undefined
| tokenId | uint256 | undefined
| startTime | uint256 | undefined
| endTime | uint256 | undefined
| quantity | uint256 | undefined
| currency | address | undefined
| reservePricePerToken | uint256 | undefined
| buyoutPricePerToken | uint256 | undefined
| tokenType | enum IMarketplace.TokenType | undefined
| listingType | enum IMarketplace.ListingType | undefined

### marketFeeBps

```solidity
function marketFeeBps() external view returns (uint64)
```



*The marketplace fee.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### marketplaceTreasury

```solidity
function marketplaceTreasury() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined

### nativeTokenWrapper

```solidity
function nativeTokenWrapper() external view returns (address)
```



*The address of the native token wrapper contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### offer

```solidity
function offer(uint256 _listingId, uint256 _quantityWanted, address _currency, uint256 _pricePerToken) external payable
```



*Lets an account (1) make an offer to a direct listing, or (2) make a bid in an auction.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined
| _quantityWanted | uint256 | undefined
| _currency | address | undefined
| _pricePerToken | uint256 | undefined

### offers

```solidity
function offers(uint256, address) external view returns (uint256 listingId, address offeror, uint256 quantityWanted, address currency, uint256 pricePerToken)
```



*listingId =&gt; address =&gt; info related to offers on a direct listing.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| listingId | uint256 | undefined
| offeror | address | undefined
| quantityWanted | uint256 | undefined
| currency | address | undefined
| pricePerToken | uint256 | undefined

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external nonpayable returns (bytes4)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | address | undefined
| _2 | uint256[] | undefined
| _3 | uint256[] | undefined
| _4 | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external nonpayable returns (bytes4)
```

ERC 1155 and ERC 721 Receiver functions.*



#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | address | undefined
| _2 | uint256 | undefined
| _3 | uint256 | undefined
| _4 | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined

### onERC721Received

```solidity
function onERC721Received(address, address, uint256, bytes) external pure returns (bytes4)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined
| _1 | address | undefined
| _2 | uint256 | undefined
| _3 | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined

### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

### restrictedListerRoleOnly

```solidity
function restrictedListerRoleOnly() external view returns (bool)
```



*Whether listing is restricted by LISTER_ROLE.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

### setAuctionBuffers

```solidity
function setAuctionBuffers(uint256 _timeBuffer, uint256 _bidBufferBps) external nonpayable
```



*Lets a module admin set auction buffers*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _timeBuffer | uint256 | undefined
| _bidBufferBps | uint256 | undefined

### setContractURI

```solidity
function setContractURI(string _uri) external nonpayable
```



*Sets contract URI for the storefront-level metadata of the contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _uri | string | undefined

### setMarketFeeBps

```solidity
function setMarketFeeBps(uint256 _feeBps) external nonpayable
```



*Lets a protocol admin set market fees.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _feeBps | uint256 | undefined

### setMarketplaceTreasury

```solidity
function setMarketplaceTreasury(address payable _newMarketplaceTreasury) external nonpayable
```



*Sets the marketplace treasury address for receiving m.p payouts and royalties*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newMarketplaceTreasury | address payable | undefined

### setRestrictedListerRoleOnly

```solidity
function setRestrictedListerRoleOnly(bool restricted) external nonpayable
```



*Lets a module admin restrict listing by LISTER_ROLE.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| restricted | bool | undefined

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### timeBuffer

```solidity
function timeBuffer() external view returns (uint64)
```



*The minimum amount of time left in an auction after a new bid is created. Default: 15 minutes.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | undefined

### totalListings

```solidity
function totalListings() external view returns (uint256)
```



*Total number of listings on market.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### updateListing

```solidity
function updateListing(uint256 _listingId, uint256 _quantityToList, uint256 _reservePricePerToken, uint256 _buyoutPricePerToken, address _currencyToAccept, uint256 _startTime, uint256 _secondsUntilEndTime) external nonpayable
```



*Lets a listing&#39;s creator edit the listing&#39;s parameters.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _listingId | uint256 | undefined
| _quantityToList | uint256 | undefined
| _reservePricePerToken | uint256 | undefined
| _buyoutPricePerToken | uint256 | undefined
| _currencyToAccept | address | undefined
| _startTime | uint256 | undefined
| _secondsUntilEndTime | uint256 | undefined

### winningBid

```solidity
function winningBid(uint256) external view returns (uint256 listingId, address offeror, uint256 quantityWanted, address currency, uint256 pricePerToken)
```



*listingId =&gt; current winning bid in an auction.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| listingId | uint256 | undefined
| offeror | address | undefined
| quantityWanted | uint256 | undefined
| currency | address | undefined
| pricePerToken | uint256 | undefined



## Events

### AuctionBuffersUpdated

```solidity
event AuctionBuffersUpdated(uint256 timeBuffer, uint256 bidBufferBps)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| timeBuffer  | uint256 | undefined |
| bidBufferBps  | uint256 | undefined |

### AuctionClosed

```solidity
event AuctionClosed(uint256 indexed listingId, address indexed closer, bool indexed cancelled, address auctionCreator, address winningBidder)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| closer `indexed` | address | undefined |
| cancelled `indexed` | bool | undefined |
| auctionCreator  | address | undefined |
| winningBidder  | address | undefined |

### ListingRestricted

```solidity
event ListingRestricted(bool restricted)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| restricted  | bool | undefined |

### ListingUpdate

```solidity
event ListingUpdate(uint256 indexed listingId, address indexed listingCreator)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| listingCreator `indexed` | address | undefined |

### MarketFeeUpdate

```solidity
event MarketFeeUpdate(uint64 newFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newFee  | uint64 | undefined |

### NewListing

```solidity
event NewListing(uint256 indexed listingId, address indexed assetContract, address indexed lister, IMarketplace.Listing listing)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| assetContract `indexed` | address | undefined |
| lister `indexed` | address | undefined |
| listing  | IMarketplace.Listing | undefined |

### NewOffer

```solidity
event NewOffer(uint256 indexed listingId, address indexed offeror, enum IMarketplace.ListingType indexed listingType, uint256 quantityWanted, uint256 totalOfferAmount, address currency)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| offeror `indexed` | address | undefined |
| listingType `indexed` | enum IMarketplace.ListingType | undefined |
| quantityWanted  | uint256 | undefined |
| totalOfferAmount  | uint256 | undefined |
| currency  | address | undefined |

### NewSale

```solidity
event NewSale(uint256 indexed listingId, address indexed assetContract, address indexed lister, address buyer, uint256 quantityBought, uint256 totalPricePaid)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| listingId `indexed` | uint256 | undefined |
| assetContract `indexed` | address | undefined |
| lister `indexed` | address | undefined |
| buyer  | address | undefined |
| quantityBought  | uint256 | undefined |
| totalPricePaid  | uint256 | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |



