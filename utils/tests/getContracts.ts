import { ethers } from "hardhat";

// Types
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Log } from "@ethersproject/abstract-provider";

// Contract types
import { WETH9 } from "../../typechain/WETH9";
import { Coin } from "../../typechain/Coin";
import { Marketplace } from "../../typechain/Marketplace";

export type Contracts = {
  coin: Coin;
  marketv2: Marketplace;
  weth: WETH9;
};

export async function getContracts(
  protocolAdmin: SignerWithAddress,
  _networkName: string = "rinkeby",
): Promise<Contracts> {
  // Deploy WETH
  const weth: WETH9 = await ethers.getContractFactory("WETH9").then(f => f.deploy());

  // Deploy Marketplace
  const marketContractURI: string = "";
  const marketv2: Marketplace = (await ethers
    .getContractFactory("Marketplace")
    .then(f => f.connect(protocolAdmin).deploy(weth.address, marketContractURI, 0))) as Marketplace;

  // Deploy Coin
  const coinName = "name";
  const coinSymbol = "SYMBOL";
  const coinURI = "";

  const coin: Coin = (await ethers
    .getContractFactory("Coin")
    .then(f => f.connect(protocolAdmin).deploy(coinName, coinSymbol, coinURI))) as Coin;

  return {
    weth,
    marketv2,
    coin,
  };
}
