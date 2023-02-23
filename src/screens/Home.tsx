import { Box } from "@chakra-ui/react";

import useIframeContentHeight from "react-use-iframe-content-height";

import MobileNavbar from "../components/navbar/MobileNavbar";
import Navbar from "../components/navbar/Navbar";

import { brandingColors } from "../config/brandingColors";
import { home } from "../config/data";

const Home = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();

  return (
    <Box>
      <Box
        bg={brandingColors.bgColor}
        backgroundPosition={"center"}
        backgroundSize="cotain"
        position={"fixed"}
        top="0"
        zIndex={1000}
      >
        <Box style={{ backdropFilter: "blur(11px)" }}>
          <MobileNavbar />
          <Navbar />
        </Box>
      </Box>
      <iframe
        ref={iframeRef}
        height={iframeHeight}
        title="charts"
        srcDoc={home}
        frameBorder="0"
      />
    </Box>
  );
};
export default Home;
