import { Box, Text, Input } from "@chakra-ui/react";
import { brandingFonts, brandingColors } from "../../config/brandingColors";

const FlexStake = (props: {
  axle: number;
  axleBalance: number;
  onAxleChange: Function;
  approveStake: Function;
  stakeFlexStaking: Function;
  withdraw: Function;
  hasStaked: boolean;
}) => {
  return (
    <Box
      minW={{ base: "80vw", md: "60vw", lg: "50vw", xl: "40vw", "2xl": "30vw" }}
      mx="auto"
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
          <Text fontSize={"sm"} fontFamily={brandingFonts.subFont}>
            Amount
          </Text>
          <Text fontSize={"sm"} fontFamily={brandingFonts.subFont}>
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
          <Box fontFamily={brandingFonts.subFont}>$AXLE</Box>
          <Input
            mx={4}
            fontWeight={"bold"}
            color={brandingColors.highLightColor}
            onChange={(e) => props.onAxleChange(e.target.value)}
            type={"text"}
            inputMode="decimal"
            borderRadius={"none"}
            fontSize="xl"
            fontFamily={brandingFonts.subFont}
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
          <Box
            onClick={() => props.onAxleChange(props.axleBalance)}
            fontFamily={brandingFonts.subFont}
            cursor={"pointer"}
          >
            MAX
          </Box>
        </Box>

        <Box
          mt={4}
          onClick={() => props.approveStake()}
          textAlign={"center"}
          className="btnc"
          fontFamily={brandingFonts.subFont}
        >
          Enable Stake
        </Box>
        <Box
          mt={4}
          onClick={() => props.stakeFlexStaking()}
          textAlign={"center"}
          width="100%"
          bg={brandingColors.successColor}
          p={4}
          transition="all 100ms ease-in"
          backgroundImage={`linear-gradient(to right top, #77cfa0, #5ba37c, #40795b, #27513b, #102d1e)`}
          borderRadius="xl"
          color={brandingColors.highLightColor}
          cursor="pointer"
          _hover={{
            bg: brandingColors.bgColor,
            boxShadow: `0px 0px 4px ${brandingColors.successColor}`,
            color: brandingColors.successColor,
          }}
          fontFamily={brandingFonts.subFont}
        >
          STAKE
        </Box>
        {props.hasStaked ? (
          <Box
            mt={4}
            textAlign={"center"}
            onClick={() => props.withdraw()}
            bg={brandingColors.dangerColor}
            fontFamily={brandingFonts.subFont}
            p={4}
            transition="all 100ms ease-in"
            borderRadius="xl"
            color={brandingColors.highLightColor}
            cursor="pointer"
            backgroundImage={`linear-gradient(to right top, #f291a2, #eb7788, #e15c6d, #d63f51, #c91835)`}
            _hover={{
              bg: brandingColors.bgColor,
              boxShadow: `0px 0px 4px ${brandingColors.dangerColor}`,
              color: brandingColors.dangerColor,
            }}
          >
            WITHDRAW
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
export default FlexStake;
