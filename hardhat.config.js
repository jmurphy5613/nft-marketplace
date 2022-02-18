require("@nomiclabs/hardhat-waffle");



module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
  }
  solidity: "0.8.4",
};
