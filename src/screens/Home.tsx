import { Box } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

import Navbar from "../components/navbar/Navbar";
import MobileNavbar from "../components/navbar/MobileNavbar";

import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <Box position={"relative"}>
      <Box
        backgroundPosition={"center"}
        backgroundSize="cotain"
        position={"fixed"}
        top="0"
        zIndex={1000}
      >
        <Box style={{ backdropFilter: "blur(11px)" }}>
          <MobileNavbar />
          <Navbar />
        </Box>
      </Box>
      <Box
        display={{ base: "none", lg: "flex" }}
        zIndex={1000}
        position={"fixed"}
        top="40%"
        my="auto"
        right="1rem"
      >
        <Box
          display={"flex"}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
          bg={brandingColors.bgColor}
          boxShadow={`0px 0px 2px ${brandingColors.newHighlightColor}`}
          borderRadius="3xl"
          py={1}
        >
          {socials.map((s, i) => (
            <Box
              key={i}
              transition={"all 200ms ease-in"}
              _hover={{ transform: "scale(1.1)" }}
            >
              <a rel="noopener noreferrer" href={s.url} target="_blank">
                <img style={{ maxWidth: "60px" }} src={s.icon} alt="" />
              </a>
            </Box>
          ))}
        </Box>
      </Box>
      <Banner />
    </Box>
  );
};
export default Home;

const socials = [
  {
    url: "https://twitter.com/AxleGames",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/twitter.webp",
  },
  {
    url: "https://medium.com/@axlegames",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/medium.webp",
  },
  {
    url: "https://instagram.com/axlegames",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/instagram.webp",
  },
  {
    url: "https://t.me/axlegames_en",
    icon: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/socials/telegram.webp",
  },
];
