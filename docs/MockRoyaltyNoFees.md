# MockRoyaltyNoFees





Royalty automatically adds protocol provider (the registry) of protocol control to the payees and shares that represent the fees.



## Methods

### contractURI

```solidity
function contractURI() external view returns (string)
```



*Returns the URI for the contract-level metadata of the contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### distribute

```solidity
function distribute() external nonpayable
```



*Release owed amount of the `token` to all of the payees.*


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

### payee

```solidity
function payee(uint256 index) external view returns (address)
```



*Getter for the address of the payee number `index`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| index | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### payeeCount

```solidity
function payeeCount() external view returns (uint256)
```



*Getter for getting the number of payee*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### release

```solidity
function release(contract IERC20 token, address account) external nonpayable
```



*Triggers a transfer to `account` of the amount of `token` tokens they are owed, according to their percentage of the total shares and their previous withdrawals. `token` must be the address of an IERC20 contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| token | contract IERC20 | undefined
| account | address | undefined

### released

```solidity
function released(address account) external view returns (uint256)
```



*Getter for the amount of `token` tokens already released to a payee. `token` should be the address of an IERC20 contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### setContractURI

```solidity
function setContractURI(string _URI) external nonpayable
```



*Sets contract URI for the contract-level metadata of the contract.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _URI | string | undefined

### shares

```solidity
function shares(address account) external view returns (uint256)
```



*Getter for the amount of shares held by an account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### totalReleased

```solidity
function totalReleased() external view returns (uint256)
```



*Getter for the total amount of `token` already released. `token` should be the address of an IERC20 contract.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### totalShares

```solidity
function totalShares() external view returns (uint256)
```



*Getter for the total shares held by payees.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined



## Events

### ERC20PaymentReleased

```solidity
event ERC20PaymentReleased(contract IERC20 indexed token, address to, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| token `indexed` | contract IERC20 | undefined |
| to  | address | undefined |
| amount  | uint256 | undefined |

### PayeeAdded

```solidity
event PayeeAdded(address account, uint256 shares)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |
| shares  | uint256 | undefined |

### PaymentReceived

```solidity
event PaymentReceived(address from, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| amount  | uint256 | undefined |

### PaymentReleased

```solidity
event PaymentReleased(address to, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| to  | address | undefined |
| amount  | uint256 | undefined |



