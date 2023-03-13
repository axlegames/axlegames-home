import { nfts } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box, Grid, Text } from "@chakra-ui/react";

import Slider from "react-slick";
import Heading from "../components/Heading";

import "./NFTs.css";
import { useRef } from "react";

interface Props {
  title: string;
  text: string;
  img: string;
  slide: string;
}

const NFT = (props: Props) => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      data-aos={props.slide}
    >
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
          backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
          width={"100%"}
          mx="auto"
          my={2}
          boxShadow={`2xl`}
        >
          <Text
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "lg", lg: "2xl" }}
            fontFamily={`Staatliches`}
            textAlign={"center"}
            fontWeight="bold"
          >
            {props.title}
          </Text>
          <Text
            color={brandingColors.secondaryTextColor}
            fontFamily={`Shantell Sans`}
            fontWeight={"bold"}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
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
  const slider = useRef(null);

  const PrevArrow = () => (
    <button
      onClick={() => slider?.current?.slickPrev()}
      className="slide_button_c slide-arrow_c prev-arrow_c"
    ></button>
  );

  const NextArrow = () => (
    <button
      onClick={() => slider?.current?.slickNext()}
      className="slide_button_c slide-arrow_c next-arrow_c"
    ></button>
  );
  return (
    <Box
      p={{ base: "4", lg: "16" }}
      bg={brandingColors.bgColor}
      backgroundImage="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/players-week-bg.png"
    >
      <Heading title="NFTs" />
      <Grid
        display={{ base: "none", lg: "grid" }}
        columnGap={{ base: "1rem", xl: "1rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
        py={12}
        rowGap={{ base: "4rem" }}
        width={{ base: "65%" }}
        mx="auto"
      >
        {nfts.map((nft, index) => (
          <NFT
            slide={index % 2 === 0 ? `fade-down` : `fade-up`}
            {...nft}
            key={index}
          />
        ))}
      </Grid>
      <Box px={1} py={12} display={{ base: "block", lg: "none" }}>
        <Slider
          ref={slider}
          infinite={true}
          speed={500}
          slidesToScroll={1}
          slidesPerRow={1}
          slidesToShow={1}
          dots={true}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          arrows={true}
        >
          <NFT slide={""} {...nfts[0]} />
          <NFT slide={""} {...nfts[1]} />
          <NFT slide={""} {...nfts[2]} />
        </Slider>
      </Box>
    </Box>
  );
};

export default NFTs;
