const ethers = require("ethers");

const PROVIDER = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org"
);

// Contract functions
const ABI = [
  "function checkBalances(address _walletAddress, address[] memory _tokens) public view returns(tuple(address tokenAddress, uint balance)[] memory)",
];

const WALLET_ADDRESS = "0x018b49310f7112abf9218c716d424b66b33c191f";
const CONTRACT_ADDRESS = "0xcD81A218B992f3063A4dce8a7Eee96A322E7b272";
const CONTRACT = new ethers.Contract(CONTRACT_ADDRESS, ABI, PROVIDER);
const TOKENS = [
  "0xe9e7cea3dedca5984780bafc599bd69add087d56", // BUSD
  "0x14016e85a25aeb13065688cafb43044c2ef86784", // TUSD
  "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3" // DAI
];

const checkTokenBalances = async (_walletAddress, _tokens) =>
  await CONTRACT.checkBalances(_walletAddress, _tokens);

(async () => {
  const result = await checkTokenBalances(WALLET_ADDRESS, TOKENS);

  console.log(
    result.map((token) => ({
      token: token.tokenAddress,
      balance: ethers.utils.formatEther(token.balance),
    }))
  );
})();
