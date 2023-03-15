import { Box, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

const HowItWorks = () => {
  return (
    <Box overflowY={"hidden"} bg={brandingColors.bgColor}>
      <Box
        id="how-works-section"
        className="border-area"
        overflowY={"hidden"}
        minH={{ base: "130vh", md: "60vh", lg: "78vh" }}
        zIndex={10}
      >
        <Box overflowY={"hidden"} className="overlay pt-120 pb-120">
          <Box className="container wow fadeInUp">
            <Box className="row d-flex justify-content-center">
              <Box className="col-lg-6 text-center">
                <Box className="section-header">
                  <Box
                    className="d-flex title justify-content-center"
                    style={{ columnGap: "0.5rem" }}
                  >
                    <Text
                      fontSize={{ base: "3xl", lg: "5xl" }}
                      style={{ fontFamily: "Staatliches" }}
                    >
                      HOW IT
                    </Text>
                    <Text
                      fontSize={{ base: "3xl", lg: "5xl" }}
                      style={{ fontFamily: "Staatliches", color: "#f46b15" }}
                    >
                      WORKS
                    </Text>
                  </Box>
                  <p style={{ fontFamily: "Shantell Sans" }}>
                    It's easier than you think.
                    <span
                      style={{
                        fontFamily: "Shantell Sans",
                        color: "#eb6612",
                        margin: "0 .33rem",
                      }}
                    >
                      Follow 4 simple easy steps
                    </span>
                  </p>
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
                    <h5 style={{ fontFamily: "Shantell Sans" }}>Signup</h5>
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
                    <h5 style={{ fontFamily: "Shantell Sans" }}>participate</h5>
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
                    <h5 style={{ fontFamily: "Shantell Sans" }}>Compete</h5>
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
                    <h5 style={{ fontFamily: "Shantell Sans" }}>
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
                  style={{ fontFamily: "Staatliches" }}
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
