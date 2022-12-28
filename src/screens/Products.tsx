import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

import { BsDot } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Heading from "../components/Heading";
import NeuButton from "../components/NeuButton";

const products = [
  {
    isLive: true,
    subTitle: "Axle Games",
    label: "Play",
    text: "A skill based web3 gaming platform that offers various single-player and multiplayer games with live tournaments/contests. Users can compete with their peers and win attractive rewards with unlimited fun.",
    image: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/icons/gaming.webp`,
    mainImg: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/products/games.webp`,
    function: () => (window.location.href = "https://play.axlegames.io"),
  },
  {
    isLive: true,
    subTitle: "Axle Staking",
    label: "STAKE $AXLE",
    text: "Users can stake their $AXLE tokens by locking in our staking pools for a certain period of time. Our stakers will have exclusive benefits to the Axle platform and will receive $AXLE token rewards with attractive APYs.",
    image: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/icons/stake.webp`,
    mainImg: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/products/stake.webp`,
    function: () => (window.location.href = "https://sale.axlegames.io"),
  },
  {
    isLive: true,
    subTitle: "Axle Swap",
    label: "GO TO SWAP",
    text: "A decentralised exchange is a peer-to-peer marketplace to exchange cryptos. Axle swaps enables users to swap their $AXLE tokens to other supported tokens and vice versa. Decentralisation is a fundamental philosophy of blockchain and Axle Swap will play a huge role in decentralisation.",
    image: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/icons/swap.webp`,
    mainImg: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/products/swap.webp`,
    function: () => (window.location.href = "https://sale.axlegames.io"),
  },
  {
    isLive: false,
    subTitle: "Axle Arena",
    label: "BUY $AXLE",
    text: "In our Axle Arena, users can make/meet new friends and compete against each others by playing PvP games on the platform. In short, Axle Arena is a social media with wide range of offerings for our gamers on the platform.",
    image: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/icons/league.webp`,
    mainImg: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/products/league.webp`,
    function: () => null,
  },

  {
    isLive: false,
    subTitle: "Axle DAO",
    label: "GO TO SWAP",
    text: "Tokenised ownership of the Axle games platform through Axle DAO. All the token holders will be able to take part in the governance of the platform for increased transparency and trust. Every $AXLE token holder is a platform owner.",
    image: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/icons/dao.webp`,
    mainImg: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/products/dao.webp`,
    function: () => null,
  },
  {
    isLive: false,
    subTitle: "Axle Marketplace",
    label: "BUY $AXLE",
    text: "An NFT Marketplace to trade in-game NFTs used in our AXLE games platform. These NFTs will unlock special abilities/powers and boost the winning chances of the gamer. NFT holders will be eligible to receive exclusive rewards in the future.",
    image: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/icons/store.webp`,
    mainImg: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/products/marketplace.webp`,
    function: () => null,
  },
];

const Products = () => {
  return (
    <Box py={{ base: "12" }} width={{ base: "100%", lg: "100%" }}>
      <Heading title="Products" />
      <Box
        flexDirection={"column"}
        display={{ base: "none", lg: "flex" }}
        py={{ base: "12" }}
        rowGap="4rem"
      >
        {products.map((p, i) => {
          return (
            <Box key={i}>
              <ProductDetail index={i} {...p} />
            </Box>
          );
        })}
      </Box>

      <Box
        flexDirection={"column"}
        display={{ base: "flex", lg: "none" }}
        py={{ base: "12" }}
        justifyContent="center"
        alignItems={"center"}
      >
        {products.map((p, i) => {
          return (
            <Box key={i}>
              <Product index={i} {...p} />;
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const ProductDetail = (props: Props) => {
  const Content = () => (
    <Flex
      data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
      zIndex={100}
      bg={brandingColors.fgColor}
      p={{ base: "4", lg: "8" }}
      borderRadius="md"
      boxShadow={"sm"}
      rowGap={"2rem"}
      flexDirection={"column"}
      backgroundImage={
        props.index % 2 === 0
          ? `linear-gradient(to right, #061e37, #06223e, #072544, #07294b, #082d52, #03315e, #003569, #003875, #003c87, #003f99, #0541aa, #1f42bb)`
          : `linear-gradient(to left, #061e37, #06223e, #072544, #07294b, #082d52, #03315e, #003569, #003875, #003c87, #003f99, #0541aa, #1f42bb)`
      }
    >
      <Box display={"flex"} columnGap="1rem">
        <Image width={"16"} src={props.image} />
        <Box display={"flex"} alignItems="center">
          <Flex
            alignItems={"center"}
            color={brandingColors.secondaryTextColor}
            fontSize={"3xl"}
            columnGap="1rem"
          >
            <Text
              fontFamily={`'Russo One', sans-serif`}
              color={brandingColors.primaryTextColor}
            >
              {props.subTitle}
            </Text>
            <Box>
              <Text
                bg={brandingColors.fgColor}
                fontSize="md"
                px={2}
                borderRadius="md"
                color={props.isLive ? "green.400" : "red.400"}
                fontWeight="bold"
              >
                {props.isLive ? `• LIVE` : `• COMING SOON`}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box>
        <Text color={brandingColors.secondaryTextColor} fontSize={"lg"}>
          {props.text}
        </Text>
      </Box>

      <Flex>
        {props.isLive ? (
          <NeuButton
            label={props.label}
            onClick={props.function}
            bg={brandingColors.neuPrimaryBg}
            shadow={brandingColors.newPrimaryShadow}
          />
        ) : null}
      </Flex>
    </Flex>
  );
  return (
    <Flex
      zIndex={100}
      width={"80%"}
      margin="auto"
      alignItems={"center"}
      columnGap={"3rem"}
    >
      {props.index % 2 === 0 ? <Content /> : null}

      <Image
        data-aos={props.index % 2 === 0 ? `fade-left` : `fade-right`}
        maxW={{ base: "256px", lg: "312px" }}
        borderRadius={"md"}
        src={props.mainImg}
      />

      {props.index % 2 !== 0 ? <Content /> : null}
    </Flex>
  );
};

interface Props {
  subTitle: string;
  isLive: boolean;
  text: string;
  label: string;
  index: number;
  image: string;
  mainImg: string;
  function: Function;
}

const Product = (props: Props) => {
  return (
    <Box data-aos={props.index % 2 === 0 ? "fade-left" : "fade-right"}>
      <Box display={"flex"} flexDirection="column" alignItems={"center"}>
        <Image maxW={{ base: "360px" }} src={props.mainImg} />
        <Box
          display={"flex"}
          flexDirection={{ base: "column" }}
          px={{ base: "4" }}
          columnGap={{ base: "1rem" }}
        >
          <Flex flexDirection={{ base: "column", sm: "row" }}>
            <Text
              px={4}
              color={brandingColors.primaryTextColor}
              fontSize={"3xl"}
            >
              {props.subTitle}
            </Text>
            <Flex px={4} alignItems={"center"}>
              <Icon color={props.isLive ? "green.400" : "red.400"} as={BsDot} />
              <Text color={props.isLive ? "green.400" : "red.400"}>
                {props.isLive ? `Live` : "Coming Soon"}
              </Text>
            </Flex>
          </Flex>

          <Text color={brandingColors.secondaryTextColor} p={{ base: "4" }}>
            {props.text}
          </Text>
          <Flex columnGap={"1rem"} p={{ base: "4" }}>
            <NeuButton
              label={props.label}
              onClick={props.function}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
            <Flex
              columnGap={{ base: "1rem" }}
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <ChevronRightIcon
                color={brandingColors.secondaryButtonColor}
                width={{ base: "8" }}
                height={{ base: "8" }}
              />
              <Text color={brandingColors.secondaryButtonColor}>
                JOIN TELEGRAM
              </Text>
              <Icon
                color="#3C90D0"
                width={{ base: "6" }}
                height={{ base: "6" }}
                as={FaTelegram}
              />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
