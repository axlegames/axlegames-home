import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import PlaceHolder from "../assets/placeholder.jpg";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";

const whys = [
  {
    title: "some title lorem ",
    text: "some text lorem lorem lorem lorem lorem lorem lorem lofe lore loeme",
  },
  {
    title: "some title lorem ",
    text: "some text lorem lorem lorem lorem lorem lorem lorem lofe lore loeme",
  },
  {
    title: "some title lorem ",
    text: "some text lorem lorem lorem lorem lorem lorem lorem lofe lore loeme",
  },
];

const Why = () => {
  return (
    <Box p={{ base: "4", lg: "16" }}>
      <Heading title="Why Axle Games" />
      <Text
        color={brandingColors.primaryTwoTextColor}
        fontSize={{ base: "xl", lg: "3xl" }}
        p={4}
      >
        some banner text
      </Text>
      <Flex
        columnGap={"1rem"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        {whys.map((why, index) => (
          <WhyCard {...why} key={index} />
        ))}
      </Flex>
    </Box>
  );
};
interface Props {
  title: string;
  text: string;
}

const WhyCard = (props: Props) => {
  return (
    <Tilt>
      <Box
        bg={brandingColors.fgColor}
        py={8}
        px={6}
        borderRadius="md"
        shadow={"xl"}
      >
        <Image borderRadius={"md"} src={PlaceHolder} />
      </Box>
      <Box p={3}>
        <Text
          color={brandingColors.primaryTextColor}
          fontSize={{ base: "lg", lg: "2xl" }}
        >
          {props.title}{" "}
        </Text>
        <Text
          color={brandingColors.secondaryTextColor}
          fontWeight={"normal"}
          fontSize={{ base: "sm", lg: "md" }}
        >
          {props.text}
        </Text>
      </Box>
    </Tilt>
  );
};

export default Why;
