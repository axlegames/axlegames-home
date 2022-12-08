import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
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
  return (
    <Box p={{ base: "16" }}>
      <Heading title="Meet the team" />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          "2xl": "1fr 1fr 1fr 1fr",
        }}
        columnGap="1rem"
        rowGap={"1rem"}
        p={{ base: "16" }}
      >
        {team.map((t, i) => (
          <Tilt>
            <GridItem
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <Box>
                <Image maxW={"250px"} borderRadius={"150rem"} src={t.avatar} />
              </Box>
              <Box textAlign={"center"} py={4}>
                <Text fontSize={"3xl"} color={brandingColors.primaryTextColor}>
                  {t.name}
                </Text>
                <Text fontSize={"xl"} color={brandingColors.secondaryTextColor}>
                  {t.role}
                </Text>
              </Box>
            </GridItem>
          </Tilt>
        ))}
      </Grid>
    </Box>
  );
};
export default Team;
