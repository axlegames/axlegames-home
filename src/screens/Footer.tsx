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
  </style>

  <body>
    <!-- start preloader -->
    <div class="preloader" id="preloader"></div>
    <!-- end preloader -->

    <!-- footer-section start -->
    <footer id="footer-section">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="footer-top">
                <div class="row justify-content-center">
                  <div class="col-lg-6 col-md-8">
                    <div class="top-area text-center">
                      <h3 style="font-family:Staatliches">Subscribe to Our Newsletter</h3>
                      <p>Receive news, stay updated and special offers</p>
                    </div>
                    <form>
                      <div class="subscribe d-flex">
                        <input type="email" placeholder="Your Email Address" />
                        <button class="cmn-btn">Subscribe</button>
                      </div>
                    </form>
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
              class="col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center cus-grid"
            >
              <div class="logo-section">
                <a class="site-logo site-title" style="cursor:pointer">
                  <img style="width:128px" src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png" alt="site-logo"/>
                </a>
              </div>
              <ul class="menu-side d-flex align-items-center">
                <li><a target="_blank" href="https://play.axlegames.io">Axle Games</a></li>
                <li><a target="_blank" href="https://sale.axlegames.io">Axle Presale</a></li>
              </ul>
            </div>
            <div
              class="col-lg-4 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end"
            >
              <div class="right-area">
                <ul class="d-flex">
                  <li> 
                    <a href="https://instagram.com/axlegames" target="_blank">
                      <img src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/instagram.webp" />
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@axlegames" target="_blank">
                      <img src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/medium.webp" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/axlegames_en" target="_blank">
                      <img src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/telegram.webp" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/AxleGames" target="_blank">
                      <img src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/twitter.webp" />
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
                  <p>
                    Copyright © 2023. All Rights Reserved By
                    <a style="cursor:pointer">AXLEGAMES</a>
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

const Footer = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();

  return (
    <iframe
      ref={iframeRef}
      height={iframeHeight}
      title="footer"
      srcDoc={html}
      frameBorder="0"
    />
  );
};

export default Footer;
