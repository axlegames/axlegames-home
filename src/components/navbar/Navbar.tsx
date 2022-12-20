import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import { brandingColors } from "../../config/brandingColors";
import NeuButton from "../NeuButton";
import NeuLink from "../NeuLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      minH={"10vh"}
      bg={brandingColors.bgColor}
    >
      <Grid alignItems={"center"} templateColumns={"1fr 2fr 1fr"} py={2} px={4}>
        <Image ml={{ lg: "20" }} mt={{ lg: "6" }} maxW="120px" src={Logo} />
        <Flex columnGap={"1rem"} justifyContent={"center"}>
          <NeuLink
            label={"About"}
            link="about"
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            link="products"
            label={"Products"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            link="token"
            label={"Tokenomics"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            link="team"
            label={"Team"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            label="Roadmap"
            link="roadmap"
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
        </Flex>
        <Flex columnGap={"1rem"} justifyContent={"center"}>
          <NeuButton
            label={"Buy $AXLE"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export default Navbar;
