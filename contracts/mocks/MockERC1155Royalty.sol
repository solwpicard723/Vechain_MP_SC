// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

// Royalties
import { IERC2981 } from "@openzeppelin/contracts/interfaces/IERC2981.sol";

import { Marketplace } from "./../marketplace/Marketplace.sol";

contract MockERC1155Royalty is ERC1155PresetMinterPauser, IERC2981 {
    /// @dev NFT sale royalties -- see EIP 2981
    uint256 public royaltyBps;

    // marketplace treasury address
    address payable public marketplaceTreasury;

    /// @dev MAX_BPS for the contract: 10_000 == 100%
    uint256 public constant MAX_BPS = 10000;

    /// @dev Emitted when the EIP 2981 royalty of the contract is updated.
    event RoyaltyUpdated(uint256 royaltyBps);

    constructor(address payable marketplaceTreasury_) ERC1155PresetMinterPauser("ipfs://BaseURI") {
        marketplaceTreasury = marketplaceTreasury_;
    }

    /// @dev See EIP 2918
    function royaltyInfo(uint256, uint256 salePrice)
        external
        view
        virtual
        override
        returns (address receiver, uint256 royaltyAmount)
    {
        receiver = marketplaceTreasury;
        royaltyAmount = (salePrice * royaltyBps) / MAX_BPS;
    }

    /// @dev Lets a protocol admin update the royalties paid on pack sales.
    function setRoyaltyBps(uint256 _royaltyBps) public {
        require(_royaltyBps < MAX_BPS, "NFT: Bps provided must be less than 10,000");

        royaltyBps = _royaltyBps;

        emit RoyaltyUpdated(_royaltyBps);
    }
}
