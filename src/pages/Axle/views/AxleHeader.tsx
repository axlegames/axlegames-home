import { Flex, Text } from "@chakra-ui/react";
import { brandingColors } from "../../../config/brandingColors";

const AxleHeader = () => {
  return (
    <Flex
      my={{ base: "4" }}
      direction={"column"}
      textAlign={"center"}
      fontWeight="bold"
    >
      <Text
        color={brandingColors.primaryTextColor}
        fontSize={{ base: "xl", lg: "3xl" }}
      >
        Introducing Axle Token
      </Text>
      <Text
        color={brandingColors.secondaryTextColor}
        fontSize={{ base: "lg", lg: "xl" }}
      >
        A web3 Gaming token
      </Text>
    </Flex>
  );
};
export default AxleHeader;
