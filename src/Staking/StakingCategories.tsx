import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { brandingColors, brandingFonts } from "../config/brandingColors";

import Logo from "../assets/logo.png";
import StakeLogo from "../assets/products/stake.webp";
import DashboardCard from "./components/DashBoardCard";

const StakingCategories = () => {
  const navigate = useNavigate();
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-works-bg.png`}
      backgroundSize="contain"
      py={6}
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
        AXLE FARMING
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
          title="STAKE AXLE, GET AXLE"
          img={StakeLogo}
          stakePage={() => navigate("/staking/axle-stake")}
          comingSoon={false}
        />
        <DashboardCard
          title="STAKE AXLE, GET BNB"
          img={StakeLogo}
          //   stakePage={() => navigate("/staking/bnb-stake")}
          comingSoon={true}
        />
      </Box>
    </Box>
  );
};

export default StakingCategories;
