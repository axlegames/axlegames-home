import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import { team } from "../config/data";

import LinkedIn from "../assets/socials/linkedin.webp";
import Email from "../assets/socials/email.webp";

import Slider from "react-slick";

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
    <Box backgroundImage={``} mx={{ md: "auto" }} pt={16}>
      <Heading title="Meet team" />

      <Box display={{ base: "block", md: "none" }}>
        <Slider
          infinite={true}
          arrows={false}
          speed={500}
          slidesToScroll={1}
          slidesPerRow={1}
          slidesToShow={1}
          dots={true}
        >
          {team.map((t, i) =>
            i < 3 ? (
              <TeamCard i={i} bottomAligner={bottomAligner} {...t} />
            ) : null
          )}
        </Slider>

        <Slider
          infinite={true}
          arrows={false}
          speed={500}
          slidesToScroll={1}
          slidesPerRow={1}
          slidesToShow={1}
          dots={true}
        >
          {team.map((t, i) =>
            i > 2 ? (
              <TeamCard i={i} bottomAligner={bottomAligner} {...t} />
            ) : null
          )}
        </Slider>
      </Box>
      <Flex py={{ base: "16" }} flexDirection={"column"}>
        <Grid
          display={{ base: "none", md: "grid" }}
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
            <TeamCard i={i} bottomAligner={bottomAligner} {...t} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

interface Props {
  i: number;
  bottomAligner: Function;
  email: string;
  linkedIn?: string;
  avatar: string;
  name: string;
  role: string;
}

const TeamCard = (props: Props) => {
  return (
    <Box
      key={props.i}
      display={"flex"}
      justifyContent={{
        base: "center",
        md: props.i % 2 === 0 ? "flex-end" : "flex-start",
        lg: props.bottomAligner(props.i),
      }}
      data-aos={props.i % 2 === 0 ? `zoom-in-down` : `zoom-in-up`}
    >
      <GridItem
        key={props.i}
        maxW={"72"}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems="center"
        borderRadius={"xl"}
        borderTopRadius="xl"
        p={4}
      >
        <Box>
          <Flex my={4} p={2} borderRadius="xl">
            {props.i < 3 ? (
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                href={props.linkedIn}
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
              href={`mailto:${props.email}`}
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
              maxW={{ base: "180px", lg: "240px" }}
              src={props.avatar}
              borderTopRadius={`0px 0px 4px ${brandingColors.newHighlightColor}`}
              borderRadius="150rem"
              border={`3px solid ${brandingColors.newHighlightColor}`}
            />
          </Tilt>
        </Box>
        <Box textAlign={"center"} py={4}>
          <Text
            fontSize={"xl"}
            fontFamily={`Staatliches`}
            fontWeight="bold"
            color={brandingColors.primaryTextColor}
          >
            {props.name}
          </Text>
          <Text
            fontSize={{ base: "md" }}
            fontWeight="bold"
            fontFamily={`Shantell Sans`}
            color={brandingColors.secondaryTextColor}
          >
            {props.role}
          </Text>
        </Box>
      </GridItem>
    </Box>
  );
};

export default Team;
