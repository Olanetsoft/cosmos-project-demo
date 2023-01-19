require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

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
      url: "https://eth.bd.evmos.dev:8545",
      accounts:[process.env.PRIVATE_KEY],

    },
  },
};
