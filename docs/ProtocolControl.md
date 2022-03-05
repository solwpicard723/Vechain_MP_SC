# ProtocolControl









## Methods

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### MAX_BPS

```solidity
function MAX_BPS() external view returns (uint256)
```



*MAX_BPS for the contract: 10_000 == 100%*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### NATIVE_TOKEN

```solidity
function NATIVE_TOKEN() external view returns (address)
```



*The address interpreted as native token of the chain.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Contract level metadata.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

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

### getRoyaltyTreasury

```solidity
function getRoyaltyTreasury() external view returns (address)
```



*Returns the Royalty payment splitter for a particular module.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

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

### initialize

```solidity
function initialize(address _admin, string _uri) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _admin | address | undefined
| _uri | string | undefined

### marketplaceTreasury

```solidity
function marketplaceTreasury() external view returns (address payable)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address payable | undefined

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

### royaltyTreasury

```solidity
function royaltyTreasury() external view returns (address)
```



*Deployer&#39;s treasury*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### setContractURI

```solidity
function setContractURI(string _URI) external nonpayable
```



*Sets contract URI for the contract-level metadata of the contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _URI | string | undefined

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### withdrawFunds

```solidity
function withdrawFunds(address to, address currency) external nonpayable
```



*Lets a protocol admin withdraw tokens from this contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined
| currency | address | undefined



## Events

### EtherReceived

```solidity
event EtherReceived(address from, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| amount  | uint256 | undefined |

### FundsWithdrawn

```solidity
event FundsWithdrawn(address indexed to, address indexed currency, uint256 amount)
```



*Events.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to `indexed` | address | undefined |
| currency `indexed` | address | undefined |
| amount  | uint256 | undefined |

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



