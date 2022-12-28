import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import { Player } from "@lottiefiles/react-lottie-player";

import Carousel from "nuka-carousel";
import { brandingColors } from "../config/brandingColors";

import { useEffect, useState } from "react";

import NeuButton from "../components/NeuButton";

const Main = () => {
  const images = [
    `https://axlegames.s3.ap-south-1.amazonaws.com/assets/main/telegram.webp`,
    `https://axlegames.s3.ap-south-1.amazonaws.com/assets/main/twitter.webp`,
    `https://axlegames.s3.ap-south-1.amazonaws.com/assets/main/instagram.webp`,
    `https://axlegames.s3.ap-south-1.amazonaws.com/assets/main/discord.webp`,
  ];

  const [slides, setSlides] = useState<Array<any>>([]);

  useEffect(() => {
    setSlides([
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
    ]);
  }, []);

  return (
    <Box
      minH={{ lg: "90vh" }}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_countdown_bg.png`}
      position="relative"
    >
      <Box>
        <Box>
          <Carousel
            wrapAround={true}
            autoplay={true}
            defaultControlsConfig={{
              pagingDotsStyle: {
                height: "28px",
                width: "28px",
                fill: "#8D8CFF",
              },
              nextButtonStyle: { display: "none" },
              prevButtonStyle: {
                display: "none",
              },
              nextButtonText: "",
              prevButtonText: "",
            }}
            slidesToShow={1}
          >
            {slides.map((m, i) => (
              <Grid
                m={5}
                justifyContent="space-between"
                key={i}
                borderRadius="3xl"
                alignItems={"center"}
                maxW={{ lg: "70vw" }}
                minH={{ lg: "70vh" }}
                p={{ base: "8" }}
                mx="auto"
                gridTemplateColumns={{ base: "1fr 1fr", lg: "1.3fr 1fr" }}
                columnGap={{ base: "2rem" }}
              >
                <Box
                  fontWeight={"bold"}
                  display="flex"
                  flexDirection={"column"}
                  rowGap="2rem"
                  position={"relative"}
                >
                  <Box display={"flex"} flexDirection="column" rowGap={".5rem"}>
                    <Text
                      lineHeight={"1.2"}
                      fontSize={{ base: "sm", sm: "18px", lg: "24px" }}
                      color={brandingColors.secondaryTextColor}
                      fontFamily={`'Rubik 80s Fade', cursive`}
                    >
                      {m.mainText}
                    </Text>
                    <Box>
                      <Text
                        className="glowc_text"
                        fontFamily={`'Russo One', sans-serif`}
                        lineHeight={"1"}
                        fontSize={{ base: "md", sm: "24px", lg: "48px" }}
                        fontWeight="normal"
                      >
                        {m.header}
                      </Text>
                      <Text
                        className="glowc_text"
                        fontFamily={`'Russo One', sans-serif`}
                        lineHeight={"1"}
                        fontSize={{ base: "md", lg: "48px" }}
                        fontWeight="normal"
                      >
                        {m.subHeader}
                      </Text>
                    </Box>
                  </Box>
                  <Box display={"flex"} flexDirection="column" rowGap={"3rem"}>
                    <Flex
                      display={{ base: "flex", md: "none" }}
                      columnGap={"1rem"}
                    >
                      <NeuButton
                        bg={"#A34400"}
                        shadow={"#FF7C1F"}
                        onClick={() => {}}
                        label="GO TO APP"
                      ></NeuButton>
                      <NeuButton
                        bg={"#A34400"}
                        shadow={"#FF7C1F"}
                        onClick={() => {}}
                        label="BUY $AXLE"
                      ></NeuButton>
                    </Flex>
                    <Flex
                      display={{ base: "none", md: "flex" }}
                      columnGap={"1rem"}
                    >
                      <a
                        className="btn"
                        href="https://play.axlegames.io"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        GO TO APP
                      </a>
                      <a
                        href="https://sale.axlegames.io"
                        className="btn-secondary"
                        rel="noreferrer"
                      >
                        BUY $AXLE
                      </a>
                    </Flex>
                  </Box>
                </Box>

                <Player className="player" loop autoplay src={m.json} />
              </Grid>
            ))}
          </Carousel>
        </Box>
        <Flex
          display={{ base: "flex" }}
          rowGap={{ base: "1rem" }}
          alignItems={"center"}
          flexDirection={{ base: "row" }}
          justifyContent={{ base: "center" }}
        >
          {images.map((i, x) => (
            <Image
              data-aos={`zoom-in`}
              height={{ base: "12", lg: "20" }}
              width={{ base: "12", lg: "20" }}
              _hover={{
                transform: "scale(1.1)",
                transition: "all 200ms ease-in",
                cursor: "pointer",
              }}
              src={i}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
export default Main;
