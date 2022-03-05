import { ethers } from "hardhat";

// Types
import { Contract, ContractFactory } from "ethers";
import addresses from "../utils/addresses/console.json";
import * as fs from "fs";
import * as path from "path";

// Utils
async function main(): Promise<void> {
  // Deploy Marketplace
  const marketContractURI: string = ""; // TODO set
  // source https://docs.vechain.org/others/miscellaneous.html#token-list
  const nativeTokenWrapper: string = "0x0000000000000000000000000000456E65726779";
  const _marketFeeBps = 0;
  const networkName = "vechain_testnet";

  const Marketplace_Factory: ContractFactory = await ethers.getContractFactory("Marketplace");
  const marketplace: Contract = await Marketplace_Factory.deploy(nativeTokenWrapper, marketContractURI, _marketFeeBps);
  await marketplace.deployed();

  console.log(`Deploying Marketplace: ${marketplace.address} at tx hash: ${marketplace.deployTransaction.hash}`);
  const updatedAddresses = {
    ...addresses,

    [networkName]: {
      ...addresses,
      marketplace: marketplace.address,
    },
  };

  fs.writeFileSync(path.join(__dirname, "../utils/addresses/console.json"), JSON.stringify(updatedAddresses, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
