import { Box, Button } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../../config/brandingColors";

const SideBarLink = (props: any) => {
  const normalEffect = `3px 3px 9px ${brandingColors.newHighlightColor}, -3px -3px 9px ${brandingColors.bgColor}`;
  const pushedEffect = `inset 9px 9px 18px #05172b, inset -9px -9px 18px #072543`;
  return (
    <Box width={"100%"}>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: "100%" }}
      >
        <Button
          textAlign={"left"}
          boxShadow={normalEffect}
          width={"100%"}
          bg={brandingColors.bgColor}
          fontFamily={brandingFonts.headingFont}
          size={{ base: "lg" }}
          color={brandingColors.secondaryTextColor}
          onClick={() => props.onClick()}
          _hover={{
            boxShadow: pushedEffect,
            transform: `scale(0.95)`,
            transition: "200ms all ",
          }}
          _active={{
            boxShadow: pushedEffect,
            transform: `scale(0.95)`,
            transition: "200ms all ",
          }}
        >
          {props.title}
        </Button>
      </a>
    </Box>
  );
};

export default SideBarLink;
