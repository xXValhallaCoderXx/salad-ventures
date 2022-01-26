import { ethers } from "ethers";

const PROVIDER = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.binance.org/"
);

// Contract functions
const ABI: string[] = [
  "function balanceOf(address account) view returns (uint256)",
];

const CONTRACT_ADDRESS: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c"; // $SWTH Token
const CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER);

const callContractBalance = async (_address: string): Promise<string> =>
  await CONTRACT.balanceOf(_address);

  // Address to check token balance
const WALLET_ADDRESS: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

(async () => {
  const fetchWalletBalance = async (_address): Promise<string> => {
    try {
      const balance = await callContractBalance(_address);
      return `${_address} ${ethers.utils.formatEther(balance)}\n`;
    } catch (e) {
      // Cheap hack to handle in case one of the calls fail
      return `${_address} - Error\n`;
    }
  };

  const results: string[] = await Promise.all(
    WALLET_ADDRESS.map(async (_address) => await fetchWalletBalance(_address))
  );
  // Quick hack to display string as per format in challenge
  console.log(results.join(""));
})();
