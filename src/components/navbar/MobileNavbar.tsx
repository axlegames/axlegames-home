import { Box, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";

import SideBarLink from "./components/SideBarLink";
import SideBarCard from "./components/SideBarCard";
import SideBarButton from "./components/SideBarButton";

import { brandingColors } from "../../config/brandingColors";
import { HamburgerIcon, CloseIcon, SunIcon } from "@chakra-ui/icons";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }

  return (
    <Box
      bg={brandingColors.bgColor}
      width={"100vw"}
      height={open ? "100vh" : "100%"}
      display={{ base: "flex", lg: "none" }}
      flexDirection="column"
      boxShadow={`0px 0px 12px -3px ${brandingColors.newHighlightColor}`}
    >
      <Box
        display={"flex"}
        color={brandingColors.highLightColor}
        fontWeight="bold"
        fontSize={"3xl"}
        width="100%"
        justifyContent={"space-between"}
        px={{ base: "8" }}
        py={{ base: "4" }}
        alignItems={"center"}
        position="relative"
      >
        <Flex alignItems={"center"} columnGap=".5rem">
          <Image
            maxH={"6vh"}
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png`}
          ></Image>
        </Flex>
        <Box
          onClick={() => setOpen(!open)}
          _hover={{
            transform: "scale(1.05)",
            transition: "200ms all ease-in",
          }}
        >
          {open ? (
            <CloseIcon
              style={{
                transform: "scale(1.05)",
                transition: "100ms all ease-in",
              }}
              color={brandingColors.highLightColor}
            />
          ) : (
            <HamburgerIcon
              style={{
                transform: "scale(1.05)",
                transition: "100ms all ease-in",
              }}
              color={brandingColors.highLightColor}
            />
          )}
        </Box>
      </Box>

      <Box position={"relative"}>
        <Box
          zIndex={100000000}
          transition={"all ease 500ms"}
          opacity={open ? 1 : 0}
          fontFamily={"quicksand"}
          fontWeight="bold"
          color={brandingColors.highLightColor}
          display={open ? "block" : "none"}
          width="100%"
          height={"100vh"}
          boxShadow="lg"
          position={"fixed"}
        >
          <SideBarCard>
            <SideBarButton
              link="about"
              onClick={() => toggle()}
              title={"Home"}
              icon={<SunIcon />}
            />
            <SideBarButton
              link="products"
              onClick={() => toggle()}
              title={"Products"}
              icon={<SunIcon />}
            />
            <SideBarButton
              link="token"
              onClick={() => toggle()}
              title={"Tokenomics"}
              icon={<SunIcon />}
            />
            <SideBarButton
              link="team"
              onClick={() => toggle()}
              title={"Team"}
              icon={<SunIcon />}
            />
            <SideBarButton
              link="roadmap"
              onClick={() => toggle()}
              title={"RoadMap"}
              icon={<SunIcon />}
            />
            <SideBarLink
              link="https://axlegames.s3.ap-south-1.amazonaws.com/Axlegames.pdf"
              title={"Pitch-Deck"}
              icon={<SunIcon />}
            />
            <SideBarLink
              link="https://whitepaper.axlegames.io/"
              title={"White Paper"}
              icon={<SunIcon />}
            />
            <SideBarLink
              link="https://axlegames.s3.ap-south-1.amazonaws.com/AxleGames_EconomicsPaper.pdf"
              title={"Economics Paper"}
              icon={<SunIcon />}
            />
          </SideBarCard>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNavbar;
