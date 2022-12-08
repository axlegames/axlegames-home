import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";
import Placeholder from "../assets/placeholder.jpg";
import Heading from "../components/Heading";
import NeuButton from "../components/NeuButton";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaTelegram } from "react-icons/fa";

const products = [
  {
    isLive: true,
    title: "$AXLE",
    subTitle: "Battle Staking",
    label: "STAKE $AXLE",
    text: "Users can stake their holdings by depositing and locking them for a period of time. Stakers will also receive extra benefits for other activities they perform on the platform.",
  },
  {
    isLive: true,
    title: "$AXLE",
    subTitle: "Battle Swap",
    label: "GO TO SWAP",
    text: "A decentralized exchange that works like a bank entity on our platform. It enables new users to buy AXLE tokens directly and also convert their winning rewards to another currency. Battle Swap is integrated with the marketplace, game store, and arena, which makes the platform’s overall in-game app experience smoother, faster, and hassle-free.",
  },
  {
    isLive: false,
    title: "Fantasy Sports",
    subTitle: "AXLE Premier League",
    label: "BUY $AXLE",
    text: "AXLE Premier League is the world’s first decentralized blockchain NFT-Based fantasy sports game integrated with metaverse, where the user can build their own strategic team and battle with others all around the world and earn.",
  },
  {
    isLive: false,
    title: "PLAY-TO-EARN",
    subTitle: "Battle Games",
    label: "BUY $AXLE",
    text: "AXLE Battle Games is a multiplayer game store where gamers on our platform can gain access to multiple NFT- based games to play and earn. Players can buy and sell their gaming assets and characters in the AXLE Battle Market and sell their winning NFTs as well.",
  },
];

const Products = () => {
  return (
    <Box py={{ base: "12" }}>
      <Heading title="Products" />
      <Box
        flexDirection={"column"}
        display={{ base: "none", lg: "flex" }}
        py={{ base: "12" }}
      >
        {products.map((p, i) => {
          return <ProductDetail index={i} key={i} {...p} />;
        })}
      </Box>

      <Box
        flexDirection={"column"}
        display={{ base: "flex", lg: "none" }}
        py={{ base: "12" }}
      >
        {products.map((p, i) => {
          return <Product index={i} key={i} {...p} />;
        })}
      </Box>
    </Box>
  );
};

const ProductDetail = (props: Props) => {
  const Content = () => (
    <Flex rowGap={"2rem"} flexDirection={"column"}>
      <Box>
        <Text color={brandingColors.primaryTextColor} fontSize={"xl"}>
          {props.title} {props.index}
        </Text>
        <Flex
          color={brandingColors.secondaryTextColor}
          fontSize={"3xl"}
          columnGap="1rem"
        >
          <Text color={brandingColors.secondaryTextColor}>
            {props.subTitle}
          </Text>
          <Text px={4} borderRadius="md" bg={brandingColors.fgColor}>
            {props.isLive ? `LIVE` : `COMING SOON`}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text color={brandingColors.secondaryTextColor} fontSize={"lg"}>
          {props.text}
        </Text>
      </Box>

      <Flex columnGap={"1rem"}>
        <NeuButton
          label={props.label}
          onClick={() => null}
          bg={brandingColors.neuPrimaryBg}
          shadow={brandingColors.newPrimaryShadow}
        />
        <Flex
          columnGap={{ base: "1rem" }}
          justifyContent={"space-evenly"}
          alignItems="center"
        >
          <ChevronRightIcon width={{ base: "8" }} height={{ base: "8" }} />
          <Text color={brandingColors.secondaryTextColor}>JOIN TELEGRAM</Text>
          <Icon
            color="#3C90D0"
            width={{ base: "6" }}
            height={{ base: "6" }}
            as={FaTelegram}
          />
        </Flex>
      </Flex>
    </Flex>
  );
  return (
    <Flex p={{ base: "16" }} alignItems={"center"} columnGap={"3rem"}>
      {props.index % 2 === 0 ? <Content /> : null}
      <Image borderRadius={"md"} src={Placeholder} />
      {props.index % 2 !== 0 ? <Content /> : null}
    </Flex>
  );
};

interface Props {
  title: string;
  subTitle: string;
  isLive: boolean;
  text: string;
  label: string;
  index: number;
}

const Product = (props: Props) => {
  return (
    <Box py={{ base: "4" }}>
      <Box position={"relative"}>
        <Image src={Placeholder} />
        <Box
          display={"flex"}
          flexDirection="column"
          rowGap={"0"}
          bottom={"4"}
          position="absolute"
          left="4"
          zIndex="4"
        >
          <Text color={brandingColors.primaryTwoTextColor} fontSize={"xl"}>
            {props.title}
          </Text>
          <Text color={brandingColors.primaryTextColor} fontSize={"3xl"}>
            {props.subTitle}
          </Text>
          {props.isLive ? <Text>LIVE</Text> : <Text>COMING SOON</Text>}
        </Box>
      </Box>
      <Text color={brandingColors.secondaryTextColor} p={{ base: "4" }}>
        {props.text}
      </Text>

      <Flex columnGap={"1rem"} p={{ base: "4" }}>
        <NeuButton
          label={props.label}
          onClick={() => null}
          bg={brandingColors.neuPrimaryBg}
          shadow={brandingColors.newPrimaryShadow}
        />
        <Flex
          columnGap={{ base: "1rem" }}
          justifyContent={"space-evenly"}
          alignItems="center"
        >
          <ChevronRightIcon width={{ base: "8" }} height={{ base: "8" }} />
          <Text>JOIN TELEGRAM</Text>
          <Icon
            color="#3C90D0"
            width={{ base: "6" }}
            height={{ base: "6" }}
            as={FaTelegram}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Products;
