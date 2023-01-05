import { products } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import Heading from "../components/Heading";
import NeuButton from "../components/NeuButton";

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

const Products = () => {
  return (
    <Box py={{ base: "12" }}>
      <Heading title="Products" />
      <Box
        flexDirection={"column"}
        display={{ base: "none", lg: "flex" }}
        py={{ base: "12" }}
        rowGap="4rem"
      >
        {products.map((p, i) => {
          return <ProductMidDeviceView key={i} index={i} {...p} />;
        })}
      </Box>

      <Box
        flexDirection={"column"}
        display={{ base: "flex", lg: "none" }}
        py={{ base: "12" }}
      >
        {products.map((p, i) => {
          return <ProductMobileView key={i} index={i} {...p} />;
        })}
      </Box>
    </Box>
  );
};

const ProductMobileView = (props: Props) => {
  return (
    <Box
      backgroundImage={
        props.index % 2 === 0
          ? `linear-gradient(to right, #061e37, #06223e, #072544, #07294b, #082d52, #03315e, #003569, #003875, #003c87, #003f99, #0541aa, #1f42bb)`
          : `linear-gradient(to left, #061e37, #06223e, #072544, #07294b, #082d52, #03315e, #003569, #003875, #003c87, #003f99, #0541aa, #1f42bb)`
      }
      data-aos={props.index % 2 === 0 ? "fade-left" : "fade-right"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      flexDirection="column"
      px={{ base: "4", sm: "6", md: "8" }}
      py={4}
      m={4}
      borderRadius="xl"
    >
      <Image maxW={"320px"} src={props.mainImg} />
      <Box display={"flex"} flexDirection={{ base: "column" }} rowGap="1rem">
        <Flex
          alignItems={"center"}
          columnGap={"1rem"}
          flexDirection={{ base: "row" }}
        >
          <Image maxW={"12"} src={props.image} />
          <Text
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
          >
            {props.subTitle}
          </Text>
          <Text
            p={1}
            borderRadius="md"
            fontSize={"xx-small"}
            color={props.isLive ? "green.400" : "red.400"}
            bg={brandingColors.fgColor}
          >
            {props.isLive ? `• Live` : "• Coming Soon"}
          </Text>
        </Flex>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          color={brandingColors.secondaryTextColor}
        >
          {props.text}
        </Text>
        {props.isLive ? (
          <Box>
            <NeuButton
              label={props.label}
              onClick={props.function}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

const ProductMidDeviceView = (props: Props) => {
  const Content = () => (
    <Flex
      data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
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

export default Products;
