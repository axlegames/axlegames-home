import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FallBack from "./components/Fallback";
import { theme } from "./config/theme";

import Swap from "./Staking/Swap";
// import Banner from "./components/Banner";
import StakingCategories from "./Staking/StakingCategories";
import Stake from "./Staking/Stake";
import BnbStake from "./Staking/components/bnb/bnbStaking";

const Main = lazy(() => import("./screens/Main"));
const About = lazy(() => import("./screens/About"));

const Giveaway1 = lazy(() => import("./Giveaway/Giveaway"));
const Dashboard = lazy(() => import("./Staking/Dashboard"));
const Mint = lazy(() => import("./Mint/Mint"));
const NFTs = lazy(() => import("./Nfts/NFTs"));

// const Giveaway2 = lazy(() => import("./Giveaway/Giveaway2"));
// const TSupply = lazy(() => import("./screens/Tsupply"));
// const StakeLayout = lazy(() => import("./Staking/StakeLayout"));

export const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  });

  // const pathname = window.location.pathname;
  // const [banner, setBanner] = useState(pathname === "/" ? true : false);

  return (
    <Suspense fallback={<FallBack />}>
      <ChakraProvider theme={theme}>
        {/* <Banner close={() => setBanner(false)} isOpen={banner} size="xl" /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/giveaway1" element={<Giveaway1 />} />
            <Route path="/nftmint/whitelist" element={<Mint />} />
            <Route path="/nftmint/public" element={<NFTs />} />
            {/* <Route path="/giveaway2" element={<Giveaway2 />} /> */}
            {/* <Route path="/tsupply" element={<TSupply />} /> */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staking" element={<StakingCategories />} />
            <Route path="/staking/axle-stake" element={<Stake />} />
            <Route path="/staking/bnb-stake" element={<BnbStake />} />
            <Route path="/swap" element={<Swap />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Suspense>
  );
};
