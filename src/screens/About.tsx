import { Box, Flex, Image } from "@chakra-ui/react";
import Team1 from "../assets/about/team1.png";
import Team2 from "../assets/about/team2.png";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";

const About = () => {
  return (
    <Box
      minH="100vh"
      maxH="100vh"
      minW="100vw"
      maxW="100vw"
      pt={12}
      bg={brandingColors.bgColor}
    >
      <Heading title="About Us" />
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={"8rem"}
        p={12}
        rowGap="8rem"
        width={"85%"}
        mx="auto"
      >
        <Box
          borderRadius={"xl"}
          border={`12px solid ${brandingColors.newHighlightColor}`}
        >
          <Image borderRadius={"md"} src={Team1} />
        </Box>
        <Box
          borderRadius={"xl"}
          border={`12px solid ${brandingColors.newHighlightColor}`}
        >
          <Image borderRadius={"md"} src={Team2} />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
