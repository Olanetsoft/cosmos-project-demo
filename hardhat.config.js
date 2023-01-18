require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ethers = require('ethers');

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

const mnemonic =
  "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

  let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);

  // console.log(mnemonicWallet.privateKey);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },

    local : {
      url: "http://localhost:8545",
    },

    evmos: {
      // provider: () =>
      //   new HDWalletProvider(mnemonic, "https://eth.bd.evmos.dev:8545"),
      url: "https://eth.bd.evmos.dev:8545",
      accounts:[ mnemonicWallet.privateKey ],
      // network_id: 9000,
      // chain_id: 9000,

    },
  },
};
