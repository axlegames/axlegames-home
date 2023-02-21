import { Box, Text } from "@chakra-ui/react";
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
    </Box>
  );
};
export default Heading;
