import { Box } from "@chakra-ui/react";
import useIframeContentHeight from "react-use-iframe-content-height";

const html = `
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
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/style.css"
    />
  </head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
    .clinks_c {
      font-size: xx-small;
    }
    @media only screen and (min-width: 960px) {
      .clinks_c {
        font-size: small;
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

    <!-- Testimonials In start -->

    <!-- Testimonials In end -->

    <!-- footer-section start -->
    <footer id="footer-section">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-top">
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-8">
                    <div
                      style="column-gap: 0.75rem"
                      class="d-flex justify-content-center top-area text-center"
                    >
                      <h3 style="font-family: Staatliches; margin-bottom: 2rem">
                        Subscribe to Our
                        <h3 style="color: #eb6612; font-family: Staatliches">
                          Newsletter
                        </h3>
                      </h3>
                    </div>
                    <div class="subscribe d-flex">
                      <input
                        type="email"
                        id="email"
                        placeholder="Your Email Address"
                      />
                      <button onclick="post()" class="cmn-btn">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-mid pt-120">
        <div class="container">
          <div class="row d-flex">
            <div
              class="col-lg-4 col-md-4 d-flex justify-content-md-between justify-content-center align-items-center cus-grid"
            >
              <div class="logo-section">
                <a class="site-logo site-title" style="cursor: pointer">
                  <img
                    style="width: 128px"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png"
                    alt="site-logo"
                  />
                </a>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 d-flex justify-content-center"
              style="column-gap: 5rem"
            >
              <div
                style="flex-direction: column; justify-content: flex-start"
                class="d-flex menu-side"
              >
                <h6 class="d-flex justify-content-center">Useful Links</h6>
                <ul
                  style="flex-direction: column"
                  class="menu-side d-flex justify-content-start"
                >
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://whitepaper.axlegames.io/"
                      >White Paper</a
                    >
                  </li>
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://axlegames.s3.ap-south-1.amazonaws.com/AxleGames_EconomicsPaper.pdf"
                      >Economics Paper</a
                    >
                  </li>
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://axlegames.s3.ap-south-1.amazonaws.com/Axlegames.pdf"
                      >Pitch Deck</a
                    >
                  </li>
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://sale.axlegames.io"
                      >Axle Presale</a
                    >
                  </li>
                </ul>
              </div>

              <div
                style="flex-direction: column; justify-content: flex-start"
                class="d-flex"
              >
                <h6 class="d-flex justify-content-center">Products</h6>
                <ul
                  style="flex-direction: column"
                  class="menu-side d-flex justify-content-start"
                >
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://play.axlegames.io"
                      >Axle Games</a
                    >
                  </li>
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://axlegames.io/staking"
                      >Axle Staking</a
                    >
                  </li>
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://axlegames.io/staking"
                      >Axle Swap</a
                    >
                  </li>
                  <li style="font-family: Staatliches">
                    <a
                      class="clinks_c gradient-text"
                      target="_blank"
                      href="https://axlegames.io/staking"
                      >Axle Dao</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end"
            >
              <div class="right-area">
                <ul class="d-flex">
                  <li>
                    <a href="https://instagram.com/axlegames" target="_blank">
                      <img
                        src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/instagram.webp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@axlegames" target="_blank">
                      <img
                        src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/medium.webp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/axlegames_en" target="_blank">
                      <img
                        src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/telegram.webp"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/AxleGames" target="_blank">
                      <img
                        src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/twitter.webp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="main-content">
            <div class="row d-flex align-items-center justify-content-center">
              <div class="col-lg-12 col-md-6">
                <div class="left-area text-center">
                  <p style="font-family: Staatliches">
                    Copyright © 2023. All Rights Reserved By
                    <a style="cursor: pointer; color: #eb6612">AXLEGAMES</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer-section end -->
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery-3.5.1.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/bootstrap.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/main.js"></script>
    <script>
      async function post() {
        const email = document.getElementById("email").value;
        const response = await fetch(
          "https://api.axlegames.io/axlegames/api/v1/guest/email",
          {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
          }
        );
        document.getElementById("email").value = "";
        alert("Email Saved!");
      }
    </script>
  </body>
</html>

`;

const Footer = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();

  return (
    <Box width="100vw">
      <iframe
        ref={iframeRef}
        height={iframeHeight}
        title="footer"
        srcDoc={html}
        frameBorder="0"
      />
    </Box>
  );
};

export default Footer;
