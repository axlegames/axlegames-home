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
    text: "A skill based web3 gaming platform that offers various single-player and multiplayer games with live tournaments/contests. Users can compete with their peers and win attractive rewards with unlimited fun.",
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

export const chart = `

<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>AxleGames</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Shantell+Sans:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
      * {
          font-family: Shantell Sans;
      }
      #chartdiv {
        min-height:36vh;
        overflow:hidden;
      }
      body{
      }
      @media only screen and (min-width:840px){
      #chartdiv {
          min-height:44vh;
        }
      } 
    </style>

    <link rel="shortcut icon" href="images/fav.png" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/jquery-ui.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/fontawesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/slick.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/magnific-popup.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/nice-select.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/animate.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/style.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik+Iso&family=Shantell+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Silkscreen&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <!-- start preloader -->
    <div class="preloader" id="preloader"></div>
    <!-- end preloader -->

    <!-- Counter In start -->
    <section id="counter-section">
      <div class="overlay pt-120 pb-120">
        <div class="container">
          <div style="justify-content:center" class="row mp-none">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    style="padding:1rem"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/bsc.webp"
                    alt="image"
                  />
                </div>
                <h3 style="font-family:Staatliches">BEP-20</h3>
                <p style="font-family:Shantell Sans">BSC Token</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    style="padding:1rem"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/supply.webp"
                    alt="image"
                  />
                </div>
                <h3 style="font-family:Staatliches">1B</h3>
                <p style="font-family:Shantell Sans">Total Supply</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    style="padding:1rem"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/util.webp"
                    alt="image"
                  />
                </div>
                <h3 style="font-family:Staatliches">$AXLE</h3>
                <p style="font-family:Shantell Sans">Utility Token</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div margin-top:2rem" id="chartdiv"></div>
      </section>



    <script src="//cdn.amcharts.com/lib/4/core.js"></script>
    <script src="//cdn.amcharts.com/lib/4/charts.js"></script>
    <script>
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.data = [
         {
          country: "Private Sale",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Public Sale",
          value: 20,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Founding Team",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Advisors and Legal team",
          value: 5,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Axle Ecosystem rewards",
          value: 20,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Referral and Bonuses",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country:"NULS SCO",
          value:5,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Marketing and Listings",
          value: 15,
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

    </section>
    <!-- Counter In end -->

    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery-3.5.1.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/bootstrap.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/slick.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.nice-select.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/fontawesome.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.counterup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.waypoints.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.magnific-popup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/wow.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/main.js"></script>
  </body>
</html>
`;

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

export const links = [``, ``, ``, ``];

export const home = `
<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>AxleGames</title>
    <link rel="shortcut icon" href="images/fav.png" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Shantell+Sans:ital,wght@0,300;0,400;1,300&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/jquery-ui.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/fontawesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/slick.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/magnific-popup.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/nice-select.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/animate.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/style.css"
    />
  </head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
    .btnc {
      min-width: 150px;
      font-family: "Chakra Petch", sans-serif;
      border: 0 none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
      height: 54px;
      line-height: 54px;
      padding: 0 25px;
      position: relative;
      text-transform: uppercase;
      vertical-align: middle;
      font-weight: bold;
      border-radius: 10px;
      background-size: 200% auto;
      text-align: center;
      cursor: pointer;
      background-image: -webkit-linear-gradient(
        left,
        #0a325c 0%,
        #eb6612 51%,
        #0a325c
      );
      background-image: linear-gradient(
        to right,
        #0a325c 0%,
        #eb6612 51%,
        #0a325c
      );
      border: 0;
      color: #fff;
      outline: none;
      text-transform: uppercase;
      z-index: 2;
      transition: all 0.5s ease 0s;
    }
    .btnc:hover {
      background-position: right center;
    }
    .btn-hover {
      display: none;
      min-width: 150px;
      font-family: Staatliches;
      position: relative;
      text-transform: uppercase;
      vertical-align: middle;
      border: 0 none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
      height: 54px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      text-align: center;
      border: none;
      background-size: 300% 100%;
      moz-transition: all 0.4s ease-in-out;
      line-height: 54px;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
    .btn-hover:hover {
      background-position: 100% 0;
      moz-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }
    .btn-hover:focus {
      outline: none;
    }
.btn-hover.color-1 {
    background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
.btn-hover.color-2 {
    background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}
.btn-hover.color-3 {
    background-image: linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7);
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
.btn-hover.color-4 {
    background-image: linear-gradient(to right, #fc6076, #ff9a44, #ef9d43, #e75516);
    box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}
.btn-hover.color-5 {
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}
.btn-hover.color-6 {
    background-image: linear-gradient(to right, #009245, #FCEE21, #00A8C5, #D9E021);
    box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
}
.btn-hover.color-7 {
    background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
}
.btn-hover.color-8 {
    background-image: linear-gradient(to right, #29323c, #485563, #2b5876, #4e4376);
    box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}
.btn-hover.color-9 {
    background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
.btn-hover.color-10 {
        background-image: linear-gradient(to right, #ed6ea0, #ec8c69, #f7186a , #FBB03B);
    box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
}
.btn-hover.color-11 {
       background-image: linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f);  box-shadow: 0 5px 15px rgba(242, 97, 103, .4);
}

    .top-section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding-left: 0.5rem;
    }
    .top-titles {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .titler {
    }
    .subFont {
      font-family: Shantell Sans;
      text-align: center;
      margin-top: 0.5rem;
    }
    @media only screen and (min-width: 840px) {
      .top-section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-left: 0.5rem;
      }

      .top-titles {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .btn-hover {
        display: block;
      }
    }
.gradient-text {
  /* Fallback: Set a background color. */
  background-color: #CA4246;

  
  /* Create the gradient. */
   background-image: linear-gradient(
        45deg,
        #CA4246 16.666%, 
        #E16541 16.666%, 
        #E16541 33.333%, 
        #F18F43 33.333%, 
        #F18F43 50%, 
        #8B9862 50%, 
        #8B9862 66.666%, 
        #476098 66.666%, 
        #476098 83.333%, 
        #A7489B 83.333%);
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
  /* Animate the text when loading the element. */
    /* This animates it on page load and when hovering out. */
    animation: rainbow-text-simple-animation-rev 0.75s ease forwards;

}

.gradient-text:hover{
    animation: rainbow-text-simple-animation 0.5s ease-in forwards;
}


/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-simple-animation-rev {
    0% {
        background-size: 650%;
    }
    40% {
        background-size: 650%;
    }
    100% {
        background-size: 100%;
    }
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-simple-animation {
    0% {
        background-size: 100%;
    }
    80% {
        background-size: 650%;
    }
    100% {
        background-size: 650%;
    }
}
  

  </style>

  <body>
    <!-- start preloader -->
    <div class="preloader" id="preloader"></div>
    <!-- end preloader -->

    <!-- banner-section start -->
    <section id="banner-section">
      <div class="banner-content d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="main-content">
                <div class="top-section">
                  <h4 style="font-family: Bungee Shade" class="titler gradient-text">
                    #AI-GAMING
                  </h4>
                  <div class="top-titles">
                    <h1 style="font-family: 'Bungee Shade', cursive">AXLE</h1>
                    <h1
                      style="
                        font-family: 'Bungee Shade', cursive;
                        color: #f46b15;
                      "
                    >
                      GAMES
                    </h1>
                  </div>
                  <p class="subFont">
                    A
                    <span class="subFont" style="color: #eb6612"
                      >Skill based</span
                    >
                    web3 gaming platform
                  </p>
                  <div
                    style="column-gap: 1rem; margin: 1rem"
                    class="btn-play d-flex justify-content-center align-items-center"
                  >
                    <a
                      href="https://sale.axlegames.io"
                      target="_blank"
                      class="btnc"
                    >
                      <div
                        style="flex-direction: row; column-gap: 0.5rem; font-family: Staatliches"
                        class="d-flex align-items-center justify-content-center"
                      >
                        Presale
                        <div style="font-family: Staatliches; font-size: 14px; color:#38A169">• live</div>
                      </div>
                    </a>
                    <a
                      href="https://play.axlegames.io"
                      target="_blank"
                      class="btn-hover color-3"
                      style="font-family: Staatliches"
                      >Launch App</a
                    >
                  </div>
                </div>

                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="row justify-content-center">
                      <div class="col-lg-6">
                        <div class="bottom-area text-center">
                          <img
                            style="max-height: 260px"
                            src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/versus.png"
                            alt="banner-vs"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ani-illu">
            <img
              style="max-height: 520px"
              class="left-1 wow fadeInUp"
              src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/C3.png"
              alt="image"
            />
            <img
              style="max-height: 520px"
              class="right-2 wow fadeInUp"
              src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/C4.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- banner-section end -->

    <!-- Available Game In start -->
    <section id="available-game-section">
      <div class="overlay pb-120">
        <div class="container wow fadeInUp">
          <div class="main-container">
            <div class="row justify-content-between">
              <div class="col-lg-10">
                <div class="section-header">
                  <h2 style="font-family: Staatliches" class="title">
                    Available <span style="font-family: Staatliches; color:#F46B15;">Games</span>
                  </h2>
                  <p style="font-family: Shantell Sans">
                    We are constantly adding
                    <span style="font-family: Shantell Sans; color: #eb6612"
                      >new games</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div style="padding: 1rem" class="available-game-carousel">
              <div class="single-item">
                <a href="https://play.axlegames.io" target="_blank"
                  ><img
                    style="border-radius: 0.3vh"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/wordle-5.png"
                    alt="image"
                /></a>
                <div class="btn-hover color-2">Play now</div>
              </div>
              <div class="single-item">
                <a href="https://play.axlegames.io" target="_blank"
                  ><img
                    style="border-radius: 0.3vh"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/wordle-6.png"
                    alt="image"
                /></a>
                <div class="btn-hover color-1">Play now</div>
              </div>
              <div class="single-item">
                <a href="https://play.axlegames.io" target="_blank"
                  ><img
                    style="border-radius: 0.3vh"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/wordle-7.png"
                    alt="image"
                /></a>
                <div class="btn-hover color-9">Play now</div>
              </div>
              <div class="single-item">
                <a href="https://play.axlegames.io" target="_blank"
                  ><img
                    style="border-radius: 0.3vh"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/absurdle.png"
                    alt="image"
                /></a>
                <div class="btn-hover color-1">Play now</div>
              </div>
              <div class="single-item">
                <a href="https://play.axlegames.io" target="_blank"
                  ><img
                    style="border-radius: 0.3vh"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/lewdle.png"
                    alt="image"
                /></a>
                <div class="btn-hover color-3">Play now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Available Game In end -->

    <!-- How Works start -->
    <section id="how-works-section" class="border-area">
      <div class="overlay pt-120 pb-120">
        <div class="container wow fadeInUp">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <div class="section-header">
                <h2 style="font-family: Staatliches" class="title">
                  How It <span style="font-family: Staatliches; color:#F46B15;">Works</span>
                </h2>
                <p style="font-family: Shantell Sans">
                  It's easier than you think.
                  <span style="font-family: Shantell Sans; color: #eb6612">
                    Follow 4 simple easy steps
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="row mp-top">
            <div
              class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center"
            >
              <div class="single-item">
                <div class="icon-area">
                  <span>1</span>
                  <img
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-1.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5 style="font-family: Shantell Sans">Signup</h5>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel"
            >
              <div class="single-item">
                <div class="icon-area">
                  <span>2</span>
                  <img
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-2.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5 style="font-family: Shantell Sans">participate</h5>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-alt"
            >
              <div class="single-item">
                <div class="icon-area">
                  <span>3</span>
                  <img
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-3.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5 style="font-family: Shantell Sans">Compete</h5>
                </div>
              </div>
            </div>
            <div
              class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel"
            >
              <div class="single-item">
                <div class="icon-area">
                  <span>4</span>
                  <img
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-4.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5 style="font-family: Shantell Sans">Get Rewarded</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div style="margin-top: 4rem" class="col-lg-6 text-center">
              <a style="font-family: Staatliches;" href="https://play.axlegames.io" target="_blank" class="btnc"
                >Join Now!</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call Action In start -->
    <section id="call-action" class="pb-120 pt-120">
      <div class="overlay">
        <div class="container wow fadeInUp">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-lg-6 col-md-6">
              <div class="left-area">
                <h2 style="font-family:Staatliches" class="title">Build Your Esports Profile</h2>
                <p style="font-family:Shantell Sans">
                  Showcase your achievements, match history and win rate while
                  you build your reputation on Axlegames.
                </p>
                <a style="font-family: Staatliches;" href="https://play.axlegames.io" target="_blank" class="btnc"
                  >Sign Up</a
                >
              </div>
            </div>
            <div class="col-lg-5 col-md-6">
              <div class="right-area">
                <img
                  src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/profile-info.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Call Action In end -->

    <!-- How Works end -->
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery-3.5.1.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/bootstrap.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/slick.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.nice-select.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/fontawesome.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.counterup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.waypoints.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.magnific-popup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/wow.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/main.js"></script>
  </body>
</html>

`;
