import { Button } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";
interface Props {
  shadow: string;
  bg: string;
  onClick: Function;
  label: string;
  width?: string;
}

const NeuLink = (props: Props) => {
  const pushedEffect = `2px 2px 4px ${props.shadow}, -4px -4px 8px ${brandingColors.bgColor}`;

  return (
    <Button
      variant={"ghost"}
      width={props.width || "auto"}
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
      {props.label}
    </Button>
  );
};

export default NeuLink;
