import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";

const Team = () => {
  const team1 = [
    {
      name: "Praneeth Nagu",
      avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/praneeth.webp`,
      role: "Founder / Marketing Lead",
      linkedIn: "linkedin",
    },
    {
      name: "D. C. R",
      avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/chakri.webp`,
      role: "Co-Founder / Project Lead",
      linkedIn: "linkedin",
    },
    {
      name: "Akash Madduru",
      avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/akash.webp`,
      role: "Product / Dev Lead",
      linkedIn: "",
    },

    {
      name: "Roney",
      avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/roney.webp`,
      role: "Product / Design Lead",
      linkedIn: "linkedin",
    },
    {
      name: "Prashanth",
      avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/prashanth.webp`,
      role: "Blockchain Developer",
      linkedIn: "linkedin",
    },
    {
      name: "Lucas",
      avatar: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/team/lucas.webp`,
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
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_bg.png`}
      width={{ base: "100%", md: "80%" }}
      mx={{ md: "auto" }}
    >
      <Heading title="Meet the team" />
      <Flex py={{ base: "16" }} flexDirection={"column"}>
        <Grid
          rowGap={"3rem"}
          columnGap="0rem"
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
              <GridItem
                key={i}
                maxW={"72"}
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                alignItems="center"
                borderRadius={"xl"}
                borderTopRadius="xl"
                p={8}
              >
                <Box>
                  <Tilt>
                    <Image
                      boxShadow={`0px 2px 2px ${brandingColors.newHighlightColor}`}
                      maxW="260px"
                      src={t.avatar}
                      borderTopRadius={`0px 0px 4px ${brandingColors.newHighlightColor}`}
                      borderRadius="150rem"
                      border={`3px solid ${brandingColors.newHighlightColor}`}
                    />
                  </Tilt>
                </Box>
                <Box textAlign={"center"} py={4}>
                  <Text fontSize={"xl"} color={brandingColors.primaryTextColor}>
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
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
export default Team;
