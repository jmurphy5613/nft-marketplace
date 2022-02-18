require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: []
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: []
    },
  },
  solidity: "0.8.4",
};
