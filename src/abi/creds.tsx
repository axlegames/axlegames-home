import TokenAbiMainnet from "./mainnet/AxleTokenMain.json";
import PresaleAbiMainnet from "./mainnet/AxlePresaleMain.json";
import StakingAbiMainnet from "./mainnet/AxleStakingMain.json";
import FlexStakingMainnet from "./mainnet/AxleFlexStakingMain.json";
import FlexStakingBnbMainnet from "./mainnet/AxleFlexBnbStaking.json";
import AxleZuesNFTMintMainnet from "./mainnet/AxleZuesMintMain.json";

import TokenAbiTestnet from "../abi/testnet/AxleTokenTest.json";
import PresaleAbiTestnet from "../abi/testnet/AxlePresaleTest.json";
import StakingAbiTestnet from "../abi/testnet/AxleStakingTest.json";
import FlexStakingTestnet from "../abi/testnet/AxleFlexStakingTest.json";
import AxleZuesNFTMintTestnet from "../abi/testnet/AxleZuesMintTest.json";
import FlexStakingBnbTestnet from "../abi/testnet/AxleFlexBnbStaking.json";

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
  AXLE_BNB_FLEX_STAKING: string;
  AXLE_ZUES_MINT: string;
  tokenAbi: any;
  presaleAbi: any;
  stakingAbi: any;
  flexStakingAbi: any;
  flexStakingBnbAbi: any;
  axleZuesMintAbi: any;
  isTestNet: boolean;
  chain: Chain;
  blockChainUrl: string;
}

const mainnet: Creds = {
  AXLE_CONTRACT: "0x7c56C79a454CBFaf63BAdb39f82555109a2A80Bf",
  AXLE_ZEUS_PRESALE: "0xeA29a0f11EaAF0f88DBf705b2b53A09767cDF305",
  AXLE_STAKING: "0x20A33C553dB0b4AAD04065A234999C9228183291",
  AXLE_FLEX_STAKING: "0xC2941D54E3ABB281983f565B8dF7249CBc5E7a0F",
  AXLE_BNB_FLEX_STAKING: "0xF050672823E21296e8BA19944e557657ff72dAC7",
  AXLE_ZUES_MINT: "0x0bF185598824Fb6160F6AC8Cb1a19f39C65453aa",
  stakingAbi: StakingAbiMainnet,
  tokenAbi: TokenAbiMainnet,
  presaleAbi: PresaleAbiMainnet,
  flexStakingAbi: FlexStakingMainnet,
  flexStakingBnbAbi: FlexStakingBnbMainnet,
  axleZuesMintAbi: AxleZuesNFTMintMainnet,
  isTestNet: false,
  blockChainUrl: "https://bscscan.com/tx/",
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
  AXLE_BNB_FLEX_STAKING: "0xC414601c757316Ba3a3564594518e901Fd8ce836",
  AXLE_ZUES_MINT: "0xdD430aB53a671C18941D3E70355224e141896fC4",
  axleZuesMintAbi: AxleZuesNFTMintTestnet,
  stakingAbi: StakingAbiTestnet,
  tokenAbi: TokenAbiTestnet,
  presaleAbi: PresaleAbiTestnet,
  flexStakingAbi: FlexStakingTestnet,
  flexStakingBnbAbi: FlexStakingBnbTestnet,
  isTestNet: true,
  blockChainUrl: "https://testnet.bscscan.com/tx/",
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

const isDevServer = true;

let creds = mainnet;

if (isDevServer === true) creds = testnet;
else creds = mainnet;

export default creds;
