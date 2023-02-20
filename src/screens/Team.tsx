import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import { team } from "../config/data";

import LinkedIn from "../assets/socials/linkedin.webp";
import Email from "../assets/socials/email.webp";

const Team = () => {
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
      pt={16}
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
          {team.map((t, i) => (
            <Box
              key={i}
              display={"flex"}
              justifyContent={{
                base: "center",
                md: i % 2 === 0 ? "flex-end" : "flex-start",
                lg: bottomAligner(i),
              }}
              data-aos={i % 2 === 0 ? `zoom-in-down` : `zoom-in-up`}
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
                  <Flex my={4} p={2} borderRadius="xl">
                    {i < 3 ? (
                      <a
                        target={"_blank"}
                        rel="noopener noreferrer"
                        href={t.linkedIn}
                      >
                        <Image
                          width={"12"}
                          _hover={{
                            transform: "scale(1.2)",
                            transition: "all 200ms ease-in",
                            cursor: "pointer",
                          }}
                          src={LinkedIn}
                        />
                      </a>
                    ) : null}
                    <a
                      target={"_blank"}
                      rel="noopener noreferrer"
                      href={`mailto:${t.email}`}
                    >
                      <Image
                        width={"12"}
                        _hover={{
                          transform: "scale(1.2)",
                          transition: "all 200ms ease-in",
                          cursor: "pointer",
                        }}
                        src={Email}
                      />
                    </a>
                  </Flex>
                </Box>
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
                  <Text
                    fontFamily={`"Chakra Petch", sans-serif`}
                    fontSize={"xl"}
                    fontWeight="bold"
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
            </Box>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
export default Team;
