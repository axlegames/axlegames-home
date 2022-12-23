import { Flex } from "@chakra-ui/react";

import UtilityGrid from "./views/UtilityGrid";
import WhitePaper from "./views/WhitePaper";
import AxleInfo from "./views/AxleInfo";
import AxleHeader from "./views/AxleHeader";
import { brandingColors } from "../../config/brandingColors";

const Axle = () => {
  return (
    <Flex
      direction={"column"}
      rowGap="1rem"
      fontFamily={"quicksand"}
      bg={brandingColors.bgColor}
    >
      <AxleHeader />
      <AxleInfo />
      <UtilityGrid />
      <WhitePaper />
    </Flex>
  );
};

export default Axle;
