import { Box, Flex, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import PlaceHolder from "../assets/placeholder.jpg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  FaTelegram,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { brandingColors } from "../config/brandingColors";
import NeuButton from "../components/NeuButton";
import Heading from "../components/Heading";

const About = () => {
  return (
    <Box
      mx={{ xl: "auto" }}
      width={{ base: "100%", xl: "70%" }}
      py={{ base: "12" }}
    >
      <Heading title="About Axle Games" />
      <Grid
        px={{ base: "4" }}
        py={{ base: "8" }}
        templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
        justifyContent={{ base: "center", xl: "flex-start" }}
        rowGap={{ base: "1rem" }}
      >
        <GridItem
          rowGap={{ base: "1rem", lg: "2rem" }}
          flexDirection={"column"}
          display={"flex"}
        >
          <Text
            fontSize={{ lg: "lg" }}
            textAlign={{ base: "center", xl: "start" }}
            color={brandingColors.secondaryTextColor}
          >
            Battle infinity is a gaming platform where our ecosystem hosts
            multiple P2E battle games integrated with the Metaverse world called
            ‘The Battle Arena’. In the Battle Infinity world gamers are not only
            able to play and battle, but can also enjoy the immersive experience
            in the Metaverse world. In the Battle Arena, you can interact,
            perform, watch, explore, and more in a virtual world.
          </Text>
          <Box
            display={{ base: "none", xl: "flex" }}
            flexDirection={"column"}
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            rowGap={{ base: "1rem" }}
          >
            <SocialsRow />
            <Flex columnGap={"1rem"}>
              <HighLighter />
              <Telegram />
            </Flex>
          </Box>
        </GridItem>

        <GridItem
          display={"flex"}
          alignSelf={{ base: "center" }}
          justifySelf="center"
          px={{ base: "8", lg: "16" }}
        >
          <Image borderRadius={"md"} src={PlaceHolder} />
        </GridItem>
      </Grid>

      <GridItem>
        <Flex
          display={{ base: "flex", xl: "none" }}
          rowGap={{ base: "1rem" }}
          alignItems={"center"}
          flexDirection={{ base: "column" }}
          justifyContent={{ base: "center" }}
        >
          <HighLighter />
          <Telegram />
          <SocialsRow />
        </Flex>
      </GridItem>
    </Box>
  );
};

const HighLighter = () => {
  return (
    <NeuButton
      label="BUY $AXLE"
      onClick={() => null}
      bg={brandingColors.neuPrimaryBg}
      shadow={brandingColors.newPrimaryShadow}
    />
  );
};

const Telegram = () => {
  return (
    <Flex
      columnGap={{ base: "1rem" }}
      justifyContent={"space-evenly"}
      alignItems="center"
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
        <IconWrapper color="#3C90D0" icon={FaTelegram} />
        <IconWrapper color="#ffffff" icon={FaDiscord} />
        <IconWrapper color="#114D88" icon={FaTwitter} />
        <IconWrapper color="#7BA4E0" icon={FaFacebook} />
        <IconWrapper color="#FEBBBB" icon={FaYoutube} />
        <IconWrapper color="#F5A2EC" icon={FaInstagram} />
      </Flex>
    </Flex>
  );
};

const IconWrapper = (props: any) => (
  <Icon
    color={props.color}
    height={{ base: "9" }}
    width={{ base: "9" }}
    as={props.icon}
  />
);

export default About;
