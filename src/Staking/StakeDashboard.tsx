import { Box, Image, Text } from "@chakra-ui/react";

import Logo from "../assets/logo.png";

import { brandingColors } from "../config/brandingColors";

import StakeLogo from "../assets/products/stake.webp";
import SwapLogo from "../assets/products/swap.webp";

interface Props {
  stakePage: Function;
  swapPage: Function;
}

const Dashboard = (props: Props) => {
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_countdown_bg.png`}
      backgroundSize="contain"
      fontFamily={"quicksand"}
      fontWeight="bold"
      minH={"85vh"}
    >
      <Box
        alignItems={"center"}
        mx={24}
        py={6}
        display={"flex"}
        justifyContent="space-between"
      >
        <Image maxH={"8vh"} src={Logo}></Image>
      </Box>
      <Text
        fontFamily={`'Russo One', sans-serif`}
        lineHeight={"0.8"}
        fontSize={"6xl"}
        textAlign="center"
        my={12}
        color={brandingColors.primaryTextColor}
      >
        AXLE PRODUCTS
      </Text>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"row"}
        alignItems="center"
        width={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
        cursor="pointer"
        mx="auto"
        columnGap="4rem"
      >
        <Box
          boxShadow={`0px 0px 125px -20px ${brandingColors.newHighlightColor}`}
          border={`3px solid ${brandingColors.newHighlightColor}`}
          p={6}
          borderRadius="xl"
          bg={brandingColors.bgColor}
          backgroundImage={`linear-gradient(to bottom, #061e37, #072340, #072849, #082d52, #0a325c)`}
          color={brandingColors.secondaryTextColor}
          fontWeight="bold"
          justifyContent={"center"}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          rowGap={"1rem"}
          onClick={() => props.stakePage()}
        >
          <Image width={"72"} src={StakeLogo} />
          <Text
            fontFamily={`'Russo One', sans-serif`}
            lineHeight={"0.8"}
            fontSize={"3xl"}
          >
            AXLE STAKING
          </Text>
        </Box>

        <Box
          boxShadow={`0px 0px 125px -20px ${brandingColors.newHighlightColor}`}
          border={`3px solid ${brandingColors.newHighlightColor}`}
          p={6}
          borderRadius="xl"
          bg={brandingColors.bgColor}
          backgroundImage={`linear-gradient(to bottom, #061e37, #072340, #072849, #082d52, #0a325c)`}
          color={brandingColors.secondaryTextColor}
          fontWeight="bold"
          justifyContent={"center"}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          rowGap={"1rem"}
          cursor="pointer"
          onClick={() => props.swapPage()}
        >
          <Image width={"72"} src={SwapLogo} />
          <Text
            fontFamily={`'Russo One', sans-serif`}
            lineHeight={"0.8"}
            fontSize={"3xl"}
          >
            AXLE SWAP
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
