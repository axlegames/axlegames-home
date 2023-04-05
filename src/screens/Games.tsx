import { Box, Image, Link, Text } from "@chakra-ui/react";
import { useRef } from "react";
import Slider from "react-slick";
import { brandingColors, brandingFonts } from "../config/brandingColors";
import "./Slider.css";

const games = [
  "https://axlegames.s3.ap-south-1.amazonaws.com/wordle-5.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/wordle-6.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/wordle-7.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/absurdle.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/lewdle.png",
];

const colors = ["color-2", "color-1", "color-9", "color-1", "color-3"];

const Games = () => {
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box overflowY={"hidden"} bg={brandingColors.bgColor}>
      <Box
        zIndex={10}
        overflowY={"hidden"}
        minH="60vh"
        id="available-game-section"
      >
        <Box overflowY={"hidden"}>
          <Box className="container wow fadeInUp">
            <Box className="main-container">
              <Box className="row justify-content-between">
                <Box className="col-lg-10">
                  <Box className="section-header">
                    <Box
                      className="d-flex title"
                      style={{ columnGap: "0.5rem" }}
                    >
                      <Text
                        fontSize={{ base: "2xl", lg: "4xl" }}
                        fontFamily={brandingFonts.headingFont}
                      >
                        Available
                      </Text>
                      <Text
                        fontSize={{ base: "2xl", lg: "4xl" }}
                        color={`#f46b15`}
                        fontFamily={brandingFonts.headingFont}
                      >
                        Games
                      </Text>
                    </Box>
                    <Text
                      fontSize={{ base: "xl" }}
                      style={{ fontFamily: brandingFonts.subFont }}
                    >
                      We are constantly adding
                      <Box
                        display={"inline"}
                        fontSize={{ base: "xl" }}
                        style={{
                          fontFamily: brandingFonts.subFont,
                          color: "#eb6612",
                          margin: "0 .33rem",
                        }}
                      >
                        new games
                      </Box>
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box p={4}>
                <Slider ref={slider} {...settings}>
                  {games.map((game, i) => (
                    <Box key={i} width={"100%"} px={2}>
                      <Link
                        rel="noopener noreferrer"
                        href="https://play.axlegames.io"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                      >
                        <Image
                          style={{ borderRadius: "0.3vh" }}
                          src={game}
                          alt="image"
                        />
                        <Box
                          fontFamily={brandingFonts.headingFont}
                          my={1}
                          className={`btn-hover ${colors[i]}`}
                        >
                          Play now
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Slider>
                ;
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Games;
