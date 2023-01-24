import { Box, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

import StakeIcon from "../assets/stake/stake.svg";
import DashboardIcon from "../assets/stake/dashboard.svg";
import SwapIcon from "../assets/stake/swap.svg";

import Swap from "./StakeSwap";
import Stake from "./Stake";
import Dashboard from "./StakeDashboard";

import { useState } from "react";
import { LinkIcon } from "@chakra-ui/icons";

const screens = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
  },
  {
    icon: StakeIcon,
    text: "Staking",
  },
  {
    icon: SwapIcon,
    text: "Swap",
  },
];

const StakeLayout = () => {
  const pages = [
    <Dashboard
      stakePage={() => setCurrentPage(1)}
      swapPage={() => setCurrentPage(2)}
    />,
    <Stake />,
    <Swap />,
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const GetPage = () => pages[currentPage];

  return (
    <Box>
      <GetPage />
      <Box
        position={"fixed"}
        zIndex={300}
        bottom="16%"
        left={"86%"}
        fontWeight="bold"
        cursor={"pointer"}
      >
        <Text
          py={2}
          px={4}
          borderRadius="md"
          bg={brandingColors.newHighlightColor}
          color={brandingColors.primaryTextColor}
          fontSize="xl"
          _hover={{
            textDecoration: "underline",
          }}
        >
          <LinkIcon mr={2} />
          How To Stake?
        </Text>
      </Box>
      <Box
        width={"100%"}
        position={"fixed"}
        zIndex={300}
        bottom="2%"
        fontWeight="bold"
      >
        <Box display={"flex"}>
          <Box
            mx="auto"
            display="flex"
            columnGap="1rem"
            justifyContent="space-between"
            fontFamily={`'Russo One', sans-serif`}
            color={brandingColors.primaryTextColor}
            p={4}
            borderRadius="xl"
          >
            {screens.map((screen, index) => (
              <MenuIcon
                onClick={() => {
                  setCurrentPage(index);
                }}
                isActive={index === currentPage}
                icon={screen.icon}
                text={screen.text}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StakeLayout;

interface MenuIconInterface {
  text: string;
  icon: any;
  isActive: boolean;
  onClick: Function;
}

const MenuIcon = (props: MenuIconInterface) => {
  return (
    <Box
      onClick={() => props.onClick()}
      cursor={"pointer"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
      bg={
        props.isActive
          ? brandingColors.newHighlightColor
          : brandingColors.fgColor
      }
      boxShadow="2xl"
      py={2}
      px={4}
      borderRadius="xl"
    >
      <Image w={12} src={props.icon} />
      <Text fontSize={"xx-small"}>{props.text}</Text>
    </Box>
  );
};
