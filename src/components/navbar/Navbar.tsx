import {
  Box,
  Flex,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
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
      fontFamily={`"Chakra Petch", sans-serif`}
      width="100vw"
      boxShadow={`0px 0px 12px -3px ${brandingColors.primaryButtonColor}`}
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
            label="Roadmap"
            link="roadmap"
            onClick={() => null}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
          <Menu>
            <MenuButton>
              <Text
                fontFamily={`"Chakra Petch", sans-serif`}
                fontWeight={"bold"}
                className="nav-link nav-link-ltr"
              >
                DOCS
              </Text>
            </MenuButton>
            <MenuList
              border={brandingColors.fgColor}
              bg={brandingColors.bgColor}
              p={4}
            >
              <MenuItem
                color={brandingColors.primaryTextColor}
                bg={brandingColors.bgColor}
                _hover={{
                  bg: brandingColors.primaryTextColor,
                  color: brandingColors.bgColor,
                }}
                my={2}
              >
                <a
                  href={`https://axlegames.s3.ap-south-1.amazonaws.com/Axlegames.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%" }}
                >
                  Pitch-Deck
                </a>
              </MenuItem>
              <MenuItem
                my={2}
                _hover={{
                  bg: brandingColors.primaryTextColor,
                  color: brandingColors.bgColor,
                }}
                color={brandingColors.primaryTextColor}
                bg={brandingColors.bgColor}
              >
                <a
                  href={`https://whitepaper.axlegames.io/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%" }}
                >
                  White Paper
                </a>
              </MenuItem>
              <MenuItem
                my={2}
                _hover={{
                  bg: brandingColors.primaryTextColor,
                  color: brandingColors.bgColor,
                }}
                color={brandingColors.primaryTextColor}
                bg={brandingColors.bgColor}
              >
                <a
                  href={`https://axlegames.s3.ap-south-1.amazonaws.com/AxleGames_EconomicsPaper.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ width: "100%" }}
                >
                  Economics Paper
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex columnGap={"1rem"} alignItems="center" justifyContent={"center"}>
          <a
            className="btn"
            href={`https://sale.axlegames.io`}
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY $AXLE
          </a>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Navbar;
