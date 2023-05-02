import { Box, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

const ConnectModal = (props: { connectWeb3Wallet: Function }) => {
  return (
    <Box position={"fixed"} top="40%" bottom={"40%"} my={"auto"}>
      <Box
        border={`3px solid ${brandingColors.newHighlightColor}`}
        backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d);`}
        borderRadius="xl"
        p={12}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Text
          my={4}
          fontSize={{ base: "sm", md: "xl" }}
          textAlign="center"
          color={brandingColors.primaryTextColor}
          fontFamily={brandingFonts.subFont}
        >
          Connect your wallet to stake $AXLE tokens!
        </Text>
        <Box
          onClick={() => props.connectWeb3Wallet()}
          style={{ textAlign: "center" }}
          className="btnc"
          fontFamily={brandingFonts.headingFont}
        >
          Connect Wallet
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectModal;
