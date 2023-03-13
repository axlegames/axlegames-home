import { Box } from "@chakra-ui/react";

import useIframeContentHeight from "react-use-iframe-content-height";

import MobileNavbar from "../components/navbar/MobileNavbar";
import Navbar from "../components/navbar/Navbar";

import { brandingColors } from "../config/brandingColors";

const Home = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();
  const socials = [
    {
      url: "https://twitter.com/AxleGames",
      icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/twitter.webp",
    },
    {
      url: "https://medium.com/@axlegames",
      icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/medium.webp",
    },
    {
      url: "https://instagram.com/axlegames",
      icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/instagram.webp",
    },
    {
      url: "https://t.me/axlegames_en",
      icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/telegram.webp",
    },
  ];

  return (
    <Box position={"relative"}>
      <Box
        backgroundPosition={"center"}
        backgroundSize="cotain"
        position={"fixed"}
        top="0"
        zIndex={1000}
      >
        <Box style={{ backdropFilter: "blur(11px)" }}>
          <MobileNavbar />
          <Navbar />
        </Box>
      </Box>
      <Box
        display={{ base: "none", lg: "flex" }}
        zIndex={1000}
        position={"fixed"}
        top="40%"
        my="auto"
        right="1rem"
      >
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
          bg={brandingColors.bgColor}
          boxShadow={`0px 0px 2px ${brandingColors.newHighlightColor}`}
          borderRadius="3xl"
          py={1}
        >
          {socials.map((s, i) => (
            <Box
              transition={"all 200ms ease-in"}
              _hover={{ transform: "scale(1.1)" }}
            >
              <a rel="noopener noreferrer" href={s.url} target="_blank">
                <img style={{ maxWidth: "40px" }} src={s.icon} alt="" />
              </a>
            </Box>
          ))}
        </Box>
      </Box>
      <iframe
        ref={iframeRef}
        height={iframeHeight}
        title="charts"
        srcDoc={home}
        frameBorder="0"
      />
    </Box>
  );
};
export default Home;

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
      background-image: linear-gradient(
        to right,
        #25aae1,
        #40e495,
        #30dd8a,
        #2bb673
      );
      box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }
    .btn-hover.color-2 {
      background-image: linear-gradient(
        to right,
        #f5ce62,
        #e43603,
        #fa7199,
        #e85a19
      );
      box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
    }
    .btn-hover.color-3 {
      background-image: linear-gradient(
        to right,
        #667eea,
        #764ba2,
        #6b8dd6,
        #8e37d7
      );
      box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
    }
    .btn-hover.color-4 {
      background-image: linear-gradient(
        to right,
        #fc6076,
        #ff9a44,
        #ef9d43,
        #e75516
      );
      box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
    }
    .btn-hover.color-5 {
      background-image: linear-gradient(
        to right,
        #0ba360,
        #3cba92,
        #30dd8a,
        #2bb673
      );
      box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
    }
    .btn-hover.color-6 {
      background-image: linear-gradient(
        to right,
        #009245,
        #fcee21,
        #00a8c5,
        #d9e021
      );
      box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
    }
    .btn-hover.color-7 {
      background-image: linear-gradient(
        to right,
        #6253e1,
        #852d91,
        #a3a1ff,
        #f24645
      );
      box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
    }
    .btn-hover.color-8 {
      background-image: linear-gradient(
        to right,
        #29323c,
        #485563,
        #2b5876,
        #4e4376
      );
      box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
    }
    .btn-hover.color-9 {
      background-image: linear-gradient(
        to right,
        #25aae1,
        #4481eb,
        #04befe,
        #3f86ed
      );
      box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
    }
    .btn-hover.color-10 {
      background-image: linear-gradient(
        to right,
        #ed6ea0,
        #ec8c69,
        #f7186a,
        #fbb03b
      );
      box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
    }
    .btn-hover.color-11 {
      background-image: linear-gradient(
        to right,
        #eb3941,
        #f15e64,
        #e14e53,
        #e2373f
      );
      box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
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
      background-color: #ca4246;

      /* Create the gradient. */
      background-image: linear-gradient(
        45deg,
        #ca4246 16.666%,
        #e16541 16.666%,
        #e16541 33.333%,
        #f18f43 33.333%,
        #f18f43 50%,
        #8b9862 50%,
        #8b9862 66.666%,
        #476098 66.666%,
        #476098 83.333%,
        #a7489b 83.333%
      );

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

    .gradient-text:hover {
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
                  <h4
                    style="font-family: Bungee Shade"
                    class="titler gradient-text"
                  >
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
                        style="
                          flex-direction: row;
                          column-gap: 0.5rem;
                          font-family: Staatliches;
                        "
                        class="d-flex align-items-center justify-content-center"
                      >
                        Presale
                        <div
                          style="
                            font-family: Staatliches;
                            font-size: 14px;
                            color: #38a169;
                          "
                        >
                          • live
                        </div>
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
                  <div class="row title px-3" style="column-gap: 0.5rem">
                    <h2 style="font-family: Staatliches">Available</h2>
                    <h2 style="font-family: Staatliches; color: #f46b15">
                      Games
                    </h2>
                  </div>
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
                <div
                  class="d-flex title justify-content-center"
                  style="column-gap: 0.5rem"
                >
                  <h2 style="font-family: Staatliches">HOW IT</h2>
                  <h2 style="font-family: Staatliches; color: #f46b15">
                    WORKS
                  </h2>
                </div>
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
              <a
                style="font-family: Staatliches"
                href="https://play.axlegames.io"
                target="_blank"
                class="btnc"
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
                <div class="d-flex title" style="column-gap: 0.5rem">
                  <h2 style="font-family: Staatliches">Build Your Esports</h2>
                  <h2 style="font-family: Staatliches; color: #f46b15">
                    Profile
                  </h2>
                </div>
                <p style="font-family: Shantell Sans">
                  Showcase your achievements, match history and win rate while
                  you build your reputation on Axlegames.
                </p>
                <a
                  style="font-family: Staatliches"
                  href="https://play.axlegames.io"
                  target="_blank"
                  class="btnc"
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
