import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";
import Logo from "../assets/logo.png";
import NeuLink from "./NeuLink";

const Navbar = () => {
  return (
    <Box minH={"10vh"} bg={brandingColors.fgColor}>
      <Grid alignItems={"center"} templateColumns={"1fr 2fr 1fr"} py={2} px={4}>
        <Image maxW="120px" src={Logo} />
        <Flex columnGap={"1rem"} justifyContent={"center"}>
          <NeuLink
            label={"About"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            label={"Products"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            label={"Tokenomics"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            label={"Team"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <NeuLink
            label={"Roadmap"}
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
        </Flex>
        <Flex columnGap={"1rem"} justifyContent={"center"}>
          <NeuLink
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
