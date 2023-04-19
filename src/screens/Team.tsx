import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors, brandingFonts } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import { team } from "../config/data";

import LinkedIn from "../assets/socials/linkedin.webp";
import Email from "../assets/socials/email.webp";

import Slider from "react-slick";
import { useRef } from "react";

const Team = () => {
  const slider = useRef() as any;
  const PrevArrow = () => (
    <button
      onClick={() => slider.current.slickPrev()}
      className="slide_button_c slide-arrow_c prev-arrow_c"
    ></button>
  );

  const NextArrow = () => (
    <button
      onClick={() => slider.current.slickNext()}
      className="slide_button_c slide-arrow_c next-arrow_c"
    ></button>
  );
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
    <Box py={{ base: "12" }} mx={{ md: "auto" }}>
      <Heading isTeam={true} title="BUILT BY DEVs AT MICROSOFT" />

      <Box px={16} display={{ base: "block", md: "none" }}>
        <Slider
          ref={slider}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          arrows={true}
          speed={500}
          slidesToScroll={1}
          slidesPerRow={1}
          slidesToShow={1}
          dots={true}
          infinite={true}
        >
          {team.map((t, i) => (
            <TeamCard key={i} i={i} bottomAligner={bottomAligner} {...t} />
          ))}
        </Slider>
      </Box>
      <Flex
        display={{ base: "none", md: "grid" }}
        py={{ base: "16" }}
        flexDirection={"column"}
      >
        <Grid
          mx="auto"
          width={{
            base: "100%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            "2xl": "40%",
          }}
          columnGap="3rem"
          rowGap="3rem"
          justifyContent="center"
          alignItems={"center"}
          gridTemplateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
        >
          {team.map((t, i) => (
            <TeamCard key={i} i={i} bottomAligner={bottomAligner} {...t} />
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
      width="100%"
    >
      <Tilt>
        <GridItem
          boxShadow={`0px 0px 96px -72px ${brandingColors.secondaryTwoTextColor}`}
          cursor={"pointer"}
          key={props.i}
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
          borderRadius={"3xl"}
          bg={brandingColors.newHighlightColor}
          backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
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
            <Image
              boxShadow={`0px 2px 2px ${brandingColors.newHighlightColor}`}
              maxW={{ base: "180px", lg: "240px" }}
              src={props.avatar}
              borderTopRadius={`0px 0px 4px ${brandingColors.newHighlightColor}`}
              borderRadius="150rem"
              border={`4px solid ${brandingColors.newHighlightColor}`}
            />
          </Box>
          <Box textAlign={"center"} py={4}>
            <Text
              fontSize={"2xl"}
              fontFamily={brandingFonts.headingFont}
              fontWeight="bold"
              color={brandingColors.primaryTextColor}
            >
              {props.name}
            </Text>
            <Text
              fontSize={{ base: "md" }}
              fontWeight="bold"
              fontFamily={brandingFonts.subFont}
              color={brandingColors.secondaryTextColor}
            >
              {props.role}
            </Text>
            <Divider m={2} />
          </Box>
        </GridItem>
      </Tilt>
    </Box>
  );
};

export default Team;
