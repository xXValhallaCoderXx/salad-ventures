const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secrets").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "0.0.0.0", // Localhost (default: none)
      port: 8545, // Standard BSC port (default: none)
      network_id: "*", // Any network (default: none)
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://data-seed-prebsc-2-s1.binance.org:8545"
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(mnemonic, "https://bsc-dataseed1.binance.org"),
      network_id: 56,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
  // api_keys: {
  //   bscscan: "16U781QEVV11JWDZWW4IHFE3G2C3KPZYMR",
  // },
  // plugins: ["truffle-plugin-verify"],
};