import Heading from "../components/Heading";

import { chart } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box } from "@chakra-ui/react";
import useIframeContentHeight from "react-use-iframe-content-height";

const Tokenomics = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();
  return (
    <Box bg={brandingColors.bgColor} p={{ base: "4", lg: "16" }}>
      <Heading title="Tokenomics" />
      <iframe
        ref={iframeRef}
        height={iframeHeight}
        title="charts"
        srcDoc={chart}
      />
    </Box>
  );
};

export default Tokenomics;
