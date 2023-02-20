import { Box, Divider, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

interface Props {
  title: string;
}
const Heading = (props: Props) => {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
    >
      <Text
        color={brandingColors.secondaryTextColor}
        fontSize={{ base: "3xl", lg: "5xl" }}
        textAlign={"center"}
        fontFamily={`"Chakra Petch", sans-serif`}
        fontWeight="bold"
        data-aos={`zoom-out`}
      >
        {props.title}
      </Text>
      <Box
        maxW="240px"
        minW="240px"
        display={"flex"}
        justifyContent="center"
        position={"relative"}
        my={{ base: "2" }}
      >
        <Divider
          width={"60%"}
          position={"absolute"}
          bg="Highlight"
          borderRadius="3xl"
        />
        <Divider borderBottom={"1px solid white"} opacity="0.6" />
      </Box>
    </Box>
  );
};
export default Heading;
