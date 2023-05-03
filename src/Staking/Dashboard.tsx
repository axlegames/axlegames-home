import { Box, Image, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../config/brandingColors";

import { LinkIcon } from "@chakra-ui/icons";

import Logo from "../assets/logo.png";
import DaoLogo from "../assets/products/dao.webp";
import SwapLogo from "../assets/products/swap.webp";
import StakeLogo from "../assets/products/stake.webp";

import DashboardCard from "./components/DashBoardCard";

import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" bg={brandingColors.bgColor} minH="100vh">
      <Box
        bg={brandingColors.bgColor}
        backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-bg.png`}
        backgroundSize="contain"
        fontWeight="bold"
        minH="100vh"
      >
        <Box
          alignItems={"center"}
          mx={24}
          py={6}
          display={"flex"}
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <Image maxH={"8vh"} src={Logo}></Image>
        </Box>
        <Text
          fontFamily={brandingFonts.headingFont}
          lineHeight={"0.8"}
          fontSize={{ base: "3xl", md: "5xl" }}
          textAlign="center"
          my={12}
          color={brandingColors.primaryTextColor}
        >
          AXLE PRODUCTS
        </Text>
        <Box
          display={"flex"}
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          width={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
          cursor="pointer"
          mx="auto"
          columnGap="4rem"
          rowGap="1rem"
        >
          <DashboardCard
            title="AXLE STAKING"
            img={StakeLogo}
            stakePage={() => navigate("/staking")}
            comingSoon={false}
          />
          <DashboardCard
            title="AXLE SWAP"
            img={SwapLogo}
            stakePage={() => {}}
            comingSoon={true}
          />
          <DashboardCard
            comingSoon={true}
            title="AXLE DAO"
            img={DaoLogo}
            stakePage={() => {}}
          />
        </Box>
      </Box>
      <Box
        position={"fixed"}
        zIndex={300}
        bottom="10%"
        right={"4%"}
        fontWeight="bold"
        cursor={"pointer"}
        display={{ base: "none", lg: "flex" }}
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
    </Box>
  );
};

export default Dashboard;
