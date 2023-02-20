import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { brandingColors } from "./config/brandingColors";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";
import { Suspense, lazy } from "react";
import { useEffect } from "react";

import AOS from "aos";
// import About from "./screens/About";
// import Giveaway from "./screens/Giveaway";
// import TSupply from "./screens/Tsupply";
// import Giveaway2 from "./screens/Giveaway2";
// import StakeLayout from "./Staking/StakeLayout";

import "aos/dist/aos.css";

const Main = lazy(() => import("./screens/Main"));

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

  // const [banner, setBanner] = useState(true);

  return (
    <Suspense fallback={<FallBack />}>
      <body>
        <ChakraProvider>
          {/* <Banner close={() => setBanner(false)} isOpen={banner} size="xl" /> */}
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/giveaway1" element={<Giveaway />} />
              <Route path="/giveaway2" element={<Giveaway2 />} />
              <Route path="/tsupply" element={<TSupply />} />
              <Route path="/staking" element={<StakeLayout />} /> */}
            </Routes>
          </Router>
        </ChakraProvider>
      </body>
    </Suspense>
  );
};
