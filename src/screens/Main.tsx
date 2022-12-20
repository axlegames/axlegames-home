import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";

import TelegramI from "../assets/main/telegram.png";
import Twitter from "../assets/main/twitter.png";
import Instagram from "../assets/main/instagram.png";
import Discord from "../assets/main/discord.png";

import Carousel from "nuka-carousel";
import NeuButton from "../components/NeuButton";
import { brandingColors } from "../config/brandingColors";

const Main = () => {
  const map = [
    {
      mainText: "AXLE GAMES.",
      header: "A SKILL-BASED",
      subHeader: "WEB3 GAMING PLATFORM",
      image: Slide1,
    },
    {
      mainText: "STAKING IS LIVE.",
      header: "GET AN ATTRACTIVE",
      subHeader: "APY OF 25%",
      image: Slide2,
    },
    {
      mainText: "OUR VISION",
      header: "IS TO CREATE SAFE",
      subHeader: "HOME OF COMPETITION",
      image: Slide3,
    },
  ];

  const IconWrapper = (props: any) => (
    <Image
      color={props.color}
      height={{ base: "12", lg: "20" }}
      width={{ base: "12", lg: "20" }}
      _hover={{
        transform: "scale(1.1)",
        transition: "all 200ms ease-in",
        cursor: "pointer",
      }}
      src={props.icon}
    />
  );

  const SocialsRow = (props: any) => {
    return (
      <Flex columnGap={{ base: "1rem" }} alignItems="center">
        <IconWrapper icon={TelegramI} />
        <IconWrapper icon={Twitter} />
        <IconWrapper icon={Instagram} />
        <IconWrapper icon={Discord} />
      </Flex>
    );
  };

  return (
    <Box
      minH={{ lg: "90vh" }}
      backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
      position="relative"
    >
      <Box zIndex={2}>
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
              marginBottom: "1rem",
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
                <Box
                  zIndex={2}
                  display={"flex"}
                  flexDirection="column"
                  rowGap={".5rem"}
                >
                  <Text
                    lineHeight={"1.2"}
                    fontSize={{ base: "sm", sm: "24px", lg: "32px" }}
                    color={brandingColors.secondaryTextColor}
                    fontFamily={`'Russo One', sans-serif`}
                  >
                    {m.mainText}
                  </Text>
                  <Box>
                    <Text
                      fontFamily={`'Poppins', sans-serif`}
                      lineHeight={"1"}
                      fontSize={{ base: "md", sm: "24px", lg: "48px" }}
                      fontWeight="900"
                      color={brandingColors.secondaryTwoTextColor}
                    >
                      {m.header}
                    </Text>
                    <Text
                      fontFamily={`'Poppins', sans-serif`}
                      lineHeight={"1"}
                      fontSize={{ base: "md", lg: "48px" }}
                      fontWeight="900"
                      color={brandingColors.secondaryTwoTextColor}
                    >
                      {m.subHeader}
                    </Text>
                  </Box>
                </Box>
                <Box display={"flex"} flexDirection="column" rowGap={"3rem"}>
                  <Flex columnGap={"1rem"}>
                    <NeuButton
                      label="GO TO APP"
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
              </Box>

              <Image src={m.image} />
            </Grid>
          ))}
        </Carousel>
      </Box>
      <Flex
        display={{ base: "flex" }}
        rowGap={{ base: "1rem" }}
        alignItems={"center"}
        flexDirection={{ base: "column" }}
        justifyContent={{ base: "center" }}
      >
        <SocialsRow />
      </Flex>
    </Box>
  );
};
export default Main;
