import Heading from "../components/Heading";

import { brandingColors } from "../config/brandingColors";
import { whysGridOne, whysGridTwo } from "../config/data";
import { Box, Grid, Image, Text } from "@chakra-ui/react";

const Why = () => {
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_bg.png`}
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
        {whysGridOne.map((why, index) => (
          <WhyCard slide={`fade-down`} {...why} key={index} />
        ))}
      </Grid>

      <Grid
        columnGap={{ base: "1rem", xl: "4rem" }}
        rowGap={{ base: "4rem" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        justifyContent={{ lg: "flex-start" }}
      >
        {whysGridTwo.map((why, index) => (
          <WhyCard slide={`fade-up`} {...why} key={index} />
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
        backgroundImage={`linear-gradient(to top, #061e37, #06223e, #072544, #07294b, #082d52, #03315d, #003569, #003874, #003c86, #003f97, #0041a8, #1a42b8)`}
        flexDirection="column"
        p={5}
      >
        <Image width={"44"} borderRadius={"md"} src={props.img} />
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
    </Box>
  );
};

export default Why;
