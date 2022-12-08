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
// import Navbar from "./components/Navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontWeight={"bold"} bg={brandingColors.bgColor}>
      {/* <Navbar /> */}
      <Main />
      <About />
      <Products />
      <Why />
      <Tokenomics />
      <RoadMap />
      <Team />
      <Footer />
    </Box>
  </ChakraProvider>
);
