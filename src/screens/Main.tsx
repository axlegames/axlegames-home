import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PlaceHolder from "../assets/placeholder.jpg";
import Carousel from "nuka-carousel";
import NeuButton from "../components/NeuButton";
import { brandingColors } from "../config/brandingColors";

const Main = () => {
  const map = [1, 2, 3, 4, 5];
  return (
    <Box p={{ base: "0", md: "8", lg: "16" }}>
      <Carousel
        wrapAround={true}
        autoplay={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            marginLeft: "1rem",
            marginRight: "1rem",
            background: brandingColors.fgColor,
            borderRadius: "2vh",
            color: brandingColors.primaryTextColor,
          },
          nextButtonStyle: {
            fontWeight: "bold",
            fontFamily: "quicksand",
            fontSize: "2rem",
            borderRadius: "2rem",
            marginRight: "1rem",
          },
          prevButtonStyle: {
            fontWeight: "bold",
            fontFamily: "quicksand",
            fontSize: "2rem",
            borderRadius: "2rem",
            marginLeft: "1rem",
          },
          nextButtonText: ">",
          prevButtonText: "<",
        }}
        slidesToShow={1}
      >
        {map.map((m, i) => (
          <Box
            position="relative"
            display={"flex"}
            justifyContent="center"
            key={i}
          >
            <Box
              display={"flex"}
              flexDirection="column"
              rowGap={"3rem"}
              left={"10%"}
              top="40%"
              position={"absolute"}
            >
              <Box>
                <Text
                  lineHeight={"1"}
                  fontSize={{ base: "xl", md: "3xl", xl: "5xl" }}
                  color={brandingColors.primaryTextColor}
                >
                  SWAP IS LIVE
                </Text>
                <Text
                  fontSize={{ base: "md", md: "xl", xl: "3xl" }}
                  color={brandingColors.primaryTwoTextColor}
                >
                  Use Battle Swap to swap with ease
                </Text>
              </Box>
              <Flex columnGap={"1rem"}>
                <NeuButton
                  label="GO TO SWAP"
                  onClick={() => null}
                  bg={brandingColors.neuPrimaryBg}
                  shadow={brandingColors.newPrimaryShadow}
                />

                <NeuButton
                  label="BUY $AXLE"
                  onClick={() => null}
                  bg={brandingColors.neuPrimaryBg}
                  shadow={brandingColors.newPrimaryShadow}
                />
              </Flex>
            </Box>
            <Image src={PlaceHolder} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
export default Main;
