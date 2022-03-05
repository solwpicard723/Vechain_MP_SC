// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

// Access Control
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/utils/Multicall.sol";

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ProtocolControl is AccessControlEnumerable, Multicall, Initializable {
    /// @dev MAX_BPS for the contract: 10_000 == 100%
    uint256 public constant MAX_BPS = 10000;

    // marketplace treasury address
    address payable public marketplaceTreasury;

    /// @dev The address interpreted as native token of the chain.
    address public constant NATIVE_TOKEN = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    /// @dev Deployer's treasury
    address public royaltyTreasury;

    /// @dev Contract level metadata.
    string public contractURI;

    /// @dev Events.
    event FundsWithdrawn(address indexed to, address indexed currency, uint256 amount);
    event EtherReceived(address from, uint256 amount);

    /// @dev Check whether the caller is a protocol admin
    modifier onlyProtocolAdmin() {
        require(
            hasRole(DEFAULT_ADMIN_ROLE, msg.sender),
            "ProtocolControl: Only protocol admins can call this function."
        );
        _;
    }

    constructor() initializer {}

    function initialize(address _admin, string memory _uri) external initializer {
        // Set contract URI
        contractURI = _uri;
        // Set default royalty treasury address
        royaltyTreasury = address(this);
        // Set access control roles
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
    }

    /// @dev Lets the contract receive ether.
    receive() external payable {
        emit EtherReceived(msg.sender, msg.value);
    }

    /// @dev Returns the Royalty payment splitter for a particular module.
    function getRoyaltyTreasury() external view returns (address) {
        return royaltyTreasury;
    }

    /// @dev Sets contract URI for the contract-level metadata of the contract.
    function setContractURI(string calldata _URI) external onlyProtocolAdmin {
        contractURI = _URI;
    }

    /// @dev Lets a protocol admin withdraw tokens from this contract.
    function withdrawFunds(address to, address currency) external onlyProtocolAdmin {
        IERC20 _currency = IERC20(currency);
        uint256 amount;

        bool isNativeToken = _isNativeToken(address(_currency));

        if (isNativeToken) {
            amount = address(this).balance;
        } else {
            amount = _currency.balanceOf(address(this));
        }

        bool transferSuccess;

        if (isNativeToken) {
            (transferSuccess, ) = payable(to).call{ value: amount }("");
            require(transferSuccess, "failed to withdraw funds");

            emit FundsWithdrawn(to, currency, amount);
        } else {
            transferSuccess = _currency.transfer(to, amount);
            require(transferSuccess, "failed to transfer payment");

            emit FundsWithdrawn(to, currency, amount);
        }
    }

    /// @dev Checks whether an address is to be interpreted as the native token
    function _isNativeToken(address _toCheck) internal pure returns (bool) {
        return _toCheck == NATIVE_TOKEN || _toCheck == address(0);
    }
}
