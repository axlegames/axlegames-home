import { Box, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

import Logo from "../assets/logo.png";
import { LinkIcon } from "@chakra-ui/icons";

import StakeLogo from "../assets/products/stake.webp";
import SwapLogo from "../assets/products/swap.webp";
import DaoLogo from "../assets/products/dao.webp";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box position="relative" bg={brandingColors.bgColor} minH="100vh">
      <Box
        bg={brandingColors.bgColor}
        backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_countdown_bg.png`}
        backgroundSize="contain"
        fontFamily={"quicksand"}
        fontWeight="bold"
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
          fontFamily={`Staatliches`}
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

const DashboardCard = (props: any) => {
  return (
    <Box
      boxShadow={`0px 0px 125px -20px ${brandingColors.newHighlightColor}`}
      border={`3px solid ${brandingColors.newHighlightColor}`}
      p={6}
      borderRadius="xl"
      bg={brandingColors.bgColor}
      backgroundImage={`linear-gradient(to bottom, #0e063d, #160d5d, #220f7e, #330fa0, #4609c3)`}
      color={brandingColors.secondaryTextColor}
      fontWeight="bold"
      justifyContent={"center"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      rowGap={"1rem"}
      onClick={() => props.stakePage()}
    >
      <Image width={"52"} src={props.img} />
      <Text fontFamily={`Staatliches`} lineHeight={"0.8"} fontSize={"3xl"}>
        {props.title}
      </Text>
      <Text
        fontFamily={`Staatliches`}
        color={
          props.comingSoon
            ? brandingColors.dangerColor
            : brandingColors.successColor
        }
        lineHeight={"0.2"}
        fontSize={"xs"}
      >
        {props.comingSoon ? `Coming soon` : `Live`}
      </Text>
    </Box>
  );
};
