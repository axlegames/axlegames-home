import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import Win from "../assets/imgs/win.png";
import Compete from "../assets/imgs/compete.png";
import Improve from "../assets/imgs/improve.png";
import BG from "../assets/bg/token_countdown_bg.png";

const whys = [
  {
    title: "DAO governance",
    text: "Voting rights to every holder",
    img: Improve,
  },
  {
    title: "Deflationary",
    text: "50% of game fee will be burned",
    img: Compete,
  },
  {
    title: "Fully Decentralized",
    text: "It get’s more and more to $AXLE token",
    img: Win,
  },
];

const whys2 = [
  {
    title: "Zero fee",
    text: "It get’s more and more to $AXLE token holders",
    img: Win,
  },
  {
    title: "Exclusive Rewards",
    text: "It get’s more and more to $AXLE token holders",
    img: Win,
  },
];

const Why = () => {
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={BG}
      p={{ base: "4", lg: "16" }}
      display="flex"
      flexDirection={"column"}
      rowGap="4rem"
      justifyContent={"center"}
      alignItems="center"
    >
      <Heading title="Why $AXLE ?" />
      <Grid
        columnGap={{ base: "1rem", xl: "4rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        rowGap={{ base: "4rem" }}
      >
        {whys.map((why, index) => (
          <WhyCard {...why} key={index} />
        ))}
      </Grid>

      <Grid
        columnGap={{ base: "1rem", xl: "4rem" }}
        rowGap={{ base: "4rem" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        justifyContent={{ lg: "flex-start" }}
      >
        {whys2.map((why, index) => (
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
      <Box
        minW={{ base: "340px" }}
        maxW={{ base: "340px" }}
        justifyContent={"center"}
        alignItems="center"
        borderRadius="md"
        display="flex"
        backgroundImage={`linear-gradient(to top, #061e37, #06223e, #072544, #07294b, #082d52, #03315d, #003569, #003874, #003c86, #003f97, #0041a8, #1a42b8)`}
        flexDirection="column"
      >
        <Image width={"56"} borderRadius={"md"} src={props.img} />
        <Box>
          <Text
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "lg", lg: "2xl" }}
            textAlign={"center"}
          >
            {props.title}
          </Text>
          <Text
            color={brandingColors.secondaryTextColor}
            fontWeight={"normal"}
            fontSize={{ base: "sm", lg: "md" }}
            textAlign={"center"}
          >
            {props.text}
          </Text>
        </Box>
      </Box>
    </Tilt>
  );
};

export default Why;
