import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { brandingColors } from "./config/brandingColors";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";
import { Suspense, lazy, useState } from "react";
import { Element } from "react-scroll";
import { theme } from "./config/theme";
import { useEffect } from "react";
import BG from "./assets/bg.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import "react-loading-skeleton/dist/skeleton.css";
import About from "./screens/About";
import Banner from "./components/Banner";
import Giveaway from "./screens/Giveaway";
import TSupply from "./screens/Tsupply";
import Giveaway2 from "./screens/Giveaway2";

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const MobileNavbar = lazy(() => import("./components/navbar/MobileNavbar"));

const Main = lazy(() => import("./screens/Main"));
const Products = lazy(() => import("./screens/Products"));
const Why = lazy(() => import("./screens/Why"));
const Tokenomics = lazy(() => import("./screens/Tokenomics"));
const RoadMap = lazy(() => import("./screens/RoadMap"));
const Team = lazy(() => import("./screens/Team"));
const PoweredBy = lazy(() => import("./screens/PoweredBy"));
const NFTs = lazy(() => import("./screens/NFTs"));
const Footer = lazy(() => import("./screens/Footer"));

const Home = () => {
  return (
    <Box
      bg={brandingColors.bgColor}
      minH={{ lg: "90vh" }}
      position="relative"
      fontWeight={"bold"}
    >
      <Box
        backgroundPosition={"center"}
        backgroundSize="cotain"
        backgroundImage={BG}
      >
        <Box style={{ backdropFilter: "blur(11px)" }}>
          <MobileNavbar />
          <Navbar />
          <Main />
        </Box>
      </Box>

      <Element name="products">
        <Products />
      </Element>
      <Element name="why">
        <Why />
        <NFTs />
      </Element>
      <Element name="token">
        <Tokenomics />
      </Element>
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
    </Box>
  );
};

export const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

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
        margin={0}
        padding={0}
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

  const [banner, setBanner] = useState(true);

  return (
    <Suspense fallback={<FallBack />}>
      <ChakraProvider theme={theme}>
        <Banner close={() => setBanner(false)} isOpen={banner} size="xl" />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/giveaway1" element={<Giveaway />} />
            <Route path="/giveaway2" element={<Giveaway2 />} />
            <Route path="/tsupply" element={<TSupply />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Suspense>
  );
};
