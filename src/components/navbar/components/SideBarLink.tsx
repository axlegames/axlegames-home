import { Box, Button } from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";

const SideBarLink = (props: any) => {
  const normalEffect = `4px 4px 8px ${brandingColors.bgColor}, -2px -2px 4px ${brandingColors.bgColor}`;
  const pushedEffect = `2px 2px 4px ${brandingColors.bgColor}, -4px -4px 8px ${brandingColors.bgColor}`;
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
          bg={brandingColors.newHighlightColor}
          size={{ base: "sm", md: "md", lg: "lg" }}
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
