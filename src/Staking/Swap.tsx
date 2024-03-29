import { Box, Image, Input, Select, Text } from "@chakra-ui/react";

import Logo from "../assets/logo.png";

import { brandingColors, brandingFonts } from "../config/brandingColors";
import { SettingsIcon } from "@chakra-ui/icons";

import SwapIcon from "../assets/stake/swapv.svg";

import Bnb from "../assets/stake/icons/bnb.svg";
import Busd from "../assets/stake/icons/busd.png";
import Cake from "../assets/stake/icons/cake.png";
import UsdT from "../assets/stake/icons/usdt.png";
import Axle from "../assets/icon.png";
import { useState } from "react";

const Swap = () => {
  const images1 = [Axle, Bnb, Cake, Busd, UsdT];
  const swaps1 = ["AXLE", "BNB", "CAKE", "BUSD", "USDT"];
  const [swap1, setSwap1] = useState(0);

  const images2 = [Axle, Bnb, Cake, Busd, UsdT];
  const swaps2 = ["AXLE", "BNB", "CAKE", "BUSD", "USDT"];
  const [swap2, setSwap2] = useState(0);

  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-works-bg.png`}
      backgroundSize="contain"
      fontFamily={"Righteous"}
      minH="100vh"
    >
      <Box
        py={8}
        px={8}
        alignItems={"center"}
        display={"flex"}
        justifyContent={{ base: "center", sm: "space-between" }}
      >
        <Image maxH={"8vh"} src={Logo}></Image>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
        mx="auto"
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Text
            fontFamily={brandingFonts.headingFont}
            lineHeight={"0.8"}
            fontSize={{ base: "3xl", md: "5xl" }}
            color={brandingColors.primaryTextColor}
          >
            AXLE SWAP
          </Text>
        </Box>
        <Box
          boxShadow={`0px 0px 9px ${brandingColors.newHighlightColor}`}
          color={brandingColors.primaryTextColor}
          borderRadius="xl"
          my={8}
          minW={{ base: "100%", md: "auto" }}
          width="50vw"
          mx={4}
          fontFamily={brandingFonts.headingFont}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
            px={4}
            py={2}
          >
            <Text
              fontFamily={brandingFonts.headingFont}
              fontSize={{ base: "xl", md: "3xl" }}
            >
              SWAP
            </Text>
            <Box
              borderRadius={"md"}
              boxShadow={`0px 0px 4px ${brandingColors.newHighlightColor}`}
            >
              <SettingsIcon
                cursor={"pointer"}
                p={2}
                height={{ base: "8", md: "12" }}
                width={{ base: "8", md: "12" }}
              />
            </Box>
          </Box>
          <Box color={brandingColors.secondaryTextColor} p={4}>
            <Box
              alignItems={"center"}
              display={"flex"}
              justifyContent="space-between"
            >
              <Box display={"flex"} alignItems="center" columnGap={"1rem"}>
                <Select
                  fontFamily={brandingFonts.subFont}
                  fontSize={{ base: "xs", md: "md" }}
                  onChange={(e) => setSwap1(Number(e.target.value))}
                >
                  <Box></Box>
                  <option value={0}>AXLE</option>
                  <option value={1}>BNB</option>
                  <option value={2}>CAKE</option>
                  <option value={3}>BUSD</option>
                  <option value={4}>USDT</option>
                </Select>
                <Image w={{ base: 7, md: 8 }} src={images1[swap1]} />
              </Box>
              <Text
                fontFamily={brandingFonts.subFont}
                fontSize={{ base: "xs", md: "md" }}
              >
                Balance : 0 {swaps1[swap1]}
              </Text>
            </Box>
            <Input
              my={2}
              fontWeight={"bold"}
              color={brandingColors.primaryButtonColor}
              placeholder="Value (AXLE)"
              fontSize="lg"
              type={"number"}
              inputMode="decimal"
              fontFamily={brandingFonts.subFont}
              borderRadius={"md"}
              textAlign="right"
              border={`2px solid ${brandingColors.fgColor}`}
              min={0.2}
              max={50}
              _active={{
                outline: "none",
                shadow: "none",
              }}
              _hover={{
                outline: "none",
                shadow: "none",
              }}
              _focus={{
                outline: "none",
                shadow: "none",
              }}
            />
            <Box display={"flex"} justifyContent="center" mt={4} mb={0}>
              <Box bg={brandingColors.fgColor} borderRadius="3xl">
                <Image p={1} src={SwapIcon} width={{ base: 7, md: 8 }} />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <Box display={"flex"} alignItems="center" columnGap={"1rem"}>
                <Select
                  fontSize={{ base: "xs", md: "md" }}
                  fontFamily={brandingFonts.subFont}
                  onChange={(e) => setSwap2(Number(e.target.value))}
                >
                  <option value={0}>AXLE</option>
                  <option value={1}>BNB</option>
                  <option value={2}>CAKE</option>
                  <option value={3}>BUSD</option>
                  <option value={4}>USDT</option>
                </Select>
                <Image w={{ base: 7, md: 8 }} src={images2[swap2]} />
              </Box>
              <Text
                fontFamily={brandingFonts.subFont}
                fontSize={{ base: "xs", md: "md" }}
              >
                Balance : 0 {swaps2[swap2]}
              </Text>
            </Box>
            <Input
              my={2}
              fontWeight={"bold"}
              color={brandingColors.primaryButtonColor}
              placeholder="Value (BNB)"
              fontSize="lg"
              type={"number"}
              inputMode="decimal"
              borderRadius={"md"}
              textAlign="right"
              border={`2px solid ${brandingColors.fgColor}`}
              fontFamily={brandingFonts.subFont}
              min={0.2}
              max={50}
              _active={{
                outline: "none",
                shadow: "none",
              }}
              _hover={{
                outline: "none",
                shadow: "none",
              }}
              _focus={{
                outline: "none",
                shadow: "none",
              }}
            />
            <Box
              mt={8}
              borderRadius="lg"
              border={`2px solid ${brandingColors.newHighlightColor}`}
              p={4}
              display="flex"
              justifyContent={"center"}
              flexDirection="column"
              rowGap={"1rem"}
              fontSize={{ base: "xs", md: "md" }}
            >
              <Box display={"flex"} justifyContent="space-between">
                <Text fontFamily={brandingFonts.headingFont}>
                  Slippage Tolerance
                </Text>
                <Text fontFamily={brandingFonts.headingFont}>5%</Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text fontFamily={brandingFonts.headingFont}>
                  Minimum Received
                </Text>
                <Text fontFamily={brandingFonts.headingFont}>0.000 BNB</Text>
              </Box>
            </Box>
            <Box
              py={6}
              px={2}
              rowGap="1rem"
              width={"100%"}
              display={"flex"}
              textAlign="center"
              alignItems={"center"}
              flexDirection="column"
              justifyContent="center"
            >
              <Box
                fontFamily={brandingFonts.headingFont}
                width={"100%"}
                className="btnc"
              >
                ENABLE AXLE
              </Box>
              <Box
                fontFamily={brandingFonts.headingFont}
                width={"100%"}
                className="btnc"
              >
                STAKE AXLE
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Swap;
