import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

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
      <Flex pos={"relative"}>
        <Image width={props.i === 0 ? "128px" : "72px"} src={props.imgSrc} />
      </Flex>
      <Image width={"52"} src={props.img} />
      <Text
        fontFamily={brandingFonts.subFont}
        lineHeight={"0.8"}
        fontSize={"3xl"}
      >
        {props.title}
      </Text>
      <Text
        fontFamily={brandingFonts.headingFont}
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

export default DashboardCard;
