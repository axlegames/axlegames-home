import { Box, ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";
import { getApp } from "./config/GetApp";
import { theme } from "./config/theme";
import AOS from "aos";

import "aos/dist/aos.css";

export const App = () => {
  const Router = getApp();
  useEffect(() => {
    AOS.init({});
  });
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Router />
      </Box>
    </ChakraProvider>
  );
};
