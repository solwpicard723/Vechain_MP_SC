# NFTCollection









## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### MINTER_ROLE

```solidity
function MINTER_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### PAUSER_ROLE

```solidity
function PAUSER_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### TRANSFER_ROLE

```solidity
function TRANSFER_ROLE() external view returns (bytes32)
```



*Only TRANSFER_ROLE holders can have tokens transferred from or to them, during restricted transfers.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### _contractURI

```solidity
function _contractURI() external view returns (string)
```



*Collection level metadata.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### balanceOf

```solidity
function balanceOf(address account, uint256 id) external view returns (uint256)
```



*See {IERC1155-balanceOf}. Requirements: - `account` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined
| id | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) external view returns (uint256[])
```



*See {IERC1155-balanceOfBatch}. Requirements: - `accounts` and `ids` must have the same length.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| accounts | address[] | undefined
| ids | uint256[] | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined

### burn

```solidity
function burn(address account, uint256 id, uint256 value) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined
| id | uint256 | undefined
| value | uint256 | undefined

### burnBatch

```solidity
function burnBatch(address account, uint256[] ids, uint256[] values) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined
| ids | uint256[] | undefined
| values | uint256[] | undefined

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Returns the URI for the storefront-level metadata of the contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### createNativeTokens

```solidity
function createNativeTokens(address to, string[] _nftURIs, uint256[] _nftSupplies, bytes data) external nonpayable returns (uint256[] nftIds)
```

Create native ERC 1155 NFTs.



#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| _nftURIs | string[] | undefined
| _nftSupplies | uint256[] | undefined
| data | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| nftIds | uint256[] | undefined

### creator

```solidity
function creator(uint256 _nftId) external view returns (address)
```



*Returns the creator of an NFT*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### erc20WrappedTokens

```solidity
function erc20WrappedTokens(uint256) external view returns (address source, uint256 shares, uint256 underlyingTokenAmount)
```



*NFT tokenId =&gt; state of underlying ERC20 token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| source | address | undefined
| shares | uint256 | undefined
| underlyingTokenAmount | uint256 | undefined

### erc721WrappedTokens

```solidity
function erc721WrappedTokens(uint256) external view returns (address source, uint256 tokenId)
```



*NFT tokenId =&gt; state of underlying ERC721 token.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| source | address | undefined
| tokenId | uint256 | undefined

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

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) external view returns (bool)
```



*See {IERC1155-isApprovedForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined
| operator | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### isTrustedForwarder

```solidity
function isTrustedForwarder(address forwarder) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| forwarder | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### mint

```solidity
function mint(address to, uint256 id, uint256 amount, bytes data) external nonpayable
```



*See {ERC1155Minter}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| id | uint256 | undefined
| amount | uint256 | undefined
| data | bytes | undefined

### mintBatch

```solidity
function mintBatch(address to, uint256[] ids, uint256[] amounts, bytes data) external nonpayable
```



*See {ERC1155Minter}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| ids | uint256[] | undefined
| amounts | uint256[] | undefined
| data | bytes | undefined

### multicall

```solidity
function multicall(bytes[] data) external nonpayable returns (bytes[] results)
```



*Receives and executes a batch of function calls on this contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| data | bytes[] | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| results | bytes[] | undefined

### nextTokenId

```solidity
function nextTokenId() external view returns (uint256)
```



*The token Id of the next token to be minted.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

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
function onERC721Received(address, address, uint256, bytes) external nonpayable returns (bytes4)
```



*See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.*

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

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### pause

```solidity
function pause() external nonpayable
```



*Pauses all token transfers. See {ERC1155Pausable} and {Pausable-_pause}. Requirements: - the caller must have the `PAUSER_ROLE`.*


### paused

```solidity
function paused() external view returns (bool)
```



*Returns true if the contract is paused, and false otherwise.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### redeemERC20

```solidity
function redeemERC20(uint256 _nftId, uint256 _amount) external nonpayable
```



*Lets the nft owner redeem their ERC20 tokens.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftId | uint256 | undefined
| _amount | uint256 | undefined

### redeemERC721

```solidity
function redeemERC721(uint256 _nftId) external nonpayable
```



*Lets a wrapped nft owner redeem the underlying ERC721 NFT.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftId | uint256 | undefined

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

### royaltyBps

```solidity
function royaltyBps() external view returns (uint256)
```



*NFT sale royalties -- see EIP 2981*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### royaltyInfo

```solidity
function royaltyInfo(uint256, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount)
```



*See EIP 2918*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| salePrice | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| receiver | address | undefined
| royaltyAmount | uint256 | undefined

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) external nonpayable
```



*See {IERC1155-safeBatchTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| ids | uint256[] | undefined
| amounts | uint256[] | undefined
| data | bytes | undefined

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) external nonpayable
```



*See {IERC1155-safeTransferFrom}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| id | uint256 | undefined
| amount | uint256 | undefined
| data | bytes | undefined

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*See {IERC1155-setApprovalForAll}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined
| approved | bool | undefined

### setContractURI

```solidity
function setContractURI(string _URI) external nonpayable
```



*Sets contract URI for the storefront-level metadata of the contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _URI | string | undefined

### setOwner

```solidity
function setOwner(address _newOwner) external nonpayable
```



*Lets a module admin set a new owner for the contract. The new owner must be a module admin.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _newOwner | address | undefined

### setRestrictedTransfer

```solidity
function setRestrictedTransfer(bool _restrictedTransfer) external nonpayable
```



*Lets a protocol admin restrict token transfers.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _restrictedTransfer | bool | undefined

### setRoyaltyBps

```solidity
function setRoyaltyBps(uint256 _royaltyBps) external nonpayable
```



*Lets a protocol admin update the royalties paid on pack sales.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _royaltyBps | uint256 | undefined

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See ERC 165*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### tokenState

```solidity
function tokenState(uint256) external view returns (address creator, string uri, enum NFTCollection.UnderlyingType underlyingType)
```



*NFT tokenId =&gt; token state.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| creator | address | undefined
| uri | string | undefined
| underlyingType | enum NFTCollection.UnderlyingType | undefined

### tokenURI

```solidity
function tokenURI(uint256 _nftId) external view returns (string)
```



*Alternative function to return a token&#39;s URI*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### totalSupply

```solidity
function totalSupply(uint256 id) external view returns (uint256)
```



*Total amount of tokens in with a given id.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| id | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transfersRestricted

```solidity
function transfersRestricted() external view returns (bool)
```



*Whether transfers on tokens are restricted.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### unpause

```solidity
function unpause() external nonpayable
```



*Unpauses all token transfers. See {ERC1155Pausable} and {Pausable-_unpause}. Requirements: - the caller must have the `PAUSER_ROLE`.*


### uri

```solidity
function uri(uint256 _nftId) external view returns (string)
```



*See EIP 1155*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### wrapERC20

```solidity
function wrapERC20(address _tokenContract, uint256 _tokenAmount, uint256 _numOfNftsToMint, string _nftURI) external nonpayable
```



*Wraps ERC20 tokens as ERC1155 NFTs.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenContract | address | undefined
| _tokenAmount | uint256 | undefined
| _numOfNftsToMint | uint256 | undefined
| _nftURI | string | undefined

### wrapERC721

```solidity
function wrapERC721(address _nftContract, uint256 _tokenId, string _nftURI) external nonpayable
```



*Wraps an ERC721 NFT as an ERC1155 NFT.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftContract | address | undefined
| _tokenId | uint256 | undefined
| _nftURI | string | undefined



## Events

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed account, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### ERC20Redeemed

```solidity
event ERC20Redeemed(address indexed redeemer, uint256 indexed tokenId, address indexed sourceOfUnderlying, uint256 tokenAmountReceived, uint256 sharesRedeemed)
```



*Emitted when an underlying ERC 20 token is redeemed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemer `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |
| sourceOfUnderlying `indexed` | address | undefined |
| tokenAmountReceived  | uint256 | undefined |
| sharesRedeemed  | uint256 | undefined |

### ERC20WrappedToken

```solidity
event ERC20WrappedToken(address indexed creator, address indexed sourceOfUnderlying, uint256 totalAmountOfUnderlying, uint256 shares, uint256 tokenId, string tokenURI)
```



*Emitted when ERC 20 wrapped as an ERC 1155 token is minted.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| creator `indexed` | address | undefined |
| sourceOfUnderlying `indexed` | address | undefined |
| totalAmountOfUnderlying  | uint256 | undefined |
| shares  | uint256 | undefined |
| tokenId  | uint256 | undefined |
| tokenURI  | string | undefined |

### ERC721Redeemed

```solidity
event ERC721Redeemed(address indexed redeemer, address indexed sourceOfUnderlying, uint256 tokenIdOfUnderlying, uint256 tokenId)
```



*Emitted when an underlying ERC 721 token is redeemed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| redeemer `indexed` | address | undefined |
| sourceOfUnderlying `indexed` | address | undefined |
| tokenIdOfUnderlying  | uint256 | undefined |
| tokenId  | uint256 | undefined |

### ERC721WrappedToken

```solidity
event ERC721WrappedToken(address indexed creator, address indexed sourceOfUnderlying, uint256 tokenIdOfUnderlying, uint256 tokenId, string tokenURI)
```



*Emitted when ERC 721 wrapped as an ERC 1155 token is minted.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| creator `indexed` | address | undefined |
| sourceOfUnderlying `indexed` | address | undefined |
| tokenIdOfUnderlying  | uint256 | undefined |
| tokenId  | uint256 | undefined |
| tokenURI  | string | undefined |

### NativeTokens

```solidity
event NativeTokens(address indexed creator, uint256[] tokenIds, string[] tokenURIs, uint256[] tokenSupplies)
```



*Emitted when native ERC 1155 tokens are created.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| creator `indexed` | address | undefined |
| tokenIds  | uint256[] | undefined |
| tokenURIs  | string[] | undefined |
| tokenSupplies  | uint256[] | undefined |

### NewOwner

```solidity
event NewOwner(address prevOwner, address newOwner)
```



*Emitted when a new Owner is set.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| prevOwner  | address | undefined |
| newOwner  | address | undefined |

### Paused

```solidity
event Paused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |

### RestrictedTransferUpdated

```solidity
event RestrictedTransferUpdated(bool transferable)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| transferable  | bool | undefined |

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

### RoyaltyUpdated

```solidity
event RoyaltyUpdated(uint256 royaltyBps)
```



*Emitted when the EIP 2981 royalty of the contract is updated.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| royaltyBps  | uint256 | undefined |

### TransferBatch

```solidity
event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] values)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| ids  | uint256[] | undefined |
| values  | uint256[] | undefined |

### TransferSingle

```solidity
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| id  | uint256 | undefined |
| value  | uint256 | undefined |

### URI

```solidity
event URI(string value, uint256 indexed id)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| value  | string | undefined |
| id `indexed` | uint256 | undefined |

### Unpaused

```solidity
event Unpaused(address account)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |



