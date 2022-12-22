import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import BG from "../assets/bg/token_bg.png";

import Praneeth from "../assets/team/praneeth.webp";
import Chakri from "../assets/team/chakri.webp";
import Akash from "../assets/team/akash.webp";
import Roney from "../assets/team/roney.webp";
import Lucas from "../assets/team/lucas.png";
import Prashanth from "../assets/team/prashanth.webp";

const Team = () => {
  const team1 = [
    {
      name: "Praneeth Nagu",
      avatar: Praneeth,
      role: "Founder / Marketing Lead",
      linkedIn: "linkedin",
    },
    {
      name: "D. C. R",
      avatar: Chakri,
      role: "Co-Founder / Project Lead",
      linkedIn: "linkedin",
    },
    {
      name: "Akash Madduru",
      avatar: Akash,
      role: "role",
      linkedIn: "Product / Dev Lead",
    },

    {
      name: "Roney",
      avatar: Roney,
      role: "Product / Design Lead",
      linkedIn: "linkedin",
    },
    {
      name: "Prashanth",
      avatar: Prashanth,
      role: "Blockchain Developer",
      linkedIn: "linkedin",
    },
    {
      name: "Lucas",
      avatar: Lucas,
      role: "Marketing",
      linkedIn: "",
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
    <Box
      backgroundImage={BG}
      width={{ base: "100%", md: "80%" }}
      mx={{ md: "auto" }}
    >
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
                  borderRadius={"3vh"}
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
                      fontSize={"xl"}
                      color={brandingColors.primaryTextColor}
                    >
                      {t.name}
                    </Text>
                    <Text
                      fontSize={"md"}
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
