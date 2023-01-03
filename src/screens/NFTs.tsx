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
      <Box
        minW={{ base: "320px" }}
        maxW={{ base: "320px" }}
        justifyContent={"center"}
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Tilt>
          <video
            muted
            loop
            src={props.img}
            width="320"
            autoPlay
            height="240"
          ></video>
        </Tilt>
        <Box
          py={3}
          borderBottomRadius="xl"
          backgroundImage={`linear-gradient(to bottom, #061e37, #002956, #003376, #003b96, #1442b5)`}
          width={"100%"}
          mx="auto"
          my={2}
          boxShadow={`2xl`}
        >
          <Text
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "lg", lg: "2xl" }}
            fontFamily={`'Russo One', sans-serif`}
            textAlign={"center"}
          >
            {props.title}
          </Text>
          <Text
            color={brandingColors.secondaryTextColor}
            fontFamily={`'Russo One', sans-serif`}
            fontWeight={"normal"}
            fontSize={{ base: "sm", lg: "md" }}
            textAlign={"center"}
          >
            {props.text}
          </Text>
        </Box>
      </Box>
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
