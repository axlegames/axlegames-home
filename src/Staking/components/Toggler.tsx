import { Box, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

const Toggler = (props: {
  togglePage: boolean;
  setLocked: Function;
  setFlex: Function;
}) => {
  return (
    <Box
      my={6}
      minW={"14vw"}
      display={"flex"}
      justifyContent="space-between"
      fontSize={{ base: "sm", md: "xl" }}
      columnGap=".5rem"
      border={`3px solid ${brandingColors.newHighlightColor}`}
      p={1}
      borderRadius={"8vw"}
    >
      <Box
        px={4}
        py={2}
        width={"100%"}
        color={brandingColors.secondaryTextColor}
        boxShadow={
          props.togglePage
            ? `0px 0px 8px -2px ${brandingColors.secondaryTwoTextColor}`
            : "none"
        }
        bg={
          props.togglePage
            ? brandingColors.primaryButtonColor
            : brandingColors.bgColor
        }
        backgroundImage={
          props.togglePage
            ? `linear-gradient(to left, #ad78f7, #8e6ae7, #6e5cd6, #4a4fc6, #1442b5)`
            : "none"
        }
        borderRadius={"8vw"}
        textAlign="center"
        onClick={() => props.setFlex()}
        cursor="pointer"
      >
        <Box display={"flex"} alignItems={"center"} flexDirection="column">
          <Text fontFamily={brandingFonts.subFont} fontWeight="bold">
            FLEXIBLE
          </Text>
        </Box>
      </Box>
      <Box
        cursor="pointer"
        color={brandingColors.secondaryTextColor}
        boxShadow={
          !props.togglePage
            ? `0px 0px 8px -2px ${brandingColors.secondaryTwoTextColor}`
            : "none"
        }
        bg={
          !props.togglePage
            ? brandingColors.primaryButtonColor
            : brandingColors.bgColor
        }
        backgroundImage={
          !props.togglePage
            ? `linear-gradient(to right, #ad78f7, #8e6ae7, #6e5cd6, #4a4fc6, #1442b5)`
            : "none"
        }
        borderRadius={"8vw"}
        px={4}
        py={2}
        width={"100%"}
        textAlign="center"
        onClick={() => props.setLocked()}
      >
        <Text fontFamily={brandingFonts.subFont}>LOCKED</Text>
      </Box>
    </Box>
  );
};

export default Toggler;
