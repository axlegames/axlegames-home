import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { brandingColors } from "../../../config/brandingColors";

const SideBarButton = (props: any) => {
  const normalEffect = `3px 3px 9px ${brandingColors.newHighlightColor}, -3px -3px 9px ${brandingColors.bgColor}`;
  const pushedEffect = `inset 9px 9px 18px #05172b, inset -9px -9px 18px #072543`;
  return (
    <Link
      name={props.link}
      to={props.link}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      style={{ width: "100%" }}
    >
      <Button
        fontFamily={`Staatliches`}
        textAlign={"left"}
        boxShadow={normalEffect}
        bg={brandingColors.bgColor}
        width="100%"
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
  );
};

export default SideBarButton;
