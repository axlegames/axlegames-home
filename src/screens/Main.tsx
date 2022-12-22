import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import Slide1 from "../assets/slide1.png";
import Slide2 from "../assets/slide2.png";
import Slide3 from "../assets/slide3.png";

import TelegramI from "../assets/main/telegram.png";
import Twitter from "../assets/main/twitter.png";
import Instagram from "../assets/main/instagram.png";
import Discord from "../assets/main/discord.png";
import BG from "../assets/bg/token_countdown_bg.png";

import Carousel from "nuka-carousel";
import NeuButton from "../components/NeuButton";
import { brandingColors } from "../config/brandingColors";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";

const Main = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  useEffect(() => {}, []);

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
      // backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
      position="relative"
      zIndex={"10"}
      bg={brandingColors.bgColor}
      backgroundImage={BG}
    >
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 881.8766334760375,
              },
            },
            color: {
              value: ["#FFC56E", "#FF6CC6", "#4241B8", "#F69040", "#0EADC9"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 4,
                color: brandingColors.dangerColor,
              },
            },
            opacity: {
              value: 0,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 1,
                sync: true,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: true,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 10,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.4,
                },
              },
              bubble: {
                distance: 1059.7607620532553,
                size: 5,
                duration: 2.273816194443766,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> */}

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
