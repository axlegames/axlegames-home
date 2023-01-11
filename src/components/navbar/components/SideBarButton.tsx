import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { brandingColors } from "../../../config/brandingColors";

const SideBarButton = (props: any) => {
  const normalEffect = `9px 9px 18px #05172b, -9px -9px 18px #072543;`;
  const pushedEffect = `inset 9px 9px 18px #05172b, inset -9px -9px 18px #072543`;
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
          bg={brandingColors.bgColor}
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
