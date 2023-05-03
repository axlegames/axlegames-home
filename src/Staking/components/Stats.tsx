import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

const Stats = (props: {
  totalStaked: number;
  pool: string;
  contractAddress: string;
}) => {
  const strConverter = (str: string) => {
    return `${str.substring(0, 8)}....${str.substring(
      str.length - 8,
      str.length
    )}`;
  };

  return (
    <Box
      boxShadow={`0px 0px 120px -30px ${brandingColors.secondaryTwoTextColor}`}
      border={`3px solid ${brandingColors.newHighlightColor}`}
      p={6}
      borderRadius="xl"
      bg={brandingColors.bgColor}
      backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d);`}
      color={brandingColors.secondaryTextColor}
      fontWeight="bold"
      justifyContent={"center"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      rowGap={"1rem"}
      minW={"18vw"}
      minH={"14vh"}
      my={6}
    >
      <Text
        fontFamily={brandingFonts.headingFont}
        lineHeight={"0.8"}
        fontSize={{ base: "md", md: "xl" }}
      >
        TOTAL LOCKED
      </Text>
      <Text
        fontFamily={brandingFonts.headingFont}
        lineHeight={"0.8"}
        color={brandingColors.primaryTextColor}
        fontSize={{ base: "xl", md: "2xl" }}
      >
        {props.pool} AXLE
      </Text>
      <Text
        fontWeight={"bold"}
        lineHeight="1.2"
        fontFamily={brandingFonts.subFont}
        fontSize={"xs"}
      >
        {strConverter(props.contractAddress)}
      </Text>
      <Divider />
      <Flex
        columnGap={"1rem"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Text
          fontFamily={brandingFonts.subFont}
          lineHeight={"0.8"}
          color={brandingColors.secondaryTextColor}
          fontSize={{ base: "xs" }}
        >
          Your contributions
        </Text>
        <Text fontFamily={brandingFonts.subFont} fontWeight={"bold"}>
          |
        </Text>
        <Text
          fontFamily={brandingFonts.subFont}
          lineHeight={"0.8"}
          color={brandingColors.primaryTextColor}
          fontSize={{ base: "md" }}
        >
          {props.totalStaked} AXLE
        </Text>
      </Flex>
    </Box>
  );
};
export default Stats;
