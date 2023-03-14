import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

const EProfile = () => {
  return (
    <Box py={12} px={{ base: "4", md: "12" }} bg={brandingColors.bgColor}>
      <Box id="call-action" className="border-area" zIndex={10}>
        <Box
          columnGap="1rem"
          display={"flex"}
          justifyContent="space-evenly"
          alignItems={"center"}
          flexDirection={{ base: "column", lg: "row" }}
          rowGap="2rem"
        >
          <Box display={"flex"}>
            <Box
              display={"flex"}
              flexDirection="column"
              justifyContent={"flex-start"}
              alignItems="flex-start"
              rowGap={"1rem"}
            >
              <Box display={"flex"} columnGap="0.5rem" className="title">
                <Text
                  fontSize={{ base: "2xl", lg: "5xl" }}
                  style={{ fontFamily: "Staatliches" }}
                >
                  Build your
                </Text>
                <Text
                  fontSize={{ base: "2xl", lg: "5xl" }}
                  style={{ fontFamily: "Staatliches", color: "#f46b15" }}
                >
                  Axle Games
                </Text>
                <Text
                  fontSize={{ base: "2xl", lg: "5xl" }}
                  style={{ fontFamily: "Staatliches" }}
                >
                  Profile
                </Text>
              </Box>
              <Box display={"flex"} flexDirection="column" columnGap={".33rem"}>
                <Box display={"flex"} columnGap=".33rem">
                  {" "}
                  <p style={{ fontFamily: "Shantell Sans" }}>Showcase your</p>
                  <p style={{ fontFamily: "Shantell Sans", color: "#f46b15" }}>
                    winnings, achievements, badges
                  </p>
                </Box>
                <p style={{ fontFamily: "Shantell Sans" }}>
                  and build your reputation on Axle Games
                </p>
              </Box>
              <Flex columnGap={".5rem"}>
                <a
                  style={{ fontFamily: "Staatliches", textDecoration: "none" }}
                  href="https://play.axlegames.io"
                  target="_blank"
                  className="btnc"
                  rel="noopener noreferrer"
                >
                  Sign Up
                </a>
                <a
                  style={{ fontFamily: "Staatliches", textDecoration: "none" }}
                  href="https://sale.axlegames.io"
                  target="_blank"
                  className="btn-hover color-3"
                  rel="noopener noreferrer"
                >
                  BUY $AXLE
                </a>
              </Flex>
            </Box>
          </Box>
          <Box className="right-area">
            <Image
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
