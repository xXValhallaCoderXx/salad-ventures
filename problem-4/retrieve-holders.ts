import {ethers } from "ethers";


const PROVIDER = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

// Contract functions
const ABI: string[] = [
  "function balanceOf(address account) view returns (uint256)",
];

// Some random wallet on BSC
const CONTRACT_ADDRESS: string = "0xB1782E389d2a6DB3Ba29398dAb1e82ba872919Ba";
const CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER);

const callContractBalance = async (_address: string): Promise<string> =>
  await CONTRACT.balanceOf(_address);

const WALLET_ADDRESS: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

(async () => {

  const fetchWalletBalance = async (_address): Promise<string> => {
    const balance = await callContractBalance(_address);
    return `${_address} ${ethers.utils.formatEther(balance)}\n`;
  };


  const results: string[] = await Promise.all(
    WALLET_ADDRESS.map(async (_address) => await fetchWalletBalance(_address))
  );
  // Little nasty hack to format string as per
  console.log(results.join(""));
})();