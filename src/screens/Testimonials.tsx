import { Box, Image, Text } from "@chakra-ui/react";

import { brandingColors } from "../config/brandingColors";

import Slider from "react-slick";
import { useRef } from "react";

const testimonials = [
  {
    name: "Ana Paula",
    desc: `One of the things I appreciate most about Axle Games is how
                  user-friendly it is. It's clear that the developers put a lot
                  of thought into making the platform as enjoyable as possible
                  for gamers.`,
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_4.jpg",
  },
  {
    name: "Sophia Grace",
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_5.jpg",
    desc: `If you're a fan of word games, you have to try Axle Games! The
                  games are addictive, the community is friendly and supportive,
                  and the overall experience is just top-notch.`,
  },
  {
    name: "Victoria Jane",
    desc: `I never thought I would enjoy a word game so much until I
                  started playing Axle Games. The variety of games keeps me
                  engaged, and I love challenging my vocabulary skills against
                  other players.`,
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_1.jpg",
  },
  {
    name: "Marco Antonio",
    desc: `I used to play a lot of action-packed games, but after
	discovering Axle Games, I'm hooked. I love the sense of accomplishment I feel when I
	solve a challenging puzzle.`,
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_2.jpg",
  },
  {
    name: "Alexander James",
    desc: `I've tried a lot of different word-based gaming platforms, but
                  Axle Games is by far my favourite. The variety of games and
                  challenges keeps things fresh and exciting, to play everyday.`,
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_3.jpg",
  },
  {
    name: "Juan Carlos",

    desc: `I never knew that word games could be so competitive until I
                  started playing on Axle Games. The tournaments and
                  leaderboards add an extra level of excitement.`,
    img: "https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/avatar_6.jpg",
  },
];

const stars = [1, 2, 3, 4, 5];

const Testimonials = () => {
  const slider = useRef() as any;
  const PrevArrow = () => (
    <button
      onClick={() => slider.current.slickPrev()}
      className="slide_button_c slide-arrow_c prev-arrow_c_games"
    ></button>
  );

  const NextArrow = () => (
    <button
      onClick={() => slider.current.slickNext()}
      className="slide_button_c slide-arrow_c next-arrow_c_games"
    ></button>
  );

  const settings = {
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: 0,
    dots: false,
    infinite: true,
    speed: 300,
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
  };

  return (
    <Box bg={brandingColors.bgColor}>
      <Box p={0} m={0} id="testimonials-section">
        <Box className="pt-120 pb-120">
          <Box className="container wow fadeInUp">
            <Box className="row justify-content-center">
              <Box className="col-lg-10">
                <Box className="section-header text-center">
                  <Box
                    className="d-flex title justify-content-center"
                    style={{ columnGap: "0.5rem" }}
                  >
                    <Text
                      fontSize={{ base: "2xl", lg: "5xl" }}
                      style={{ fontFamily: "Staatliches" }}
                    >
                      Our Gamers
                    </Text>
                    <Text
                      fontSize={{ base: "2xl", lg: "5xl" }}
                      style={{ fontFamily: "Staatliches", color: "#f46b15" }}
                    >
                      Testimonials
                    </Text>
                  </Box>
                  <p style={{ fontFamily: "Shantell Sans", fontSize: "large" }}>
                    <span
                      style={{
                        fontFamily: "Shantell Sans",
                        color: "#eb6612",
                        fontSize: "large",
                        margin: "0 .33rem",
                      }}
                    >
                      Gamers Speak Out:
                    </span>
                    What They're Saying About Our Platform!
                  </p>
                </Box>
              </Box>
            </Box>
            <Box px={4}>
              <Slider ref={slider} {...settings}>
                {testimonials.map((t, i) => (
                  <Box key={i} p={1}>
                    <Box key={i} className="single-item text-center">
                      <p
                        style={{
                          fontFamily: "Shantell Sans",
                          fontSize: "small",
                        }}
                      >
                        {t.desc}
                      </p>
                      <Box className="bottom-area d-flex justify-content-between">
                        <Box className="left-area d-flex">
                          <Box className="img">
                            <Box className="img-area">
                              <Image
                                style={{ maxHeight: "64px" }}
                                src={t.img}
                                alt="image"
                              />
                            </Box>
                          </Box>
                          <Box
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "center",
                            }}
                            className="title-area"
                          >
                            <h6
                              style={{
                                fontFamily: "Staatliches",
                                fontSize: "x-large",
                              }}
                            >
                              {t.name}
                            </h6>
                            <span
                              style={{ display: "flex", columnGap: "0.5rem" }}
                            >
                              {stars.map((s, i) => (
                                <Image
                                  key={i}
                                  style={{ maxHeight: "24px" }}
                                  src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/favourite.png"
                                  alt="star"
                                />
                              ))}
                            </span>
                          </Box>
                        </Box>
                        <Box className="amount" />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
            <Box className="row testmonials_slick mp-none"></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
