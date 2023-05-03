// import env from "react-dotenv";

import TokenAbiMainnet from "./mainnet/AxleTokenMain.json";
import PresaleAbiMainnet from "./mainnet/AxlePresaleMain.json";
import StakingAbiMainnet from "./mainnet/AxleStakingMain.json";
import FlexStakingMainnet from "./mainnet/AxleFlexStakingMain.json";

import TokenAbiTestnet from "../abi/testnet/AxleTokenTest.json";
import PresaleAbiTestnet from "../abi/testnet/AxlePresaleTest.json";
import StakingAbiTestnet from "../abi/testnet/AxleStakingTest.json";
import FlexStakingTestnet from "../abi/testnet/AxleFlexStakingTest.json";

interface Chain {
  chainName: string;
  chainId: number;
  nativeCurrency: {
    name: string;
    decimals: 18;
    symbol: string;
  };
  rpcUrls: string[];
}

interface Creds {
  AXLE_CONTRACT: string;
  AXLE_ZEUS_PRESALE: string;
  AXLE_STAKING: string;
  AXLE_FLEX_STAKING: string;
  flexStakingAbi: any;
  tokenAbi: any;
  presaleAbi: any;
  stakingAbi: any;
  isTestNet: boolean;
  chain: Chain;
}

const mainnet: Creds = {
  AXLE_CONTRACT: "0x7c56C79a454CBFaf63BAdb39f82555109a2A80Bf",
  AXLE_ZEUS_PRESALE: "0xeA29a0f11EaAF0f88DBf705b2b53A09767cDF305",
  AXLE_STAKING: "0x20A33C553dB0b4AAD04065A234999C9228183291",
  AXLE_FLEX_STAKING: "0xC2941D54E3ABB281983f565B8dF7249CBc5E7a0F",
  stakingAbi: StakingAbiMainnet,
  tokenAbi: TokenAbiMainnet,
  presaleAbi: PresaleAbiMainnet,
  flexStakingAbi: FlexStakingMainnet,
  isTestNet: false,
  chain: {
    chainName: "Smart Chain",
    chainId: 56,
    nativeCurrency: {
      name: "Smart Chain",
      decimals: 18,
      symbol: "BNB",
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
  },
};

const testnet: Creds = {
  AXLE_CONTRACT: "0x3b12b9ec6a9f1514809eed63597c13ff6146aa08",
  AXLE_ZEUS_PRESALE: "0xaed66d62e70023762ba0977f5304116120706d84",
  AXLE_STAKING: "0xD996A74A3376D75812f07781EF22666323288B86",
  AXLE_FLEX_STAKING: "0xF637C152Be5aBcC7129F8E061938098604aa1507",
  stakingAbi: StakingAbiTestnet,
  tokenAbi: TokenAbiTestnet,
  presaleAbi: PresaleAbiTestnet,
  flexStakingAbi: FlexStakingTestnet,
  isTestNet: true,
  chain: {
    chainName: "BSC Testnet",
    chainId: 97,
    nativeCurrency: {
      name: "BSC Testnet",
      decimals: 18,
      symbol: "BNB",
    },
    rpcUrls: ["https://data-seed-prebsc-2-s3.binance.org:8545"],
  },
};

// const isDevServer = env.IS_DEV_SERVER;

let creds: Creds = {
  AXLE_CONTRACT: "",
  AXLE_ZEUS_PRESALE: "",
  AXLE_FLEX_STAKING: "",
  flexStakingAbi: null,
  AXLE_STAKING: "",
  presaleAbi: null,
  stakingAbi: null,
  tokenAbi: null,
  isTestNet: true,
  chain: testnet.chain,
};

creds = testnet;
console.log(mainnet);

// if (isDevServer === "true" || isDevServer === undefined || isDevServer === null)
//   creds = testnet;
// else creds = mainnet;

export default creds;
