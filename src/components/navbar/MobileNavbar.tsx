import {
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDashboard,
} from "react-icons/ai/index";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import SideBarCard from "./components/SideBarCard";
import SideBarButton from "./components/SideBarButton";
import { MdStore } from "react-icons/md/index";
import {
  HiHome,
  HiOutlineViewList,
  HiDocument,
  HiUser,
  HiUsers,
  HiCreditCard,
} from "react-icons/hi/index";

import { brandingColors } from "../../config/brandingColors";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      width={"100%"}
      display={{ base: "flex", lg: "none" }}
      flexDirection="column"
      boxShadow={`0px 2px 3px ${brandingColors.fgColor}`}
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
        bg={brandingColors.bgColor}
      >
        <Flex alignItems={"center"} columnGap=".5rem">
          <Image maxH={"6vh"} src={Logo}></Image>
        </Flex>
        <Box
          onClick={() => setOpen(!open)}
          _hover={{
            transform: "scale(1.05)",
            transition: "200ms all ease-in",
          }}
        >
          {open ? (
            <AiOutlineClose
              style={{
                transform: "scale(1.05)",
                transition: "100ms all ease-in",
              }}
              color={brandingColors.highLightColor}
              size={32}
            />
          ) : (
            <AiOutlineMenu
              style={{
                transform: "scale(1.05)",
                transition: "100ms all ease-in",
              }}
              color={brandingColors.highLightColor}
              size={32}
            />
          )}
        </Box>
      </Box>

      <Box height={open ? "100vh" : "0"} position={"relative"}>
        <Box
          zIndex={100}
          transition={"all ease 500ms"}
          opacity={open ? 1 : 0}
          fontFamily={"quicksand"}
          fontWeight="bold"
          color={brandingColors.highLightColor}
          display={open ? "block" : "none"}
          width="100%"
          boxShadow="lg"
          position={"absolute"}
        >
          <SideBarCard>
            <SideBarButton
              link="about"
              onClick={() => null}
              title={"About"}
              icon={<HiHome size={32} />}
            />
            <SideBarButton
              link="products"
              onClick={() => null}
              title={"Products"}
              icon={<AiOutlineDashboard size={32} />}
            />
            <SideBarButton
              link="token"
              onClick={() => null}
              title={"Tokenomics"}
              icon={<HiCreditCard size={32} />}
            />
            <SideBarButton
              link="team"
              onClick={() => null}
              title={"Team"}
              icon={<HiUsers size={32} />}
            />
            <SideBarButton
              link="roadmap"
              onClick={() => null}
              title={"RoadMap"}
              icon={<HiUser size={32} />}
            />
            <SideBarButton
              onClick={() => null}
              title={"Buy $AXLE"}
              icon={<MdStore size={32} />}
            />

            <Accordion width={"100%"} allowToggle defaultIndex={0}>
              <AccordionItem border={"none"} outline="none" width={"100%"}>
                <AccordionButton
                  borderRadius={"md"}
                  width={"100%"}
                  justifyContent="flex-start"
                  _hover={{
                    color: brandingColors.primaryTextColor,
                    bg: brandingColors.bgColor,
                  }}
                  position="relative"
                  fontSize={"sm"}
                  fontWeight="bold"
                >
                  <Flex
                    alignItems={"center"}
                    justifyContent="space-between"
                    width={"100%"}
                    columnGap={"1rem"}
                  >
                    <Flex alignItems={"center"} columnGap={"1rem"}>
                      <Box>
                        <HiOutlineViewList size={32} />
                      </Box>
                      <Text>{`Docs`}</Text>
                    </Flex>
                    <AccordionIcon />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <Flex direction={"column"} rowGap=".25rem">
                    <a
                      href="https://axlegames.s3.ap-south-1.amazonaws.com/Axlegames.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {" "}
                      <SideBarButton
                        title={"Pitch-Deck"}
                        icon={<HiDocument size={32} />}
                      />
                    </a>
                    <a
                      href="https://axlegames.s3.ap-south-1.amazonaws.com/AxleGames_EconomicsPaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ width: "100%" }}
                    >
                      {" "}
                      <SideBarButton
                        title={"Economics-Paper"}
                        icon={<HiDocument size={32} />}
                      />
                    </a>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </SideBarCard>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileNavbar;
