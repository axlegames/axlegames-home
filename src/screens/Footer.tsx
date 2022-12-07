import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FaTelegram, FaMedium, FaTwitter, FaInstagram } from "react-icons/fa";

import { SiDiscord } from "react-icons/si";
import { brandingColors } from "../config/brandingColors";

const Icon = (props: any) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <Box
        cursor={"pointer"}
        transition={`100ms all ease-in`}
        _hover={{
          transform: "scale(1.1)",
        }}
      >
        {
          <props.children
            size={42}
            color={
              props.primary
                ? brandingColors.primaryMiscColor
                : brandingColors.secondaryMiscColor
            }
          />
        }{" "}
      </Box>
    </a>
  );
};

const TextHeader = (props: any) => {
  return (
    <Text
      color={
        props.primary
          ? brandingColors.primaryTextColor
          : brandingColors.secondaryTextColor
      }
      fontWeight={"bold"}
      fontSize={{ base: "md", lg: "lg", xl: "x", "2xl": "2xl" }}
    >
      {props.title}
    </Text>
  );
};

const Footer = () => {
  return (
    <Flex
      fontFamily={"quicksand"}
      fontWeight="bold"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
      rowGap={{ base: "12rem", md: "5rem" }}
      my={{ base: "20", md: "16" }}
    >
      <Box
        color={brandingColors.highLightColor}
        mx={{ base: "4", md: "8", lg: "auto" }}
        my={{ base: "4", md: "16" }}
        bg={brandingColors.fgColor}
        p={{ base: "3" }}
        pb={{ lg: "8" }}
        width={{ lg: "70%", xl: "65%", "2xl": "60%" }}
        borderRadius="xl"
        display="flex"
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        flexDirection={{ base: "column" }}
        rowGap={{ base: ".25rem" }}
        minHeight={{ base: "48vh" }}
        position={"relative"}
      >
        <Box
          boxShadow={`0px 0px 6px ${brandingColors.primaryMiscColor}`}
          right={{ base: "0", xl: "-10%" }}
          bottom={{ base: "-40%", xl: "-30%" }}
          borderRadius="xl"
          position={"absolute"}
          bg={brandingColors.fgColor}
          width={{ base: "100%", xl: "20vw" }}
          height="18vh"
          display="flex"
          justifyContent={"space-evenly"}
          alignItems="center"
          flexDirection={"column"}
        >
          <TextHeader primary={true} title={"Channels"} />
          <Flex
            display="flex"
            justifyContent={"space-evenly"}
            alignItems="center"
            columnGap={"2rem"}
          >
            <Icon
              primary={true}
              url="https://t.me/axlegames_en"
              children={FaTelegram}
            />
            <Icon
              primary={true}
              url="https://discord.com/invite/ReHuTHVf"
              children={SiDiscord}
            />
            <Icon
              primary={true}
              url="https://www.instagram.com/axlegames/"
              children={FaInstagram}
            />
          </Flex>
        </Box>

        <Text
          textAlign={"center"}
          fontSize={{ base: "md", lg: "lg", xl: "xl" }}
          p={{ base: "8" }}
          color={brandingColors.secondaryTextColor}
        >
          Join our mailing list to stay updated about Axle Games.
        </Text>
        <Button
          _hover={{
            bg: brandingColors.secondaryTextColor,
            color: brandingColors.secondaryTwoTextColor,
          }}
          bg={brandingColors.bgColor}
          color={brandingColors.secondaryTwoTextColor}
          boxShadow={`0px 0px 4px ${brandingColors.secondaryTwoTextColor}`}
          borderRadius="xl"
          size="lg"
        >
          Join the Revolution
        </Button>

        <Box
          boxShadow={`0px 0px 6px ${brandingColors.secondaryMiscColor}`}
          left={{ base: 0, xl: "-10%" }}
          top={{ base: "-40%", xl: "-30%" }}
          borderRadius="xl"
          position={"absolute"}
          bg={brandingColors.fgColor}
          width={{ base: "100%", xl: "20vw" }}
          height="18vh"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <TextHeader primary={false} title={"Socials"} />
          <Flex display="flex" alignItems="center" columnGap={"2rem"}>
            <Icon children={FaMedium} />
            <Icon url="https://twitter.com/AxleGames" children={FaTwitter} />
          </Flex>
        </Box>
      </Box>
      <Text color={brandingColors.secondaryTextColor}>
        Copyright 2022 © Axle Games
      </Text>
    </Flex>
  );
};

export default Footer;
