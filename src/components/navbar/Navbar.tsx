import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { brandingColors } from "../../config/brandingColors";
import NeuLink from "../NeuLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      backdropBlur={"50px"}
      fontFamily={`'Russo One', sans-serif`}
      display={{ base: "none", lg: "block" }}
      minH={"10vh"}
    >
      <Grid alignItems={"center"} templateColumns={"1fr 2fr 1fr"} py={2} px={4}>
        <Flex alignItems={"center"}>
          <Image
            ml={{ lg: "20" }}
            mt={{ lg: "6" }}
            maxW="120px"
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png`}
          />
        </Flex>
        <Flex columnGap={"1rem"} justifyContent={"center"}>
          <NeuLink
            label={"Home"}
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
        <Flex columnGap={"1rem"} alignItems="center" justifyContent={"center"}>
          <div className="btn">Buy $AXLE</div>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Navbar;
