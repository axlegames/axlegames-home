import { Box, Image, Input, Text } from "@chakra-ui/react";

import Logo from "../assets/logo.png";

import { brandingColors } from "../config/brandingColors";
import { SettingsIcon } from "@chakra-ui/icons";
import SwapIcon from "../assets/stake/swapv.svg";

const StakeSwap = () => {
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_countdown_bg.png`}
      backgroundSize="contain"
      fontFamily={"quicksand"}
      fontWeight="bold"
      py={4}
      minH={"100vh"}
      pb={12}
    >
      <Box
        alignItems={"center"}
        mx={24}
        my={2}
        display={"flex"}
        justifyContent="space-between"
      >
        <Image maxH={"8vh"} src={Logo}></Image>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
        width={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
        mx="auto"
      >
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDirection={"column"}
          width={"32vw"}
        >
          <Text
            fontFamily={`'Russo One', sans-serif`}
            lineHeight={"0.8"}
            fontSize={"5xl"}
            color={brandingColors.primaryTextColor}
          >
            AXLE SWAP
          </Text>
        </Box>
        <Box
          boxShadow={`0px 0px 9px ${brandingColors.newHighlightColor}`}
          color={brandingColors.primaryTextColor}
          borderRadius="xl"
          width="30%"
          my={8}
        >
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
            px={4}
            py={2}
          >
            <Text fontFamily={`'Russo One', sans-serif`} fontSize={"3xl"}>
              SWAP
            </Text>
            <Box
              borderRadius={"md"}
              boxShadow={`0px 0px 4px ${brandingColors.newHighlightColor}`}
            >
              <SettingsIcon cursor={"pointer"} p={2} height={"12"} width="12" />
            </Box>
          </Box>
          <Box color={brandingColors.secondaryTextColor} p={4}>
            <Box display={"flex"} justifyContent="space-between">
              <Text>From AXLE </Text>
              <Text>Balance : 0 AXLE</Text>
            </Box>
            <Input
              my={2}
              fontWeight={"bold"}
              color={brandingColors.primaryButtonColor}
              placeholder="Value (AXLE)"
              fontSize="lg"
              type={"number"}
              inputMode="decimal"
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
                <Image p={1} src={SwapIcon} width="12" />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <Text>From BNB</Text>
              <Text>Balance : 0 BNB</Text>
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
            >
              <Box display={"flex"} justifyContent="space-between">
                <Text>Slippage Tolerance</Text>
                <Text>5%</Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between">
                <Text>Minimum Received</Text>
                <Text>0.000 BNB</Text>
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
              <Box width={"100%"} className="btn">
                ENABLE AXLE
              </Box>
              <Box width={"100%"} className="btn">
                STAKE AXLE
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StakeSwap;
