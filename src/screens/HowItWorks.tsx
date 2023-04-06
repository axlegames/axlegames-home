import { Box, Container, Image, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../config/brandingColors";

const HowItWorks = () => {
  return (
    <Box overflowY={"hidden"} bg={brandingColors.bgColor}>
      <Box
        id="how-works-section"
        className="border-area"
        overflowY={"hidden"}
        zIndex={10}
      >
        <Box overflowY={"hidden"}>
          <Box className="container pt-120 pb-120">
            <Box className="row d-flex justify-content-center">
              <Box className="col-lg-6 text-center">
                <Box className="section-header">
                  <Box
                    className="d-flex title justify-content-center"
                    style={{ columnGap: "0.5rem" }}
                  >
                    <Text
                      fontSize={{ base: "2xl", lg: "4xl" }}
                      fontFamily={brandingFonts.headingFont}
                    >
                      HOW IT
                    </Text>
                    <Text
                      fontSize={{ base: "2xl", lg: "4xl" }}
                      fontFamily={brandingFonts.headingFont}
                      color={`#f46b15`}
                    >
                      WORKS
                    </Text>
                  </Box>
                  <Box
                    color={brandingColors.highLightColor}
                    fontFamily={brandingFonts.subFont}
                    fontSize={{ base: "md", lg: "xl" }}
                  >
                    It's easier than you think.
                    <Box
                      display={"inline"}
                      fontSize={{ base: "md", lg: "xl" }}
                      style={{
                        fontFamily: brandingFonts.subFont,
                        color: "#eb6612",
                        margin: "0 .33rem",
                      }}
                    >
                      Follow 4 simple easy steps
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="row mp-top">
              <Box className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center">
                <Box className="single-item">
                  <Box className="icon-area">
                    <span>1</span>
                    <Image
                      src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-1.png"
                      alt="image"
                    />
                  </Box>
                  <Box className="text-area">
                    <h5 style={{ fontFamily: brandingFonts.subFont }}>
                      Signup
                    </h5>
                  </Box>
                </Box>
              </Box>
              <Box className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel">
                <Box className="single-item">
                  <Box className="icon-area">
                    <span>2</span>
                    <Image
                      src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-2.png"
                      alt="image"
                    />
                  </Box>
                  <Box className="text-area">
                    <h5 style={{ fontFamily: brandingFonts.subFont }}>
                      participate
                    </h5>
                  </Box>
                </Box>
              </Box>
              <Box className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-alt">
                <Box className="single-item">
                  <Box className="icon-area">
                    <span>3</span>
                    <Image
                      src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-3.png"
                      alt="image"
                    />
                  </Box>
                  <Box className="text-area">
                    <h5 style={{ fontFamily: brandingFonts.subFont }}>
                      Compete
                    </h5>
                  </Box>
                </Box>
              </Box>
              <Box className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center obj-rel">
                <Box className="single-item">
                  <Box className="icon-area">
                    <span>4</span>
                    <Image
                      src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-icon-4.png"
                      alt="image"
                    />
                  </Box>
                  <Box className="text-area">
                    <h5 style={{ fontFamily: brandingFonts.subFont }}>
                      Get Rewarded
                    </h5>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="row d-flex justify-content-center">
              <Box
                style={{ marginTop: "4rem" }}
                className="col-lg-6 text-center"
              >
                <a
                  style={{ fontFamily: brandingFonts.subFont }}
                  href="https://play.axlegames.io"
                  target="_blank"
                  className="btnc"
                  rel="noopener noreferrer"
                >
                  Join Now!
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
