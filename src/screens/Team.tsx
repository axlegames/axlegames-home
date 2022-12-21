import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import PlaceHolder from "../assets/avatar.jpg";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";

const Team = () => {
  const team = [
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
  ];

  return (
    <Box width={{ base: "100%", md: "80%" }} mx={{ md: "auto" }}>
      <Heading title="Meet the team" />
      <Flex py={16} rowGap={"4rem"} flexDirection={"column"}>
        <Grid
          columnGap="4rem"
          rowGap={"4rem"}
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr",
            "2xl": "1fr 1fr 1fr 1fr",
          }}
        >
          {team.map((t, i) => (
            <Box
              display={"flex"}
              justifyContent={{
                base: "center",
                md: i % 2 === 0 ? "flex-end" : "flex-start",
              }}
            >
              <Tilt key={i}>
                <GridItem
                  display={"flex"}
                  flexDirection="column"
                  justifyContent={"center"}
                  alignItems="center"
                  px={8}
                  py={4}
                  borderRadius={"3vw"}
                  border={`5px solid ${brandingColors.newHighlightColor}`}
                  maxW={"72"}
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
                      lineHeight={"1"}
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
        <Grid
          columnGap="4rem"
          rowGap={"4rem"}
          justifyContent="center"
          alignItems={"center"}
          gridTemplateColumns={{
            base: "1fr",
            lg: "1fr 1fr 1fr",
          }}
        >
          {team1.map((t, i) => (
            <Box
              display={"flex"}
              justifyContent={{
                base: "center",
                md: i % 2 === 0 ? "flex-end" : "flex-start",
                lg: "center",
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
                  borderRadius={"3vw"}
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
