import { Box, Image, Text } from "@chakra-ui/react";
import { brandingFonts } from "../../config/brandingColors";
import { useTypewriter } from "react-simple-typewriter";
// import Logo from "../../assets/logo.png";

import "./Banner.css";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["#AI-GAMING", "#Play to Earn", "#Level Up"],
    loop: 0,
    delaySpeed: 5000,
    deleteSpeed: 60,
    typeSpeed: 120,
  });
  return (
    <Box>
      {/* banner-section start */}
      <section id="banner-section">
        <Box className="banner-content d-flex align-items-center">
          <Box className="container">
            <Box className="row justify-content-center">
              {/* <Box
                display={"flex"}
                borderRadius="xl"
                p={"4"}
                mb={12}
                bg={brandingColors.bgColor}
                boxShadow="lg"
                justifyContent={"space-between"}
                width="80%"
              >
                <Image width={"16"} src={Logo} />
                <Text
                  fontSize={{ base: "4xl" }}
                  fontFamily={brandingFonts.subFont}
                  fontWeight="bold"
                >
                  Axle Games
                </Text>
                <Text
                  fontSize={{ base: "4xl" }}
                  fontFamily={brandingFonts.subFont}
                  fontWeight="bold"
                >
                  Presale Live On
                </Text>
                <Text
                  fontSize={{ base: "4xl" }}
                  fontFamily={brandingFonts.subFont}
                  fontWeight="bold"
                >
                  Pink Sale
                </Text>
              </Box> */}
              <Box className="col-lg-12">
                <Box className="main-content">
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    justifyContent={"center"}
                    alignItems="center"
                    rowGap={"2rem"}
                  >
                    <Text
                      cursor={"pointer"}
                      className="gradient-text"
                      transition={"200ms all ease-in"}
                      fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
                      fontFamily={brandingFonts.headingFont}
                    >
                      {text}
                    </Text>
                    <Box
                      display={"flex"}
                      style={{ fontFamily: "Bungee Shade" }}
                      cursor="pointer"
                    >
                      <Text
                        fontSize={{ base: "5xl", lg: "6xl" }}
                        fontFamily={brandingFonts.headingFont}
                      >
                        AXLE
                      </Text>
                      <Text
                        fontSize={{ base: "5xl", lg: "6xl" }}
                        fontFamily={brandingFonts.headingFont}
                        color={"#f46b15"}
                      >
                        GAMES
                      </Text>
                    </Box>
                    <Box display={"flex"} columnGap=".25rem">
                      <Text fontFamily={brandingFonts.subFont}>A</Text>
                      <Text fontFamily={brandingFonts.subFont} color="#eb6612">
                        Skill based
                      </Text>
                      <Text fontFamily={brandingFonts.subFont}>
                        web3 gaming platform
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
                          Presale
                        </Box>{" "}
                      </a>{" "}
                      <Box display={{ base: "none", lg: "block" }}>
                        <a
                          href="https://play.axlegames.io"
                          target="_blank"
                          className="btn-hover color-3"
                          style={{
                            fontFamily: brandingFonts.subFont,
                            textDecoration: "none",
                          }}
                          rel="noopener noreferrer"
                        >
                          Launch App
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
                              src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/versus.png"
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
                src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/C3.png"
                alt="image"
              />
              <Image
                objectFit={"contain"}
                maxH={{ base: "96", md: "320px", xl: "520px" }}
                maxW={{ base: "96", md: "320px", xl: "520px" }}
                className="right-2"
                src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/C4.png"
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
