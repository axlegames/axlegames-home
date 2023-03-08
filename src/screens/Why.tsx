import Heading from "../components/Heading";

import { brandingColors } from "../config/brandingColors";
import { whysGridOne, whysGridTwo } from "../config/data";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Tilt from "react-parallax-tilt";

const Why = () => {
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-works-bg.png`}
      px={{ base: "4", lg: "16" }}
      py={{ base: "16", lg: "16" }}
      display="flex"
      flexDirection={"column"}
      rowGap="4rem"
      justifyContent={"center"}
      alignItems="center"
    >
      <Heading title="Why $AXLE?" />
      <Grid
        columnGap={{ base: "1rem", xl: "4rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        rowGap={{ base: "4rem" }}
      >
        {whysGridOne.map((why, index) => (
          <Tilt>
            <WhyCard slide={`fade-down`} {...why} key={index} />
          </Tilt>
        ))}
      </Grid>

      <Grid
        columnGap={{ base: "1rem", xl: "4rem" }}
        rowGap={{ base: "4rem" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        justifyContent={{ lg: "flex-start" }}
      >
        {whysGridTwo.map((why, index) => (
          <Tilt>
            <WhyCard slide={`fade-up`} {...why} key={index} />
          </Tilt>
        ))}
      </Grid>
    </Box>
  );
};
interface Props {
  title: string;
  text: string;
  img: string;
  slide: string;
}

const WhyCard = (props: Props) => {
  return (
    <Box data-aos={props.slide}>
      <Box
        minW={{ base: "340px" }}
        maxW={{ base: "340px" }}
        justifyContent={"center"}
        alignItems="center"
        borderRadius="md"
        display="flex"
        backgroundImage={`linear-gradient(to left bottom, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
        flexDirection="column"
        p={5}
      >
        <Image
          width={{ base: "24", md: "40" }}
          my={{ base: "4" }}
          borderRadius={"md"}
          src={props.img}
        />
        <Box>
          <Text
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "lg", lg: "2xl" }}
            fontFamily={`Staatliches`}
            fontWeight="bold"
            textAlign={"center"}
          >
            {props.title}
          </Text>
          <Text
            color={brandingColors.secondaryTextColor}
            fontSize={{ base: "md", lg: "lg" }}
            textAlign={"center"}
            fontFamily={`Shantell Sans`}
          >
            {props.text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
