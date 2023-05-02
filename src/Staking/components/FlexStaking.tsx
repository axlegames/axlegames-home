import { Box, Text, Input } from "@chakra-ui/react";
import { brandingFonts, brandingColors } from "../../config/brandingColors";

const FlexStake = (props: {
  axle: number;
  axleBalance: number;
  onAxleChange: Function;
  approveStake: Function;
  stakeFlexStaking: Function;
}) => {
  return (
    <Box
      minW={{ base: "80vw", md: "42vw" }}
      mx="auto"
      width={"80%"}
      borderRadius="3xl"
      borderLeft={`2px solid ${brandingColors.newHighlightColor}`}
      borderRight={`2px solid ${brandingColors.newHighlightColor}`}
      borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
      color={brandingColors.primaryTextColor}
      boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
    >
      <Box
        textAlign={"center"}
        display="flex"
        justifyContent={"space-between"}
        border={`2px solid ${brandingColors.newHighlightColor}`}
        borderTopRadius="3xl"
      >
        <Text
          borderTopLeftRadius={"3xl"}
          boxShadow="xl"
          width={"100%"}
          fontSize={{ base: "md", md: "2xl" }}
          color={brandingColors.secondaryTextColor}
          cursor="pointer"
          py={2}
          fontFamily={brandingFonts.headingFont}
        >
          STAKE AXLE
        </Text>
      </Box>
      <Box borderRadius={"3xl"} p={6}>
        <Box
          color={brandingColors.secondaryTextColor}
          display={"flex"}
          px={2}
          py={2}
          justifyContent="space-between"
          fontSize={{ base: "xx-small", md: "sm" }}
        >
          <Text fontFamily={brandingFonts.headingFont}>Amount</Text>
          <Text fontFamily={brandingFonts.headingFont}>
            ~My Balance {props.axleBalance} AXLE
          </Text>
        </Box>
        <Box
          height={"100%"}
          width="100%"
          px={4}
          alignItems={"center"}
          display={"flex"}
          border={`3px solid ${brandingColors.fgColor}`}
          borderRadius="xl"
          fontSize={{ base: "xs", md: "md" }}
        >
          <Box fontFamily={brandingFonts.headingFont}>$AXLE</Box>
          <Input
            mx={4}
            fontWeight={"bold"}
            color={brandingColors.highLightColor}
            onChange={(e) => props.onAxleChange(e)}
            type={"text"}
            inputMode="decimal"
            borderRadius={"none"}
            fontSize="xl"
            fontFamily={brandingFonts.headingFont}
            textAlign="right"
            value={props.axle}
            borderLeft={`2px solid ${brandingColors.fgColor}`}
            borderRight={`2px solid ${brandingColors.fgColor}`}
            min={0.2}
            width="100%"
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
          ></Input>
          <Box fontFamily={brandingFonts.headingFont} cursor={"pointer"}>
            MAX
          </Box>
        </Box>
        <Box
          mt={4}
          onClick={() => props.approveStake()}
          textAlign={"center"}
          className="btnc"
          fontFamily={brandingFonts.headingFont}
        >
          Enable Stake
        </Box>
        <Box
          mt={4}
          onClick={() => props.stakeFlexStaking()}
          textAlign={"center"}
          className="btnc"
          fontFamily={brandingFonts.headingFont}
        >
          Stake
        </Box>
      </Box>
    </Box>
  );
};
export default FlexStake;
