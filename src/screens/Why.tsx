import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import Win from "../assets/imgs/win.png";
import Compete from "../assets/imgs/compete.png";
import Improve from "../assets/imgs/improve.png";

const whys = [
  {
    title: "Improve",
    text: "Improves player's Cognitive and competitive.................... .......",
    img: Improve,
  },
  {
    title: "Compete",
    text: "A completely free platform to start your journey with WEB3/P2E space",
    img: Compete,
  },
  {
    title: "Win",
    text: "Winning outcome is directly influenced by abilities and are wholly unrelated to the platform.",
    img: Win,
  },
];

const Why = () => {
  return (
    <Box
      width={{ base: "100%", lg: "80%" }}
      p={{ base: "4", lg: "16" }}
      margin={{ base: 0, lg: "auto" }}
    >
      <Heading title="Why Axle Games" />
      <Text
        color={brandingColors.primaryTwoTextColor}
        fontSize={{ base: "xl", lg: "3xl" }}
        p={4}
      >
        some banner text
      </Text>
      <Grid
        columnGap={{ lg: "4rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
      >
        {whys.map((why, index) => (
          <WhyCard {...why} key={index} />
        ))}
      </Grid>
    </Box>
  );
};
interface Props {
  title: string;
  text: string;
  img: string;
}

const WhyCard = (props: Props) => {
  return (
    <Tilt>
      <Box borderRadius="md" display="flex">
        <Image width={"56"} borderRadius={"md"} src={props.img} />
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
