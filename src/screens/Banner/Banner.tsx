import { Box, Image, Text } from "@chakra-ui/react";
import "./Banner.css";

const Banner = () => {
  return (
    <Box>
      {/* banner-section start */}
      <section id="banner-section">
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
                    <Text
                      cursor={"pointer"}
                      className="gradient-text"
                      fontSize={{ base: "xl", lg: "2xl", xl: "3xl" }}
                      fontFamily="Bungee Shade"
                    >
                      #AI-GAMING
                    </Text>
                    <Box
                      display={"flex"}
                      style={{ fontFamily: "Bungee Shade" }}
                      cursor="pointer"
                    >
                      <Text
                        fontSize={{ base: "5xl", lg: "6xl" }}
                        fontFamily="Bungee Shade"
                      >
                        AXLE
                      </Text>
                      <Text
                        fontSize={{ base: "5xl", lg: "6xl" }}
                        fontFamily="Bungee Shade"
                        color={"#f46b15"}
                      >
                        GAMES
                      </Text>
                    </Box>
                    <Box display={"flex"} columnGap=".25rem">
                      <Text fontFamily={"Shantell Sans"}>A</Text>
                      <Text fontFamily={"Shantell Sans"} color="#eb6612">
                        Skill based
                      </Text>
                      <Text fontFamily={"Shantell Sans"}>
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
                          fontFamily={"Staatliches"}
                          display="flex"
                          justifyContent={"center"}
                          alignItems="center"
                          textDecoration={"none"}
                        >
                          Presale
                          <Box
                            style={{
                              fontFamily: "Staatliches",
                              fontSize: "14px",
                              color: "#38a169",
                            }}
                          >
                            • live
                          </Box>
                        </Box>
                      </a>
                      <Box display={{ base: "none", lg: "block" }}>
                        <a
                          href="https://play.axlegames.io"
                          target="_blank"
                          className="btn-hover color-3"
                          style={{
                            fontFamily: "Staatliches",
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
                              style={{ maxHeight: "260px" }}
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
