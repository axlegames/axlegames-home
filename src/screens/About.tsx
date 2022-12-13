import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import PlaceHolder from "../assets/slide1.png";
import { brandingColors } from "../config/brandingColors";

const About = () => {
  return (
    <Box
      mx={{ xl: "auto" }}
      width={{ base: "100%", xl: "70%" }}
      py={{ base: "12" }}
    >
      <Grid
        px={{ base: "4" }}
        py={{ base: "8" }}
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        justifyContent="space-between"
        alignItems={"center"}
        rowGap={{ base: "1rem" }}
      >
        <GridItem
          rowGap={{ base: "1rem", lg: "2rem" }}
          flexDirection={"column"}
          display={"flex"}
        >
          <Box display={"flex"} columnGap="1rem">
            <Text fontSize={"3xl"}>Our</Text>
            <Text
              px={4}
              borderRadius="sm"
              fontSize={"3xl"}
              bg={brandingColors.secondaryTwoTextColor}
            >
              Mission
            </Text>
          </Box>
          <Text>
            To create safe, regulated and responsible home of competition that
            has a postive and lasting infulence on people's lives.
          </Text>
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

      <Grid
        px={{ base: "4" }}
        py={{ base: "8" }}
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        justifyContent="space-between"
        alignItems={"center"}
        rowGap={{ base: "1rem" }}
      >
        <GridItem
          display={{ base: "none", md: "flex" }}
          alignSelf={{ base: "center" }}
          justifySelf="center"
          px={{ base: "8", lg: "16" }}
        >
          <Image borderRadius={"md"} src={PlaceHolder} />
        </GridItem>
        <GridItem
          rowGap={{ base: "1rem", lg: "2rem" }}
          flexDirection={"column"}
          display={"flex"}
        >
          <Box display={"flex"} columnGap="1rem">
            <Text fontSize={"3xl"}>Our</Text>
            <Text
              px={4}
              borderRadius="sm"
              fontSize={"3xl"}
              bg={brandingColors.primaryTextColor}
            >
              Product
            </Text>
          </Box>
          <Text>
            To be the most player-focused gaming platform in the world.
          </Text>
        </GridItem>
        <GridItem
          display={{ base: "flex", md: "none" }}
          alignSelf={{ base: "center" }}
          justifySelf="center"
          px={{ base: "8", lg: "16" }}
        >
          <Image borderRadius={"md"} src={PlaceHolder} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
