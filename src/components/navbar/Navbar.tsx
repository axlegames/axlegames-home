import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { brandingColors } from "../../config/brandingColors";
import NeuLink from "../NeuLink";
import "./Navbar.css";
import NeuPageLink from "./NeuPageLink";

const Navbar = () => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      minH={"10vh"}
      fontWeight={"bold"}
      fontFamily={`'Russo One', sans-serif`}
    >
      <Grid alignItems={"center"} templateColumns={"1fr 2fr 1fr"} py={2} px={4}>
        <Flex alignItems={"center"}>
          <Image
            pt={2}
            ml={{ lg: "20" }}
            maxW="140px"
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
          <NeuPageLink label="About" link="/about" />
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
