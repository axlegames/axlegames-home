import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "../screens/Products";
import Why from "../screens/Why";
import Footer from "../screens/Footer";
import Team from "../screens/Team";
// import Main from "../screens/Main";
import Tokenomics from "../screens/Tokenomics";
import RoadMap from "../screens/RoadMap";
import MobileNavbar from "../components/navbar/MobileNavbar";
import Navbar from "../components/navbar/Navbar";
import PoweredBy from "../screens/PoweredBy";
import { Element } from "react-scroll";
import { Box } from "@chakra-ui/react";
import { brandingColors } from "./brandingColors";
import ComingSoon from "../pages/CommingSoon";
import Axle from "../pages/Axle/Axle";

const Home = () => {
  return (
    <Box zIndex={100} fontWeight={"bold"}>
      <MobileNavbar />
      <Navbar />
      <Box bg={brandingColors.bgColor}>
        {/* <Element name="about" className="about">
          <Main />
        </Element> */}
        <Element name="products" className="products">
          <Products />
        </Element>
      </Box>
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
