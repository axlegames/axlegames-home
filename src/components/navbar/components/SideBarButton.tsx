import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { brandingColors } from "../../../config/brandingColors";

const SideBarButton = (props: any) => {
  const normalEffect = `4px 4px 8px #A34400, -2px -2px 4px ${brandingColors.bgColor}`;
  const pushedEffect = `2px 2px 4px ${brandingColors.bgColor}, -4px -4px 8px ${brandingColors.bgColor}`;
  return (
    <Box width={"100%"}>
      <Link
        name={props.link}
        to={props.link}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
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
      </Link>
    </Box>
  );
};

export default SideBarButton;
