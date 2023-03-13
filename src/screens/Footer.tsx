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

  <link
    rel="stylesheet"
    type="text/css"
    href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
  />

  <style>
    @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
    .slide_button {
      margin: 0;
      padding: 0;
      background: none;
      border: none;
      border-radius: 0;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    .slide-arrow {
      position: absolute;
      top: 50%;
      margin-top: -15px;
    }
    .prev-arrow {
      left: 10px;
      width: 0;
      height: 0;
      border-left: 0 solid transparent;
      border-right: 15px solid #eb6612;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    .next-arrow {
      right: 10px;
      width: 0;
      height: 0;
      border-right: 0 solid transparent;
      border-left: 15px solid #eb6612;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
    .clinks_c {
      font-size: xx-small;
    }
    @media only screen and (min-width: 960px) {
      .clinks_c {
        font-size: small;
      }
    }
    @media only screen and (min-width: 1366px) {
      .clinks_c {
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
    <section id="testimonials-section">
      <div class="overlay pt-120 pb-120">
        <div class="container wow fadeInUp">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="section-header text-center">
                <h2 style="font-family: Staatliches" class="title">
                  Our Gamers
                  <span style="font-family: Staatliches; color: #eb6612"
                    >Testimonials</span
                  >
                </h2>
                <p style="font-family: Shantell Sans; font-size: large">
                  <span
                    style="
                      font-family: Shantell Sans;
                      color: #eb6612;
                      font-size: x-large;
                    "
                    >Gamers Speak Out:</span
                  >
                  What They're Saying About Our Platform!
                </p>
              </div>
            </div>
          </div>
          <div style="padding: 2rem" class="row testmonials_slick mp-none">
            <div>
              <div class="single-item text-center">
                <p style="font-family: Shantell Sans; font-size: small">
                  I used to play a lot of action-packed games, but after
                  discovering Axle Games, I'm hooked. It's a refreshing change
                  of pace, and I love the sense of accomplishment I feel when I
                  solve a challenging puzzle.
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img
                          style="max-height: 64px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_4.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                      "
                      class="title-area"
                    >
                      <h6 style="font-family: Staatliches; font-size: x-large">
                        Brice Tong
                      </h6>
                      <span style="display: flex; column-gap: 0.5rem">
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="amount"></div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item text-center">
                <p style="font-family: Shantell Sans; font-size: small">
                  I never knew that word games could be so competitive until I
                  started playing on Axle Games. The tournaments and
                  leaderboards add an extra level of excitement, and I love
                  seeing my name at the top of the rankings.
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img
                          style="max-height: 64px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_5.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                      "
                      class="title-area"
                    >
                      <h6 style="font-family: Staatliches; font-size: x-large">
                        Brice Tong
                      </h6>
                      <span style="display: flex; column-gap: 0.5rem">
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="amount"></div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item text-center">
                <p style="font-family: Shantell Sans; font-size: small">
                  I never thought I would enjoy a word game so much until I
                  started playing Axle Games. The variety of games keeps me
                  engaged, and I love challenging my vocabulary skills against
                  other players.
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img
                          style="max-height: 64px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                      "
                      class="title-area"
                    >
                      <h6 style="font-family: Staatliches; font-size: x-large">
                        Brice Tong
                      </h6>
                      <span style="display: flex; column-gap: 0.5rem">
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="amount"></div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item text-center">
                <p style="font-family: Shantell Sans; font-size: small">
                  One of the things I appreciate most about Axle Games is how
                  user-friendly it is. It's clear that the developers put a lot
                  of thought into making the platform as enjoyable as possible
                  for gamers.
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img
                          style="max-height: 64px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_2.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                      "
                      class="title-area"
                    >
                      <h6 style="font-family: Staatliches; font-size: x-large">
                        Brice Tong
                      </h6>
                      <span style="display: flex; column-gap: 0.5rem">
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="amount"></div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item text-center">
                <p style="font-family: Shantell Sans; font-size: small">
                  I've tried a lot of different word-based gaming platforms, but
                  Axle Games is by far my favourite. The variety of games and
                  challenges keeps things fresh and exciting, to play everyday.
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img
                          style="max-height: 64px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_3.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                      "
                      class="title-area"
                    >
                      <h6 style="font-family: Staatliches; font-size: x-large">
                        Alva Adair
                      </h6>
                      <span style="display: flex; column-gap: 0.5rem">
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="amount"></div>
                </div>
              </div>
            </div>
            <div>
              <div class="single-item text-center">
                <p style="font-family: Shantell Sans; font-size: small">
                  If you're a fan of word games, you have to try Axle Games! The
                  games are addictive, the community is friendly and supportive,
                  and the overall experience is just top-notch. I can't
                  recommend it enough!
                </p>
                <div class="bottom-area d-flex justify-content-between">
                  <div class="left-area d-flex">
                    <div class="img">
                      <div class="img-area">
                        <img
                          style="max-height: 64px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_6.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div
                      style="
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                      "
                      class="title-area"
                    >
                      <h6 style="font-family: Staatliches; font-size: x-large">
                        Ray Sutton
                      </h6>
                      <span style="display: flex; column-gap: 0.5rem">
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                        <img
                          style="max-height: 24px"
                          src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                          alt="star"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="amount"></div>
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
              class="col-lg-8 col-md-8 d-flex justify-content-md-between justify-content-center align-items-center cus-grid"
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
              <ul class="menu-side d-flex align-items-center">
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
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/slick.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.nice-select.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/fontawesome.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.counterup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.waypoints.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.magnific-popup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/wow.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/main.js"></script>
    <script>
      $(".testmonials_slick").slick({
        arrows: true,
        prevArrow:
          '<button class="slide_button slide-arrow prev-arrow"></button>',
        nextArrow:
          '<button class="slide_button slide-arrow next-arrow"></button>',
        dots: false,
        infinite: true,
        speed: 300,
        lazyLoad: "ondemand",
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    </script>
    <script
      type="text/javascript"
      src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
    ></script>
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
