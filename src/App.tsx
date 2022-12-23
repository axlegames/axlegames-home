import { Box, ChakraProvider } from "@chakra-ui/react";
import { getApp } from "./config/GetApp";
import { theme } from "./config/theme";

export const App = () => {
  const Router = getApp();
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Router />
      </Box>
    </ChakraProvider>
  );
};
