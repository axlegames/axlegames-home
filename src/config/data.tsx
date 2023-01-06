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

import Telegram from "../assets/socials/telegram.webp";
import Medium from "../assets/socials/medium.webp";
import Twitter from "../assets/socials/twitter.webp";
import Discord from "../assets/socials/discord.webp";
import Instagram from "../assets/socials/instagram.webp";

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
    text: "A skill based web3 gaming platform that offers various single-player and multiplayer games with live tournaments/contests. Users can compete with their peers and win attractive rewards with unlimited fun.",
    image: ProductGameIcon,
    mainImg: ProductGameImg,
    function: () => (window.location.href = "https://play.axlegames.io"),
  },
  {
    isLive: true,
    subTitle: "Axle Staking",
    label: "STAKE $AXLE",
    text: "Users can stake their $AXLE tokens by locking in our staking pools for a certain period of time. Our stakers will have exclusive benefits to the Axle platform and will receive $AXLE token rewards with attractive APYs.",
    image: ProductStakingIcon,
    mainImg: ProductStakingImg,
    function: () => (window.location.href = "https://sale.axlegames.io"),
  },
  {
    isLive: true,
    subTitle: "Axle Swap",
    label: "GO TO SWAP",
    text: "A decentralised exchange is a peer-to-peer marketplace to exchange cryptos. Axle swaps enables users to swap their $AXLE tokens to other supported tokens and vice versa. Decentralisation is a fundamental philosophy of blockchain and Axle Swap will play a huge role in decentralisation.",
    image: ProductSwapIcon,
    mainImg: ProductSwapImg,
    function: () => (window.location.href = "https://sale.axlegames.io"),
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

export const socials = [Telegram, Twitter, Instagram, Discord, Medium];

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
    subHeader: "WEB3 GAMING PLATFORM",
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
      "Poseidon and Hades Sale - Live",
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

export const chart = `
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Luckiest+Guy&family=Nabla&family=Poppins:ital,wght@0,800;0,900;1,900&family=Press+Start+2P&family=Quicksand:wght@300;400;500;600;700&family=Righteous&family=Rubik+80s+Fade&family=Russo+One&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        font-family: "Russo One", sans-serif;
      }
    </style>
  </head>

  <body style="height: 100vh; width: 100vw; position: fixed">
    <div style="height:100vh" id="chartdiv"></div>
    <script src="//cdn.amcharts.com/lib/4/core.js"></script>
    <script src="//cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="//cdn.amcharts.com/lib/4/themes/animated.js">
    <script>
      am4core.useTheme(am4themes_animated);
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.data = [
        {
          country: "Zeus Sale",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Poseidon Sale",
          value: 25,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Hades Sale",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Founding Team",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Advisors and Legal team",
          value: 5,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Axle Ecosystem rewards",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Referral and Bonuses",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Marketing and Listings",
          value: 10,
          label: am4core.color("#ffffff"),
        },
      ];

      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;

      var series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "country";

      // Disable ticks and labels
      series.labels.template.disabled = true;
      series.ticks.template.disabled = true;

      series.slices.template.innerCornerRadius = 4;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;

      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
      series.slices.template.draggable = false;

      chart.legend = new am4charts.Legend();
      chart.legend.labels.template.fill = am4core.color("#ffffff");
      chart.legend.valueLabels.template.fill = am4core.color("#ffffff");
    </script>
  </body>
</html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div style="height: 70vh; background-color: #2b2d42" id="chartdiv"></div>
    <script src="//cdn.amcharts.com/lib/4/core.js"></script>
    <script src="//cdn.amcharts.com/lib/4/charts.js"></script>
    <script>
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.data = [
        {
          country: "Zeus Sale",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Poseidon Sale",
          value: 25,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Hades Sale",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Founding Team",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Advisors and Legal team",
          value: 5,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Axle Ecosystem rewards",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Referral and Bonuses",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Marketing and Listings",
          value: 10,
          label: am4core.color("#ffffff"),
        },
      ];

      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;

      var series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "country";

      // Disable ticks and labels
      series.labels.template.disabled = true;
      series.ticks.template.disabled = true;

      series.slices.template.innerCornerRadius = 4;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;

      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
      series.slices.template.draggable = false;

      chart.legend = new am4charts.Legend();
      chart.legend.labels.template.fill = am4core.color("#ffffff");
      chart.legend.valueLabels.template.fill = am4core.color("#ffffff");
    </script>
    ;
  </body>
</html>
`;

export const nfts = [
  {
    title: "Zeus",
    text: "400 $AXLE",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`,
  },
  {
    title: "Poseidon",
    text: "800 $AXLE",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/poseidon.mp4`,
  },
  {
    title: "Hades",
    text: "1200 $AXLE",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/hades.mp4`,
  },
];

export const team = [
  {
    name: "Praneeth Nagu",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/praneeth.webp`,
    role: "Founder / Marketing Lead",
    linkedIn: "linkedin",
  },
  {
    name: "D. C. R",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/chakri.webp`,
    role: "Co-Founder / Project Lead",
    linkedIn: "linkedin",
  },
  {
    name: "Akash Madduru",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/akash.webp`,
    role: "Product / Dev Lead",
    linkedIn: "",
  },

  {
    name: "Roney",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/roney.webp`,
    role: "Product / Design Lead",
    linkedIn: "linkedin",
  },
  {
    name: "Prashanth",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/prashanth.webp`,
    role: "Blockchain Developer",
    linkedIn: "linkedin",
  },
  {
    name: "Lucas",
    avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/lucas.webp`,
    role: "Marketing",
    linkedIn: "",
  },
];
