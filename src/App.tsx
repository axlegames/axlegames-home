import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { brandingColors } from "./config/brandingColors";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";
import { Suspense, lazy, useState } from "react";
import { Element } from "react-scroll";
import { theme } from "./config/theme";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const MobileNavbar = lazy(() => import("./components/navbar/MobileNavbar"));

const Main = lazy(() => import("./screens/Main"));
const Products = lazy(() => import("./screens/Products"));
const Why = lazy(() => import("./screens/Why"));
// const Tokenomics = lazy(() => import("../screens/Tokenomics"));
const RoadMap = lazy(() => import("./screens/RoadMap"));
const Team = lazy(() => import("./screens/Team"));
const PoweredBy = lazy(() => import("./screens/PoweredBy"));
const Footer = lazy(() => import("./screens/Footer"));
const ComingSoon = lazy(() => import("./screens/CommingSoon"));

const Home = () => {
  const FallBack = () => {
    return (
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg={brandingColors.bgColor}
        position="fixed"
        zIndex={500}
      >
        <Triangle
          height={"100"}
          width={"100"}
          ariaLabel="grid-loading"
          color={brandingColors.primaryTextColor}
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Box>
    );
  };

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
  }, []);

  return (
    <Box bg={brandingColors.bgColor} fontWeight={"bold"}>
      {!loaded ? <FallBack /> : null}
      <Suspense fallback={<FallBack />}>
        <MobileNavbar />
        <Navbar />
        <Element name="about">
          <Main />
        </Element>
        <Element name="products">
          <Products />
        </Element>
        <Element name="why">
          <Why />
        </Element>
        <Element name="token">{/* <Tokenomics /> */}</Element>
        <Element name="roadmap">
          <RoadMap />
        </Element>
        <Element name="team">
          <Box
            backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
          >
            <Team />
            <PoweredBy />
          </Box>
        </Element>
        <Element name="footer">
          <Footer />
        </Element>
      </Suspense>
    </Box>
  );
};

export const App = () => {
  useEffect(() => {
    AOS.init({});
  });
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </Router>
      </Box>
    </ChakraProvider>
  );
};
