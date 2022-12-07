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
    <Box p={{ base: "16" }}>
      <Heading title="WHY AXLE GAMES" />
      <Text fontSize={"3xl"} p={4}>
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
        <Text fontSize={"2xl"}>{props.title} </Text>
        <Text fontWeight={"normal"} fontSize={"lg"}>
          {props.text}
        </Text>
      </Box>
    </Tilt>
  );
};

export default Why;
