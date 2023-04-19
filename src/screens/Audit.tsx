import { Box, Container, Image } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";

import SP from "../assets/sp.png";
import PS from "../assets/ps.png";
import Marketing from "../assets/market.png";

const Audit = () => {
  const img = [SP, PS];
  return (
    <Box py={12} bg={brandingColors.bgColor} zIndex={800}>
      <Heading title="Audited and KYC'ED By" />
      <Container>
        <Box
          columnGap={"3rem"}
          flexDirection={{ base: "column", lg: "row" }}
          display={"flex"}
          justifyContent="center"
        >
          {img.map((s, i) => (
            <Image maxW="420px" borderRadius="xl" className="logos" src={s} />
          ))}
        </Box>
      </Container>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems={"center"}
        py={12}
      >
        <Heading isTeam={true} title="OUR MARKETING PARTNERS" />
        <Box borderRadius={"md"} bg={brandingColors.highLightColor}>
          <Image
            borderRadius={"xl"}
            maxW={{ base: "256px", md: "512px", lg: "786px" }}
            src={Marketing}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Audit;
