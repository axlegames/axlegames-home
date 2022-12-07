import { Box, ChakraProvider } from "@chakra-ui/react";
import About from "./screens/About";
import { theme } from "./config/theme";
import Products from "./screens/Products";
import { brandingColors } from "./config/brandingColors";
import Why from "./screens/Why";
import Footer from "./screens/Footer";
import Team from "./screens/Team";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontWeight={"bold"} bg={brandingColors.bgColor}>
      <About />
      <Products />
      <Why />
      <Team />
      <Footer />
    </Box>
  </ChakraProvider>
);
