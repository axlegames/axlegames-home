import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import lineAnime from "../../assets/wave.json";

import { useEffect, useRef } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

import C3 from "../../assets/banner/C3.png";
import C4 from "../../assets/banner/C4.png";
import Versus from "../../assets/banner/versus.png";
import T from "../../assets/banner/tag.gif";

import "./Banner.css";

const Banner = () => {
  const ref = useRef() as any;

  useEffect(() => {
    if (ref) {
      console.log(ref);
    }
  }, [ref]);
  return (
    <Box>
      {/* banner-section start */}
      <section id="banner-section">
        <Box
          mx="auto"
          width={"100%"}
          top={{ base: "5rem", lg: "6rem" }}
          position={"absolute"}
        >
          <Flex px={4} my={4} justifyContent={"center"}>
            <Image src={T} borderRadius="xl" boxShadow={"dark-lg"} />
          </Flex>
        </Box>
        <Box className="banner-content d-flex align-items-center">
          <Box className="container">
            <Box className="row justify-content-center">
              <Box className="col-lg-12">
                <Box className="main-content">
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"center"}
                    alignItems="center"
                    rowGap={"2rem"}
                  >
                    <Box
                      boxShadow={"lg"}
                      bg={brandingColors.bgColor}
                      borderRadius="md"
                    >
                      <Box
                        cursor={"pointer"}
                        className="gradient-text"
                        transition={"200ms all ease-in"}
                        fontSize={{ base: "md", lg: "lg" }}
                        fontFamily={brandingFonts.subFont}
                        textAlign="center"
                      >
                        <Typewriter
                          options={{
                            cursor: "|",
                            loop: true,
                            wrapperClassName: "subFont",
                            cursorClassName: "type_cursor",
                          }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString("#METAMORPHOSIS-AI-GAMES")
                              .pauseFor(3000)
                              .deleteAll()
                              .typeString("#PLAY-AND-EARN")
                              .pauseFor(3000)
                              .deleteAll()
                              .typeString("#LEVEL UP YOUR SKILL")
                              .pauseFor(3000)
                              .deleteAll()
                              .start();
                          }}
                        />
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      style={{ fontFamily: "Bungee Shade" }}
                      cursor="pointer"
                    >
                      <Text
                        lineHeight={"0.1"}
                        fontSize={{ base: "4xl", lg: "6xl" }}
                        fontFamily={`Bungee Shade`}
                      >
                        AXLE
                      </Text>
                      <Text
                        lineHeight={"0.1"}
                        fontSize={{ base: "4xl", lg: "6xl" }}
                        color={"#f46b15"}
                        fontFamily={`Bungee Shade`}
                      >
                        GAMES
                      </Text>
                    </Box>
                    <Box
                      alignItems={"center"}
                      justifyContent="center"
                      display={"flex"}
                      columnGap=".55rem"
                    >
                      <Text
                        fontSize={{ base: "md", lg: "xl" }}
                        fontFamily={brandingFonts.subFont}
                        lineHeight={"2"}
                      >
                        A
                      </Text>
                      <Box pos={"relative"}>
                        <Text
                          fontSize={{ base: "md", lg: "xl" }}
                          fontFamily={brandingFonts.subFont}
                          color="#eb6612"
                        >
                          Skill based AI
                        </Text>
                        <Box
                          transition={`all 300ms ease-in`}
                          bottom={"-5"}
                          position={"absolute"}
                        >
                          <Lottie
                            ref={ref}
                            onComplete={(e: any) => {
                              console.log(ref);
                            }}
                            animationData={lineAnime}
                            loop={true}
                          />
                        </Box>
                      </Box>
                      <Text
                        fontSize={{ base: "md", lg: "xl" }}
                        fontFamily={brandingFonts.subFont}
                      >
                        gaming platform
                      </Text>
                    </Box>
                    <Box
                      style={{ columnGap: "1rem", margin: "1rem" }}
                      className="btn-play d-flex justify-content-center align-items-center"
                    >
                      <a
                        href="https://sale.axlegames.io"
                        target="_blank"
                        className="btnc"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          flexDirection={"row"}
                          columnGap="0.5rem"
                          fontFamily={brandingFonts.subFont}
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          textDecoration={"none"}
                        >
                          Join Presale
                        </Box>{" "}
                      </a>{" "}
                      <Box display={{ base: "none", lg: "block" }}>
                        <a
                          href="https://t.me/axlegames_en"
                          target="_blank"
                          className="btn-hover color-3"
                          style={{
                            fontWeight: "bold",
                            fontFamily: brandingFonts.subFont,
                            textDecoration: "none",
                          }}
                          rel="noopener noreferrer"
                        >
                          Community
                        </a>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="row justify-content-center">
                    <Box className="col-lg-12">
                      <Box className="row justify-content-center">
                        <Box className="col-lg-6">
                          <Box
                            display={"flex"}
                            justifyContent="center"
                            className="bottom-area text-center"
                          >
                            <Image
                              maxH={{ base: "56", lg: "72" }}
                              src={Versus}
                              alt="banner-vs"
                              data-aos="fade-up"
                              data-aos-easing="ease-in-back"
                              data-aos-delay="300"
                              data-aos-offset="0"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="ani-illu">
              <Image
                objectFit={"contain"}
                maxH={{ base: "96", xl: "520px" }}
                maxW={{ base: "96", xl: "520px" }}
                className="left-1"
                src={C3}
                alt="image"
              />
              <Image
                objectFit={"contain"}
                maxH={{ base: "96", md: "320px", xl: "520px" }}
                maxW={{ base: "96", md: "320px", xl: "520px" }}
                className="right-2"
                src={C4}
                alt="image"
              />
            </Box>
          </Box>
        </Box>
      </section>
      {/* banner-section end */}
    </Box>
  );
};

export default Banner;
