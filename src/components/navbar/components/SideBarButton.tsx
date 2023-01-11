import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { brandingColors } from "../../../config/brandingColors";

const SideBarButton = (props: any) => {
  const normalEffect = `9px 9px 18px #10338d, -9px -9px 18px #1851dd`;
  const pushedEffect = `inset 9px 9px 18px #10338d, inset -9px -9px 18px #1851dd`;
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
          fontFamily={`'Russo One', sans-serif`}
          textAlign={"left"}
          boxShadow={normalEffect}
          width={"100%"}
          bg={brandingColors.newHighlightColor}
          size={{ base: "lg" }}
          color={brandingColors.secondaryTextColor}
          onClick={() => props.onClick()}
          _hover={{
            boxShadow: pushedEffect,
            transition: "200ms all ",
          }}
          _active={{
            boxShadow: pushedEffect,
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
