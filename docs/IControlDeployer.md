# IControlDeployer









## Methods

### deployControl

```solidity
function deployControl(uint256 nonce, address deployer, string uri) external nonpayable returns (address)
```



*Deploys an instance of `ProtocolControl`*

#### Parameters

| Name | Type | Description |
|---|---|---|
| nonce | uint256 | undefined
| deployer | address | undefined
| uri | string | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined



## Events

### DeployedControl

```solidity
event DeployedControl(address indexed registry, address indexed deployer, address indexed control)
```



*Emitted when an instance of `ProtocolControl` is deployed.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| registry `indexed` | address | undefined |
| deployer `indexed` | address | undefined |
| control `indexed` | address | undefined |



