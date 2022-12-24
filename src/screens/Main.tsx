import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import TelegramI from "../assets/main/telegram.png";
import Twitter from "../assets/main/twitter.png";
import Instagram from "../assets/main/instagram.png";
import Discord from "../assets/main/discord.png";
import BG from "../assets/bg/token_countdown_bg.png";

import S2 from "../assets/lottie/s1.json";
import S1 from "../assets/lottie/s2.json";
import S3 from "../assets/lottie/roc 1.json";

import Carousel from "nuka-carousel";
import { brandingColors } from "../config/brandingColors";

import { useEffect, useRef } from "react";

import Lottie from "lottie-react";
import NeuButton from "../components/NeuButton";

const Main = () => {
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

  const s1 = useRef(null) as any;
  const s2 = useRef(null) as any;
  const s3 = useRef(null) as any;

  const map = [
    {
      mainText: "AXLE GAMES.",
      header: "A SKILL-BASED",
      subHeader: "WEB3 GAMING PLATFORM",
      json: S1,
      ref: s1,
    },
    {
      mainText: "LEVEL UP",
      header: "IMPROVE YOUR",
      subHeader: "COGNITIVE SKILLS",
      json: S2,
      ref: s2,
    },
    {
      mainText: "#WORDLE-TO-WEB3",
      header: "YOUR FAVOURITE WORDLE",
      subHeader: "ON AXLEGAMES",
      json: S3,
      ref: s3,
    },
  ];

  return (
    <Box
      minH={{ lg: "90vh" }}
      // backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
      backgroundImage={BG}
      position="relative"
    >
      <Box>
        <Carousel
          wrapAround={true}
          autoplay={true}
          defaultControlsConfig={{
            pagingDotsStyle: {
              height: "28px",
              width: "28px",
              fill: "#8D8CFF",
            },
            nextButtonStyle: { display: "none" },
            prevButtonStyle: {
              display: "none",
            },
            nextButtonText: "",
            prevButtonText: "",
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
                <Box display={"flex"} flexDirection="column" rowGap={".5rem"}>
                  <Text
                    lineHeight={"1.2"}
                    fontSize={{ base: "sm", sm: "18px", lg: "24px" }}
                    color={brandingColors.secondaryTextColor}
                    fontFamily={`'Rubik 80s Fade', cursive`}
                  >
                    {m.mainText}
                  </Text>
                  <Box>
                    <Text
                      className="glowc_text"
                      fontFamily={`'Russo One', sans-serif`}
                      lineHeight={"1"}
                      fontSize={{ base: "md", sm: "24px", lg: "48px" }}
                      fontWeight="normal"
                    >
                      {m.header}
                    </Text>
                    <Text
                      className="glowc_text"
                      fontFamily={`'Russo One', sans-serif`}
                      lineHeight={"1"}
                      fontSize={{ base: "md", lg: "48px" }}
                      fontWeight="normal"
                    >
                      {m.subHeader}
                    </Text>
                  </Box>
                </Box>
                <Box display={"flex"} flexDirection="column" rowGap={"3rem"}>
                  <Flex
                    display={{ base: "flex", md: "none" }}
                    columnGap={"1rem"}
                  >
                    <NeuButton
                      bg={"#A34400"}
                      shadow={"#FF7C1F"}
                      onClick={() => {}}
                      label="GO TO APP"
                    ></NeuButton>
                    <NeuButton
                      bg={"#A34400"}
                      shadow={"#FF7C1F"}
                      onClick={() => {}}
                      label="BUY $AXLE"
                    ></NeuButton>
                  </Flex>
                  <Flex
                    display={{ base: "none", md: "flex" }}
                    columnGap={"1rem"}
                  >
                    <a
                      className="btn"
                      href="https://play.axlegames.io"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      GO TO APP
                    </a>
                    <a
                      href="https://sale.axlegames.io"
                      className="btn-secondary"
                      rel="noreferrer"
                    >
                      BUY $AXLE
                    </a>
                  </Flex>
                </Box>
              </Box>
              <Lottie ref={m.ref} animationData={m.json} />
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
