import { nfts } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box, Grid, Text } from "@chakra-ui/react";

import Heading from "../components/Heading";

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
        minW={{ base: "270px" }}
        maxW={{ base: "270px" }}
        justifyContent={"center"}
        alignItems="center"
        display="flex"
        flexDirection="column"
        zIndex={300}
      >
        <video
          muted
          loop
          src={props.img}
          width="320"
          autoPlay
          height="240"
        ></video>
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
        {nfts.map((nft, index) => (
          <NFT
            slide={index % 2 === 0 ? `fade-down` : `fade-up`}
            {...nft}
            key={index}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default NFTs;
