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
      py={12}
    >
      {split.map((s, i) => (
        <Text
          key={i}
          color={i % 2 === 0 ? "white" : brandingColors.primaryTextColor}
          fontSize={{ base: "2xl", lg: "4xl" }}
          textAlign={"center"}
          fontFamily={brandingFonts.headingFont}
          fontWeight="bold"
          data-aos={`zoom-out`}
        >
          {s.toUpperCase()}
        </Text>
      ))}
    </Box>
  );
};
export default Heading;
