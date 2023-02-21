import { Box } from "@chakra-ui/react";

import useIframeContentHeight from "react-use-iframe-content-height";

import MobileNavbar from "../components/navbar/MobileNavbar";
import Navbar from "../components/navbar/Navbar";

import { brandingColors } from "../config/brandingColors";

const Home = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();

  return (
    <Box>
      <Box
        bg={brandingColors.bgColor}
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

const home = `
<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Begam - Online Gaming Tournaments Template</title>

    <link rel="shortcut icon" href="images/fav.png" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/jquery-ui.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/fontawesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/slick.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/magnific-popup.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/nice-select.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/animate.css"
    />
    <link
      rel="stylesheet"
      href="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/css/style.css"
    />
  </head>

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
                <div class="top-area justify-content-center text-center">
                  <h3>#WORDLE-TO-WEB3</h3>
                  <h1>AXLEHome</h1>
                  <p>
                    A SKILL-BASED WEB3 GAMING PLATFORM
                  </p>
                  <div
                    class="btn-play d-flex justify-content-center align-items-center"
                  >
                    <a href="registration.html" class="cmn-btn">Get Started</a>
                    <a
                      href="https://www.youtube.com/watch?v=MJ0zpsWQ_XM"
                      class="mfp-iframe popupvideo"
                    >
                      <img src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/play-icon.png" alt="play" />
                    </a>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-lg-12">
                    <div class="row justify-content-center">
                      <div class="col-lg-6">
                        <div class="bottom-area text-center">
                          <img src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/versus.png" alt="banner-vs" />
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
              class="left-1 wow fadeInUp"
              src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/left-banner.png"
              alt="image"
            />
            <img
              class="right-2 wow fadeInUp"
              src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/right-banner.png"
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
                  <h2 class="title">Available Home</h2>
                  <p>We are constantly adding new Home</p>
                </div>
              </div>
            </div>
            <div class="available-game-carousel">
              <div class="single-item">
                <a href="#"
                  ><img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/game-1.png"
                    alt="image"
                /></a>
              </div>
              <div class="single-item">
                <a href="#"
                  ><img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/game-2.png"
                    alt="image"
                /></a>
              </div>
              <div class="single-item">
                <a href="#"
                  ><img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/game-3.png"
                    alt="image"
                /></a>
              </div>
              <div class="single-item">
                <a href="#"
                  ><img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/game-4.png"
                    alt="image"
                /></a>
              </div>
              <div class="single-item">
                <a href="#"
                  ><img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/game-3.png"
                    alt="image"
                /></a>
              </div>
            </div>
            <div class="btn-area text-center">
              <a href="tournaments.html" class="cmn-btn">View All</a>
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
                <h2 class="title">How It Works</h2>
                <p>It's easier than you think. Follow 4 simple easy steps</p>
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
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-1.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5>Signup</h5>
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
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-2.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5>Deposit</h5>
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
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-3.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5>Compete</h5>
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
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-4.png"
                    alt="image"
                  />
                </div>
                <div class="text-area">
                  <h5>Get Paid</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-lg-6 text-center">
              <a href="registration.html" class="cmn-btn">Join Now!</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- How Works end -->

    <!-- Counter In start -->
    <section id="counter-section">
      <div class="overlay pt-120 pb-120">
        <div class="container">
          <div class="row mp-none">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-icon-1.png"
                    alt="image"
                  />
                </div>
                <h3><span class="counter">84</span>K</h3>
                <p>Matches Played</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-icon-2.png"
                    alt="image"
                  />
                </div>
                <h3>$<span class="counter">96</span>m</h3>
                <p>Winnings Paid</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-icon-3.png"
                    alt="image"
                  />
                </div>
                <h3><span class="counter">180</span></h3>
                <p>Active Ladders</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-icon-4.png"
                    alt="image"
                  />
                </div>
                <h3><span class="counter">168</span>b</h3>
                <p>XP Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Counter In end -->

    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery-3.5.1.min.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/bootstrap.min.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/slick.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.nice-select.min.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/fontawesome.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.counterup.min.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.waypoints.min.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.magnific-popup.min.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/wow.js"></script>
    <script src="https://axleHome.s3.ap-south-1.amazonaws.com/theme_assets/js/main.js"></script>
  </body>
</html>

`;
