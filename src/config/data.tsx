import ProductGameImg from "../assets/products/games.webp";
import ProductGameIcon from "../assets/product_icons/gaming.webp";

import ProductStakingImg from "../assets/products/stake.webp";
import ProductStakingIcon from "../assets/product_icons/stake.webp";

import ProductSwapImg from "../assets/products/swap.webp";
import ProductSwapIcon from "../assets/product_icons/swap.webp";

import ProductLeagueImg from "../assets/products/league.webp";
import ProductLeagueIcon from "../assets/product_icons/league.webp";

import ProductDaoImg from "../assets/products/dao.webp";
import ProductDaoIcon from "../assets/product_icons/dao.webp";

import ProductMarketPlaceImg from "../assets/products/marketplace.webp";
import ProductMarketPlaceIcon from "../assets/product_icons/store.webp";

import WhyBlockchain from "../assets/why/blockchain.webp";
import WhyDao from "../assets/why/dao.webp";
import WhyDeflation from "../assets/why/deflation.webp";
import WhyReward from "../assets/why/medal.webp";
import WhySafe from "../assets/why/secure.webp";

export const products = [
  {
    isLive: true,
    subTitle: "Axle Games",
    label: "Play",
    text: "A skill based AI gaming platform that offers various single-player and multiplayer games with live tournaments/contests. Users can compete with their peers and win attractive rewards with unlimited fun.",
    image: ProductGameIcon,
    mainImg: ProductGameImg,
    function: () => window.open("https://play.axlegames.io", "_blank"),
  },
  {
    isLive: true,
    subTitle: "Axle Staking",
    label: "STAKE $AXLE",
    text: "Users can stake their $AXLE tokens by locking in our staking pools for a certain period of time. Our stakers will have exclusive benefits to the Axle platform and will receive $AXLE token rewards with attractive APYs.",
    image: ProductStakingIcon,
    mainImg: ProductStakingImg,
    function: () => window.open("https://sale.axlegames.io", "_blank"),
  },

  {
    isLive: true,
    subTitle: "Axle Swap",
    label: "GO TO SWAP",
    text: "A decentralised exchange is a peer-to-peer marketplace to exchange cryptos. Axle swaps enables users to swap their $AXLE tokens to other supported tokens and vice versa. Decentralisation is a fundamental philosophy of blockchain and Axle Swap will play a huge role in decentralisation.",
    image: ProductSwapIcon,
    mainImg: ProductSwapImg,
    function: () => window.open("https://sale.axlegames.io", "_blank"),
  },
  {
    isLive: false,
    subTitle: "Axle Arena",
    label: "BUY $AXLE",
    text: "In our Axle Arena, users can make/meet new friends and compete against each others by playing PvP games on the platform. In short, Axle Arena is a social media with wide range of offerings for our gamers on the platform.",
    image: ProductLeagueIcon,
    mainImg: ProductLeagueImg,
    function: () => null,
  },

  {
    isLive: false,
    subTitle: "Axle DAO",
    label: "GO TO SWAP",
    text: "Tokenised ownership of the Axle games platform through Axle DAO. All the token holders will be able to take part in the governance of the platform for increased transparency and trust. Every $AXLE token holder is a platform owner.",
    image: ProductDaoIcon,
    mainImg: ProductDaoImg,
    function: () => null,
  },
  {
    isLive: false,
    subTitle: "Axle Marketplace",
    label: "BUY $AXLE",
    text: "An NFT Marketplace to trade in-game NFTs used in our AXLE games platform. These NFTs will unlock special abilities/powers and boost the winning chances of the gamer. NFT holders will be eligible to receive exclusive rewards in the future.",
    image: ProductMarketPlaceIcon,
    mainImg: ProductMarketPlaceImg,
    function: () => null,
  },
];

export const whysGridOne = [
  {
    title: "DAO governance",
    text: "Voting rights to every holder",
    img: WhyDao,
  },
  {
    title: "Deflationary",
    text: "50% of game fee will be burned",
    img: WhyDeflation,
  },
  {
    title: "Fully Decentralized",
    text: "Community driven approach",
    img: WhyBlockchain,
  },
];

export const whysGridTwo = [
  {
    title: "Safe and Secure",
    text: "Modern safety and security measures are ensured",
    img: WhySafe,
  },
  {
    title: "Exclusive Rewards",
    text: "It get’s more and more to $AXLE token holders",
    img: WhyReward,
  },
];

export const tokenomics = [
  {
    title: "BEP-20",
    sub: "BSC Token",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/bsc.webp`,
  },
  {
    title: "1 BILLION",
    sub: "Total Supply",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/supply.webp`,
  },
  {
    title: "$AXLE",
    sub: "Utility Token",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/util.webp`,
  },
];

export const homeSlides = [
  {
    mainText: "AXLE GAMES.",
    header: "A SKILL-BASED",
    subHeader: "AI GAMING PLATFORM",
    json: `https://axlegames.s3.ap-south-1.amazonaws.com/s2.json`,
  },
  {
    mainText: "LEVEL UP",
    header: "IMPROVE YOUR",
    subHeader: "COGNITIVE SKILLS",
    json: `https://axlegames.s3.ap-south-1.amazonaws.com/s1.json`,
  },
  {
    mainText: "#WORDLE-TO-WEB3",
    header: "YOUR FAVOURITE WORDLE",
    subHeader: "ON AXLEGAMES",
    json: `https://axlegames.s3.ap-south-1.amazonaws.com/s3.json`,
  },
];

export const phases = [
  {
    text: "Phase 1",
    phase: "completed",
    milestones: [
      "Axle games Ideation",
      "Core Team formation",
      "Infrastructure Planning and Setup",
      "Product Workflow and Design",
      "Social Media Setup",
      "White paper and PitchDeck Release",
    ],
  },
  {
    text: "Phase 2",
    phase: "completed",
    milestones: [
      "Business Model Validation",
      "SDE / Smart contracts Architecture",
      "LLD / HLD Design Mockups",
      "axlegames.io - Live",
      "Wordle #5,#6,#7 - Practice",
      "Absurdle - Practice",
    ],
  },
  {
    text: "Phase 3",
    phase: "completed",
    milestones: [
      "Axle Token Audit - Solidproof",
      "Presale Community AMA’s",
      "BSC, ETH Wallet - Testnet",
      "Brand Development - Campaigns and",
      "Platform Auditing -3rd Party",
      "Zeus Presale - Live",
    ],
  },
  {
    text: "Phase 4",
    phase: "on going",
    milestones: [
      "Team Expansion - New hiring",
      "Axle Games Website V2",
      "IDO Presale Phase 4",
      "Axle Token Staking",
      "Axle Swap Launch",
      "Lewdle  and Lookdle Launch",
    ],
  },
  {
    text: "Phase 5",
    phase: "up coming",
    milestones: [
      "Axle Arena Launch",
      "Axle DAO Launch",
      "In-game purchases",
      "Axle Games Multiplayer Support",
      "Streaming on Axle Games",
      "Nerdle , Quordle and Redactle Launch",
    ],
  },
  {
    text: "Phase 6",
    phase: "up coming",
    milestones: [
      "Axle NFT Marketplace",
      "CEX Listings",
      "AXLE SDK Launch",
      "FIAT payment gateway",
      "Community events - Meet-ups",
      "Cross Wordle, Framed and Hurdle  Launch",
    ],
  },
];

export const powerdby = [
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/bnb.svg`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/aws.png`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/azure.svg`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/unreal.svg`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/sol.svg`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/react.png`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/mongo.png`,
  `https://axlegames.s3.ap-south-1.amazonaws.com/assets/powerdby/node.png`,
];

export const nfts = [
  {
    title: "Zeus",
    text: "Thunder NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`,
  },
  {
    title: "Poseidon",
    text: "Trident NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/poseidon.mp4`,
  },
  {
    title: "Hades",
    text: "Fire NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/hades.mp4`,
  },
];

export const team = [
  {
    name: "Praneeth",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/praneeth.webp`,
    role: "Founder / Marketing Lead",
    linkedIn: "https://www.linkedin.com/in/praneethnagu/",
    email: "praneeth@artemisnetwork.io",
  },
  {
    name: "D. C. R",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/chakri.webp`,
    role: "Co-Founder / Project Lead",
    linkedIn: "https://www.linkedin.com/in/chakravardhan/",
    email: "dcr@artemisnetwork.io",
  },
  {
    name: "Akash",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/akash.webp`,
    role: "Product / Dev Lead",
    linkedIn: "https://www.linkedin.com/in/akashmrc98/",
    email: "akash@artemisnetwork.io",
  },

  {
    name: "Roney",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/roney.webp`,
    role: "Product / Design Lead",
    linkedIn: "",
    email: "roney@axlegames.io",
  },
  {
    name: "Prashanth",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/prashanth.webp`,
    role: "Blockchain Developer",
    linkedIn: "",
    email: "prashanth@axlegames.io",
  },
  {
    name: "Lucas",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/lucas.webp`,
    role: "Marketing",
    linkedIn: "",
    email: "lucas@axlegames.io",
  },
];
