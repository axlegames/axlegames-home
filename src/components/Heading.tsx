import { Box, Text } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../config/brandingColors";

interface Props {
  isTeam?: boolean;
  isSub?: boolean;
  subTitle?: string;
  title: string;
}
const Heading = (props: Props) => {
  let split = props.title.split(" ");
  const color = (x: number, isTeam: boolean) => {
    if (isTeam) {
      return x % 2 === 0 && x !== 0
        ? brandingColors.primaryMiscColor
        : brandingColors.highLightColor;
    }
    return x % 2 === 0
      ? brandingColors.primaryMiscColor
      : brandingColors.highLightColor;
  };
  const team = props.isTeam ?? false;

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
          color={color(i, team)}
          fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
          textAlign={"center"}
          fontFamily={brandingFonts.headingFont}
          fontWeight="bold"
          data-aos={`zoom-out`}
        >
          {s.toUpperCase()}
        </Text>
      ))}
      <Text
        fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}
        textAlign={"center"}
        fontFamily={brandingFonts.headingFont}
        fontWeight="bold"
        data-aos={`zoom-out`}
        color={brandingColors.primaryTextColor}
      >
        {" "}
        {props.subTitle}
      </Text>
    </Box>
  );
};
export default Heading;
