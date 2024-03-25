import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../config/brandingColors";

const EProfile = () => {
  return (
    <Box
      py={{ base: "12" }}
      px={{ base: "4", md: "12" }}
      bg={brandingColors.bgColor}
    >
      <Box width={"100%"} id="call-action" className="border-area" zIndex={10}>
        <Box
          data-aos="fade-left"
          width={"100%"}
          columnGap="1rem"
          display={"flex"}
          justifyContent="space-evenly"
          alignItems={"center"}
          flexDirection={{ base: "column", lg: "row" }}
          rowGap={{ base: "0", lg: "2rem" }}
        >
          <Box display={"flex"}>
            <Box
              display={"flex"}
              flexDirection="column"
              rowGap={{ base: ".75rem", md: "1.25rem" }}
              px={4}
              py={4}
            >
              <Box
                flexDirection={"column"}
                display={"flex"}
                columnGap="0.5rem"
                className="title"
                rowGap={{ base: ".5rem", md: "1rem" }}
                p={0}
                m={0}
              >
                <Text
                  fontSize={{ base: "2xl", lg: "4xl" }}
                  fontFamily={brandingFonts.headingFont}
                >
                  Build your
                </Text>
                <Box columnGap="0.5rem" display={"flex"}>
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    color={`#f46b15`}
                    fontFamily={brandingFonts.headingFont}
                  >
                    Axle Games
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", lg: "4xl" }}
                    fontFamily={brandingFonts.headingFont}
                  >
                    Profile
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection="column" columnGap={".33rem"}>
                <Box display={"flex"} columnGap=".33rem">
                  <Text
                    fontSize={{ base: "md", lg: "xl" }}
                    fontFamily={brandingFonts.subFont}
                  >
                    Showcase your{" "}
                    <Box
                      display={"inline"}
                      color={brandingColors.primaryTextColor}
                    >
                      winnings, achievements, badges
                    </Box>{" "}
                    and build your reputation on Axle Games
                  </Text>
                </Box>
              </Box>
              <Flex columnGap={".5rem"}>
                <a
                  style={{
                    fontFamily: brandingFonts.subFont,
                    textDecoration: "none",
                  }}
                  href="https://play.axle.games"
                  target="_blank"
                  className="btnc"
                  rel="noopener noreferrer"
                >
                  Sign Up
                </a>
                {/* <a
                  style={{
                    fontFamily: brandingFonts.subFont,
                    textDecoration: "none",
                  }}
                  href="https://sale.axle.games"
                  target="_blank"
                  className="btn-hover color-3"
                  rel="noopener noreferrer"
                >
                  BUY $AXLE
                </a> */}
              </Flex>
            </Box>
          </Box>
          <Box m={0} p={0} data-aos="fade-right" className="right-area">
            <Image
              p={4}
              objectFit={"contain"}
              maxW={{ base: "440px", md: "620px" }}
              src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/profile-info.png"
              alt="image"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default EProfile;
