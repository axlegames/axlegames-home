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
  </style>

  <body>
    <!-- start preloader -->
    <div class="preloader" id="preloader"></div>
    <!-- end preloader -->

    <!-- Testimonials In start -->
    <section id="testimonials-section">
      <div class="overlay pt-120 pb-120">
        <div class="container wow fadeInUp">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="section-header text-center">
                <h2 style="font-family:Staatliches;" class="title">Our Gamers Review</h2>
                <p style="font-family:Shantell Sans;">Thousands of Happy Gamers All Around the World</p>
              </div>
            </div>
          </div>
          <div class="row mp-none">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <p style="font-family:Shantell Sans">
                  I play Tournament every day, it's a great way to relax and win
                  cash too!
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img src="images/testimonials-user-1.png" alt="image" />
                      </div>
                    </div>
                    <div class="title-area">
                      <h6 style="font-family:Staatliches;">Brice Tong</h6>
                      <span style="font-family:Shantell Sans">Texas, USA</span>
                    </div>
                  </div>
                  <div class="amount">
                    <h6 style="font-family:Staatliches;">$306</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <p style="font-family:Shantell Sans">
                  When I hang out with my friends, we play Tournament, its so
                  much fun
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img src="images/testimonials-user-1.png" alt="image" />
                      </div>
                    </div>
                    <div class="title-area">
                      <h6 style="font-family:Staatliches;">Alva Adair</h6>
                      <span style="font-family:Shantell Sans">Frankfurt, Germany</span>
                    </div>
                  </div>
                  <div class="amount">
                    <h6 style="font-family:Staatliches;">$496</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <p style="font-family:Shantell Sans">
                  I joined for the community but ended up winning cash, amazing.
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img src="images/testimonials-user-1.png" alt="image" />
                      </div>
                    </div>
                    <div class="title-area">
                      <h6 style="font-family:Staatliches;">Ray Sutton</h6>
                      <span style="font-family:Shantell Sans">Ontario, Canada</span>
                    </div>
                  </div>
                  <div class="amount">
                    <h6 style="font-family:Staatliches;">$306</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                    <div style="column-gap:.75rem" class="d-flex justify-content-center  top-area text-center">
                      <h3 style="font-family:Staatliches; margin-bottom:2rem">Subscribe to Our <h3 style="color:#eb6612; font-family:Staatliches;">Newsletter</h3></h3>
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
                <li style="font-family:Staatliches;" ><a  target="_blank" href="https://play.axlegames.io">Axle Games</a></li>
                <li style="font-family:Staatliches;" ><a  target="_blank" href="https://sale.axlegames.io">Axle Presale</a></li>
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
