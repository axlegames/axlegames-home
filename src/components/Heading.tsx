import { Box, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../config/brandingColors";

interface Props {
  title: string;
}
const Heading = (props: Props) => {
  let split = props.title.split(" ");

  return (
    <Box
      alignItems={"center"}
      columnGap="1rem"
      display={"flex"}
      justifyContent={"center"}
    >
      {split.map((s, i) => (
        <Text
          key={i}
          color={i % 2 === 0 ? "white" : brandingColors.primaryTextColor}
          fontSize={{ base: "3xl", lg: "5xl" }}
          textAlign={"center"}
          fontFamily={brandingFonts.headingFont}
          fontWeight="bold"
          data-aos={`zoom-out`}
        >
          {s}
        </Text>
      ))}
    </Box>
  );
};
export default Heading;
