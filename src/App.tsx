import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/theme";
import Products from "./screens/Products";
import Why from "./screens/Why";
import Footer from "./screens/Footer";
import Team from "./screens/Team";
import Main from "./screens/Main";
import Tokenomics from "./screens/Tokenomics";
import RoadMap from "./screens/RoadMap";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import { Element } from "react-scroll";
import PoweredBy from "./screens/PoweredBy";

export const App = () => (
  <ChakraProvider theme={theme}>
    <MobileNavbar />
    <Navbar />
    <Element name="main" className="main">
      <Main />
    </Element>

    <Box
      fontWeight={"bold"}
      // width={{ "2xl": "80%" }}
    >
      <Element name="about" className="about">
        {/* <About /> */}
      </Element>
      <Element name="products" className="products">
        <Products />
      </Element>
      <Element name="why" className="why">
        <Why />
      </Element>
      <Element name="token" className="token">
        <Tokenomics />
      </Element>
      <Element name="roadmap" className="roadmap">
        <RoadMap />
      </Element>
      <Element name="team" className="team">
        <Box
          backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
        >
          <Team />
          <PoweredBy />
        </Box>
      </Element>
      <Element name="footer" className="footer">
        <Footer />
      </Element>
    </Box>
  </ChakraProvider>
);
