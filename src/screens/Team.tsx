import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
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
    <Box p={{ base: "16" }}>
      <Heading title="Meet the team" />
      <Flex
        columnGap="4rem"
        rowGap={"2rem"}
        justifyContent="center"
        alignItems={"center"}
        p={{ base: "16" }}
      >
        {team.map((t, i) => (
          <Tilt key={i}>
            <GridItem
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
              borderRadius={"3vw"}
              py={8}
              px={16}
              border={`5px solid ${brandingColors.newHighlightColor}`}
            >
              <Box>
                <Image maxW="180px" borderRadius={"150rem"} src={t.avatar} />
              </Box>
              <Box textAlign={"center"} py={4}>
                <Text
                  lineHeight={"1"}
                  fontSize={"3xl"}
                  color={brandingColors.primaryTextColor}
                >
                  {t.name}
                </Text>
                <Text fontSize={"xl"} color={brandingColors.secondaryTextColor}>
                  {t.role}
                </Text>
              </Box>
            </GridItem>
          </Tilt>
        ))}
      </Flex>
      <Flex
        columnGap="4rem"
        rowGap={"2rem"}
        justifyContent="center"
        alignItems={"center"}
        p={{ base: "16" }}
      >
        {team1.map((t, i) => (
          <Tilt key={i}>
            <GridItem
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
              borderRadius={"3vw"}
              py={8}
              px={16}
              border={`5px solid ${brandingColors.newHighlightColor}`}
            >
              <Box>
                <Image maxW="180px" borderRadius={"150rem"} src={t.avatar} />
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
      </Flex>
    </Box>
  );
};
export default Team;
