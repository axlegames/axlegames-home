import { Box, ChakraProvider } from "@chakra-ui/react";
import About from "./screens/About";
import { theme } from "./config/theme";
import Products from "./screens/Products";
import { brandingColors } from "./config/brandingColors";
import Why from "./screens/Why";
import Footer from "./screens/Footer";
import Team from "./screens/Team";
import Main from "./screens/Main";
import Tokenomics from "./screens/Tokenomics";
import RoadMap from "./screens/RoadMap";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import { Element } from "react-scroll";

export const App = () => (
  <ChakraProvider theme={theme}>
    <MobileNavbar />
    <Navbar />
    <Element name="main" className="main">
      <Main />
    </Element>

    <Box
      fontWeight={"bold"}
      bg={brandingColors.bgColor}
      margin="auto"
      width={{ "2xl": "80%" }}
    >
      <Element name="about" className="about">
        <About />
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
        <Box mb={{ base: "24" }}>
          <RoadMap />
        </Box>
      </Element>
      <Element name="team" className="team">
        <Team />
      </Element>
      <Element name="footer" className="footer">
        <Footer />
      </Element>
    </Box>
  </ChakraProvider>
);
