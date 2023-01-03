import { Box, Grid, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";
import Tilt from "react-parallax-tilt";
import Heading from "../components/Heading";

const whys = [
  {
    title: "Zeus",
    text: "400 $AXLE",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`,
  },
  {
    title: "Poseidon",
    text: "800 $AXLE",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/poseidon.mp4`,
  },
  {
    title: "Hades",
    text: "1200 $AXLE",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/hades.mp4`,
  },
];

interface Props {
  title: string;
  text: string;
  img: string;
  slide: string;
}

const NFT = (props: Props) => {
  return (
    <Box data-aos={props.slide}>
      <Tilt>
        <Box
          boxShadow={`2xl`}
          minW={{ base: "280px" }}
          maxW={{ base: "280px" }}
          justifyContent={"center"}
          alignItems="center"
          borderRadius="md"
          display="flex"
          backgroundImage={`linear-gradient(to top, #061e37, #06223e, #072544, #07294b, #082d52, #03315d, #003569, #003874, #003c86, #003f97, #0041a8, #1a42b8)`}
          flexDirection="column"
          p={5}
        >
          <video
            muted
            loop
            src={props.img}
            width="320"
            autoPlay
            height="240"
          ></video>
          <Box my={2}>
            <Text
              color={brandingColors.primaryTextColor}
              fontSize={{ base: "lg", lg: "2xl" }}
              fontFamily={`'Russo One', sans-serif`}
              textAlign={"center"}
            >
              {props.title}
            </Text>
            <Text
              color={brandingColors.dangerColor}
              fontFamily={`'Russo One', sans-serif`}
              fontWeight={"normal"}
              fontSize={{ base: "sm", lg: "md" }}
              textAlign={"center"}
            >
              {props.text}
            </Text>
          </Box>
        </Box>
      </Tilt>
    </Box>
  );
};

const NFTs = () => {
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_bg.png`}
      p={{ base: "4", lg: "16" }}
      display="flex"
      flexDirection={"column"}
      rowGap="4rem"
      justifyContent={"center"}
      alignItems="center"
    >
      <Heading title="NFTs" />
      <Grid
        columnGap={{ base: "1rem", xl: "4rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        rowGap={{ base: "4rem" }}
      >
        {whys.map((why, index) => (
          <NFT
            slide={index % 2 === 0 ? `fade-down` : `fade-up`}
            {...why}
            key={index}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default NFTs;
