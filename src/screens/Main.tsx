import { Box } from "@chakra-ui/react";
import { lazy } from "react";
import { Element } from "react-scroll";
import { brandingColors } from "../config/brandingColors";

const Products = lazy(() => import("./Products"));
const Why = lazy(() => import("./Why"));
const Tokenomics = lazy(() => import("./Tokenomics"));
const RoadMap = lazy(() => import("./RoadMap"));
const Team = lazy(() => import("./Team"));
const PoweredBy = lazy(() => import("./PoweredBy"));
const NFTs = lazy(() => import("./NFTs"));
const Footer = lazy(() => import("./Footer"));
const Home = lazy(() => import("./Home"));
const HowItWorks = lazy(() => import("./HowItWorks"));
const EProfile = lazy(() => import("./EProfile"));
const Games = lazy(() => import("./Games"));
const Testimonials = lazy(() => import("./Testimonials"));

const Main = () => {
  return (
    <Box position={"relative"}>
      <Element name="home">
        <Home />
        <Games />
        <HowItWorks />
        <EProfile />
      </Element>
      <Box
        bg={brandingColors.bgColor}
        backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-bg.png`}
      >
        <Element name="products">
          <Products />
        </Element>
        <Element name="why">
          <Why />
        </Element>
      </Box>
      <NFTs />
      <Element name="token">
        <Tokenomics />
      </Element>
      <Element name="roadmap">
        <RoadMap />
      </Element>
      <Element name="team">
        <Box
          bg={brandingColors.bgColor}
          backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-bg.png`}
        >
          <Team />
          <PoweredBy />
        </Box>
      </Element>
      <Element name="footer">
        <Testimonials />
        <Footer />
      </Element>
    </Box>
  );
};
export default Main;
