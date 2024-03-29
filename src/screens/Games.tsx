import { Box, Image, Link, Text } from "@chakra-ui/react";
import { lazy } from "react";
import Slider from "react-slick";
import { brandingColors, brandingFonts } from "../config/brandingColors";
import "./Slider.css";

const Audit = lazy(() => import("./Audit"));

const games = [
  "https://axlegames.s3.ap-south-1.amazonaws.com/wordle-5.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/ai_wordle_5.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/ai_arrival_5.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/ai_s_5.png",
  "https://axlegames.s3.ap-south-1.amazonaws.com/wordle-6.png",
];

const colors = ["color-2", "color-1", "color-9", "color-1", "color-3"];

const Games = () => {
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
                      fontSize={{ base: "md", lg: "xl" }}
                      style={{ fontFamily: brandingFonts.subFont }}
                    >
                      Explore our new
                      <Box
                        display={"inline"}
                        fontSize={{ base: "md", lg: "xl" }}
                        style={{
                          fontFamily: brandingFonts.subFont,
                          color: "#eb6612",
                          margin: "0 .33rem",
                        }}
                      >
                        Metamorphosis AI games
                      </Box>
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box p={4}>
                <Slider>
                  {games.map((game, i) => (
                    <Box key={i} width={"100%"} px={2}>
                      <Link
                        rel="noopener noreferrer"
                        href="https://play.axle.games"
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
        <Audit />
      </Box>
    </Box>
  );
};

export default Games;
