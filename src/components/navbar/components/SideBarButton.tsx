import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { brandingColors } from "../../../config/brandingColors";

const SideBarButton = (props: any) => {
  return (
    <Link
      name={props.link}
      to={props.link}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <Button
        py={"5"}
        bg={brandingColors.bgColor}
        color={brandingColors.primaryTextColor}
        variant={"outline"}
        size={{ base: "sm" }}
        justifyContent="flex-start"
        position="relative"
        width={"100%"}
      >
        <Flex alignItems={"center"} columnGap={"1rem"}>
          <Box>{props.icon}</Box>
          <Text>{props.title}</Text>
        </Flex>
      </Button>
    </Link>
  );
};

export default SideBarButton;
