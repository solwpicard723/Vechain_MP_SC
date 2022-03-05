// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract MockERC1155 is ERC1155PresetMinterPauser {
    constructor() ERC1155PresetMinterPauser("ipfs://BaseURI") {}
}
