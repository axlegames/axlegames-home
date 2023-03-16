import { Flex } from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";

const SideBarCard = (props: any) => {
  return (
    <Flex
      bg={brandingColors.bgColor}
      p={"8"}
      height="100vh"
      direction={"column"}
      alignItems="flex-start"
      rowGap={"1rem"}
    >
      {props.children}
    </Flex>
  );
};

export default SideBarCard;
