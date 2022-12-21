import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import PlaceHolder from "../assets/avatar.jpg";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";

const Team = () => {
  const team1 = [
    {
      name: "name",
      avatar: PlaceHolder,
      role: "role",
      linkedIn: "linkedin",
    },
    {
      name: "name",
      avatar: PlaceHolder,
      role: "role",
      linkedIn: "linkedin",
    },
    {
      name: "name",
      avatar: PlaceHolder,
      role: "role",
      linkedIn: "linkedin",
    },

    {
      name: "name",
      avatar: PlaceHolder,
      role: "role",
      linkedIn: "linkedin",
    },
    {
      name: "name",
      avatar: PlaceHolder,
      role: "role",
      linkedIn: "linkedin",
    },
    {
      name: "name",
      avatar: PlaceHolder,
      role: "role",
      linkedIn: "linkedin",
    },
  ];

  const bottomAligner = (index: number) => {
    if (index === 0) return "flex-end";
    if (index === 1) return "center";
    if (index === 2) return "flex-start";
    if (index === 3) return "flex-end";
    if (index === 4) return "center";
    if (index === 5) return "flex-start";
    return "center";
  };

  return (
    <Box width={{ base: "100%", md: "80%" }} mx={{ md: "auto" }}>
      <Heading title="Meet the team" />
      <Flex py={{ base: "16" }} flexDirection={"column"}>
        <Grid
          rowGap={"2rem"}
          columnGap="2rem"
          justifyContent="center"
          alignItems={"center"}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
        >
          {team1.map((t, i) => (
            <Box
              display={"flex"}
              justifyContent={{
                base: "center",
                md: i % 2 === 0 ? "flex-end" : "flex-start",
                lg: bottomAligner(i),
              }}
            >
              <Tilt key={i}>
                <GridItem
                  maxW={"72"}
                  px={8}
                  py={4}
                  display={"flex"}
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems="center"
                  borderRadius={"6vh"}
                  border={`5px solid ${brandingColors.newHighlightColor}`}
                >
                  <Box>
                    <Image
                      maxW="180px"
                      borderRadius={"150rem"}
                      src={t.avatar}
                    />
                  </Box>
                  <Box textAlign={"center"} py={4}>
                    <Text
                      fontSize={"3xl"}
                      color={brandingColors.primaryTextColor}
                    >
                      {t.name}
                    </Text>
                    <Text
                      fontSize={"xl"}
                      color={brandingColors.secondaryTextColor}
                    >
                      {t.role}
                    </Text>
                  </Box>
                </GridItem>
              </Tilt>
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
export default Team;
