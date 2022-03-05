# PlanetNFTs









## Methods

### _availableTokens

```solidity
function _availableTokens(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### _pendingMint

```solidity
function _pendingMint(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### _whitelister

```solidity
function _whitelister(address) external view returns (uint8)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined

### addWhiteList

```solidity
function addWhiteList(uint8 index, address[] lsts) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined
| lsts | address[] | undefined

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| tokenId | uint256 | undefined

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### completeMintBatch

```solidity
function completeMintBatch(uint256 randomSeed) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| randomSeed | uint256 | undefined

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getBlockLimit

```solidity
function getBlockLimit(uint8 index) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getEstimatNFT

```solidity
function getEstimatNFT(address pm_address) external view returns (uint8)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| pm_address | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined

### getFirstPendingMintIndex

```solidity
function getFirstPendingMintIndex() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getGiveAwayAddress

```solidity
function getGiveAwayAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getLastPendingMintIndex

```solidity
function getLastPendingMintIndex() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getMaxLimit

```solidity
function getMaxLimit() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getMaxPendingMintsToProces

```solidity
function getMaxPendingMintsToProces() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getOracleRandom

```solidity
function getOracleRandom() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getPrice

```solidity
function getPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getRandomNumber

```solidity
function getRandomNumber(uint256 top, uint256 seed, uint256 currentPendingList) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| top | uint256 | undefined
| seed | uint256 | undefined
| currentPendingList | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getTierMintLimit

```solidity
function getTierMintLimit(uint8 index) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getTierNumber

```solidity
function getTierNumber(address pm_address) external view returns (uint8)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| pm_address | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined

### getTierPrice

```solidity
function getTierPrice(uint8 index) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getTotalMintsForgiveAway

```solidity
function getTotalMintsForgiveAway() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### initTokenList

```solidity
function initTokenList() external nonpayable
```






### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined
| operator | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### name

```solidity
function name() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```






### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| tokenId | uint256 | undefined
| _data | bytes | undefined

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined
| approved | bool | undefined

### setBlockLimit

```solidity
function setBlockLimit(uint8 index, uint256 tsBlock) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined
| tsBlock | uint256 | undefined

### setGiveAwayAddress

```solidity
function setGiveAwayAddress(address giveawayAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| giveawayAddress | address | undefined

### setMaxLimit

```solidity
function setMaxLimit(uint256 limit) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| limit | uint256 | undefined

### setMaxPendingMintsToProces

```solidity
function setMaxPendingMintsToProces(uint256 maxPendingMintsToProces) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| maxPendingMintsToProces | uint256 | undefined

### setOracleRandom

```solidity
function setOracleRandom(address oracleRandom) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| oracleRandom | address | undefined

### setTempBaseUri

```solidity
function setTempBaseUri(string basUri) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| basUri | string | undefined

### setTierMintLimit

```solidity
function setTierMintLimit(uint8 index, uint8 limit) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined
| limit | uint8 | undefined

### setTierPrice

```solidity
function setTierPrice(uint8 index, uint256 price) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint8 | undefined
| price | uint256 | undefined

### setTokenURI

```solidity
function setTokenURI(uint256 number, string tokenURI) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| number | uint256 | undefined
| tokenURI | string | undefined

### setTotalMintsForgiveAway

```solidity
function setTotalMintsForgiveAway(uint256 limit) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| limit | uint256 | undefined

### startMintBatch

```solidity
function startMintBatch(uint8 number) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| number | uint8 | undefined

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

### symbol

```solidity
function symbol() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```



*See {IVIP181Metadata-tokenURI}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined
| to | address | undefined
| tokenId | uint256 | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### walletOfOwner

```solidity
function walletOfOwner(address wallet) external view returns (uint256[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| wallet | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | undefined

### withdraw

```solidity
function withdraw() external nonpayable
```








## Events

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RandomNumber

```solidity
event RandomNumber(uint256 number)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| number  | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### addPendingMint

```solidity
event addPendingMint(address indexed minter, uint8 indexed number, uint256 pendingId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| minter `indexed` | address | undefined |
| number `indexed` | uint8 | undefined |
| pendingId  | uint256 | undefined |

### mintedWithRandomNumber

```solidity
event mintedWithRandomNumber(address indexed minter, uint256 randomNumber)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| minter `indexed` | address | undefined |
| randomNumber  | uint256 | undefined |



