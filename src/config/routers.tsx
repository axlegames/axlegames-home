import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Element } from "react-scroll";
import { Box } from "@chakra-ui/react";
import { brandingColors } from "./brandingColors";

import { Suspense, lazy } from "react";

import { Triangle } from "react-loader-spinner";

const Axle = lazy(() => import("../pages/Axle/Axle"));

const Navbar = lazy(() => import("../components/navbar/Navbar"));
const MobileNavbar = lazy(() => import("../components/navbar/MobileNavbar"));

const Main = lazy(() => import("../screens/Main"));
const Products = lazy(() => import("../screens/Products"));
const Why = lazy(() => import("../screens/Why"));
const Tokenomics = lazy(() => import("../screens/Tokenomics"));
const RoadMap = lazy(() => import("../screens/RoadMap"));
const Team = lazy(() => import("../screens/Team"));
const PoweredBy = lazy(() => import("../screens/PoweredBy"));
const Footer = lazy(() => import("../screens/Footer"));
const ComingSoon = lazy(() => import("../pages/CommingSoon"));

const Home = () => {
  const FallBack = () => {
    return (
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        bg={brandingColors.bgColor}
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

  return (
    <Box zIndex={100} fontWeight={"bold"}>
      <Suspense fallback={<FallBack />}>
        <MobileNavbar />
        <Navbar />
        <Box bg={brandingColors.bgColor}>
          <Element name="about" className="about">
            <Main />
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
        </Box>
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
      </Suspense>
    </Box>
  );
};

export const HomeRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

export const PresaleRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Axle />} />
      </Routes>
    </Router>
  );
};
