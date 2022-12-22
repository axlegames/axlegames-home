import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config/theme";
import Products from "./screens/Products";
import Why from "./screens/Why";
import Footer from "./screens/Footer";
import Team from "./screens/Team";
import Main from "./screens/Main";
import Tokenomics from "./screens/Tokenomics";
import RoadMap from "./screens/RoadMap";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import { Element } from "react-scroll";
import PoweredBy from "./screens/PoweredBy";
import Particles from "react-tsparticles";

import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { brandingColors } from "./config/brandingColors";

export const App = () => {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <MobileNavbar />
      <Navbar />

      <Element name="main" className="main">
        <Main />
      </Element>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            zIndex: {
              opacityRate: -1,
              random: false,
              sizeRate: -1,
              value: -1,
              velocityRate: -1,
            },
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 881.8766334760375,
              },
            },
            color: {
              value: ["#FFC56E", "#FF6CC6", "#4241B8", "#F69040", "#0EADC9"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 4,
                color: brandingColors.dangerColor,
              },
            },
            opacity: {
              value: 0,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 1,
                sync: true,
              },
            },
            size: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 40,
                sync: true,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 10,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.4,
                },
              },
              bubble: {
                distance: 1059.7607620532553,
                size: 5,
                duration: 2.273816194443766,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },

          retina_detect: true,
        }}
      />

      <Box zIndex={100} fontWeight={"bold"}>
        <Element name="about" className="about">
          {/* <About /> */}
        </Element>
        <Element name="products" className="products">
          <Box zIndex={100}>
            <Products />
          </Box>
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
    </ChakraProvider>
  );
};
