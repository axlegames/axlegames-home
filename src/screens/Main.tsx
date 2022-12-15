import { Box, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";

import TelegramI from "../assets/main/fly.png";
import Discord from "../assets/main/discord.png";
import Twitter from "../assets/main/twitter.png";
import Youtube from "../assets/main/youtube.png";
import Facebook from "../assets/main/facebook.png";
import Instagram from "../assets/main/instagram.png";

import Carousel from "nuka-carousel";
import NeuButton from "../components/NeuButton";
import { brandingColors } from "../config/brandingColors";
import { FaTelegram } from "react-icons/fa";

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
      mainText: "SWAP IS HERE.",
      header: "GET AN ATTRACTIVE",
      subHeader: "APY OF 25%",
      image: Slide3,
    },
  ];

  const IconWrapper = (props: any) => (
    <Image
      color={props.color}
      height={{ base: "9" }}
      width={{ base: "9" }}
      src={props.icon}
    />
  );

  const Telegram = () => {
    return (
      <Flex
        columnGap={{ base: "1rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        fontWeight={"bold"}
      >
        <ChevronRightIcon width={{ base: "8" }} height={{ base: "8" }} />
        <Text color={brandingColors.secondaryTextColor}>JOIN TELEGRAM</Text>
        <Icon
          color="#3C90D0"
          width={{ base: "6" }}
          height={{ base: "6" }}
          as={FaTelegram}
        />
      </Flex>
    );
  };

  const SocialsRow = (props: any) => {
    return (
      <Flex columnGap={{ base: "1rem" }} justifyContent={{ base: "center" }}>
        <Text
          color={brandingColors.secondaryTextColor}
          fontSize={"3xl"}
          display={{ base: "none", xl: "flex" }}
        >
          Join Us :
        </Text>
        <Flex columnGap={{ base: "1rem" }} alignItems="center">
          <IconWrapper icon={TelegramI} />
          <IconWrapper icon={Discord} />
          <IconWrapper icon={Twitter} />
          <IconWrapper icon={Facebook} />
          <IconWrapper icon={Youtube} />
          <IconWrapper icon={Instagram} />
        </Flex>
      </Flex>
    );
  };

  return (
    <Box
      minH={{ lg: "90vh" }}
      p={{ base: 0, lg: "8" }}
      bg={brandingColors.bgColor}
    >
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
            bg={brandingColors.bgColor}
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
            </Box>

            <Image src={m.image} />
          </Grid>
        ))}
      </Carousel>
      <Flex
        display={{ base: "flex" }}
        rowGap={{ base: "1rem" }}
        alignItems={"center"}
        flexDirection={{ base: "column" }}
        justifyContent={{ base: "center" }}
      >
        <Telegram />
        <SocialsRow />
      </Flex>
    </Box>
  );
};
export default Main;
