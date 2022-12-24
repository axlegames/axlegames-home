import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import TelegramI from "../assets/main/telegram.png";
import Twitter from "../assets/main/twitter.png";
import Instagram from "../assets/main/instagram.png";
import Discord from "../assets/main/discord.png";
import BG from "../assets/bg/token_countdown_bg.png";

import S1 from "../assets/lottie/s1.json";
import S2 from "../assets/lottie/s2.json";

import Carousel from "nuka-carousel";
import { brandingColors } from "../config/brandingColors";

import { useEffect, useRef } from "react";

import Lottie from "lottie-react";
import lottieW from "lottie-web";
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
      mainText: "STAKING IS LIVE.",
      header: "GET AN ATTRACTIVE",
      subHeader: "APY OF 25%",
      json: S2,
      ref: s2,
    },
    {
      mainText: "OUR VISION",
      header: "IS TO CREATE SAFE",
      subHeader: "HOME OF COMPETITION",
      json: S1,
      ref: s3,
    },
  ];

  useEffect(() => {
    lottieW.loadAnimation({
      container: s1,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: map[0].json,
    });

    lottieW.loadAnimation({
      container: s2,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: map[1].json,
    });

    lottieW.loadAnimation({
      container: s3,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: map[2].json,
    });

    return () => {
      lottieW.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s1, s2, s3]);

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
                <Box display={"flex"} flexDirection="column" rowGap={".5rem"}>
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
                      className="glowc_text"
                      fontFamily={`'Russo One', sans-serif`}
                      lineHeight={"1"}
                      fontSize={{ base: "md", sm: "24px", lg: "48px" }}
                      fontWeight="900"
                    >
                      {m.header}
                    </Text>
                    <Text
                      className="glowc_text"
                      fontFamily={`'Russo One', sans-serif`}
                      lineHeight={"1"}
                      fontSize={{ base: "md", lg: "48px" }}
                      fontWeight="900"
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
                      className="btn-secondary btn-4"
                    >
                      Buy $AXLE
                    </a>
                  </Flex>
                </Box>
              </Box>
              <Lottie
                ref={m.ref}
                onMouseEnter={() => lottieW.play()}
                onMouseLeave={() => lottieW.pause()}
                animationData={m.json}
              />
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
