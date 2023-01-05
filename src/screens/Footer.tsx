import {
  Box,
  Divider,
  Flex,
  FormControl,
  Grid,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { socials } from "../config/data";
import { brandingColors } from "../config/brandingColors";

import Heading from "../components/Heading";
import NeuLink from "../components/NeuLink";

const Footer = () => {
  return (
    <Flex
      bg={brandingColors.bgColor}
      fontFamily={"quicksand"}
      fontWeight="bold"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
      rowGap={{ base: "2rem" }}
    >
      <Heading title="Get in Touch" />
      <Box
        px={4}
        py={8}
        minW={{ base: "46vw" }}
        borderRadius="xl"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
        rowGap="2rem"
        bg={brandingColors.bgColor}
        boxShadow={`5px 5px 13px #05192d, -5px -5px 13px #072341`}
        data-aos={`zoom-out`}
      >
        <Grid
          width={"100%"}
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          columnGap="2rem"
          justifyContent={"center"}
          alignItems="center"
          rowGap={"1rem"}
          fontFamily={`'Russo One', sans-serif`}
        >
          <Box display={"flex"} flexDirection="column" rowGap={"1rem"}>
            <FormControl isRequired>
              <Input
                outline={"none"}
                boxShadow={`1px 1px 4px ${brandingColors.newHighlightColor}`}
                color={brandingColors.secondaryTwoTextColor}
                fontWeight="bold"
                size={"lg"}
                placeholder="Name"
              />
            </FormControl>
            <FormControl isRequired>
              <Input
                boxShadow={`1px 1px 4px ${brandingColors.newHighlightColor}`}
                color={brandingColors.secondaryTwoTextColor}
                fontWeight="bold"
                size="lg"
                placeholder="Email"
              />
            </FormControl>
          </Box>
          <FormControl>
            <Textarea
              height={"110px"}
              boxShadow={`1px 1px 4px ${brandingColors.newHighlightColor}`}
              color={brandingColors.secondaryTwoTextColor}
              fontWeight="bold"
              size="lg"
              noOfLines={20}
              placeholder="Message"
            />
          </FormControl>
        </Grid>
        <a className="btn" href="login.html">
          Submit
        </a>
      </Box>

      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        <Text
          color={brandingColors.secondaryTextColor}
          fontSize={"3xl"}
          textAlign={"center"}
        >
          {" "}
          Visit us on our social channels!
        </Text>
        <Flex
          display={{ base: "flex" }}
          rowGap={{ base: "1rem" }}
          alignItems={"center"}
          flexDirection={{ base: "row" }}
          justifyContent={{ base: "center" }}
        >
          {socials.map((i, x) => (
            <Image
              key={x}
              data-aos={`zoom-in`}
              height={{ base: "12", lg: "20" }}
              width={{ base: "12", lg: "20" }}
              _hover={{
                transform: "scale(1.1)",
                transition: "all 200ms ease-in",
                cursor: "pointer",
              }}
              src={i}
            />
          ))}
        </Flex>
      </Box>
      <Divider />
      <Box
        display={{ base: "none", xl: "flex" }}
        alignItems="center"
        justifyContent={"center"}
        columnGap={"2rem"}
      >
        <Grid alignItems={"center"} templateColumns={"1fr 2fr 1fr"}>
          <Image
            maxW="120px"
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png`}
          />
          <Flex columnGap={"1rem"} justifyContent={"center"}>
            <NeuLink
              label={"About"}
              link="about"
              onClick={() => null}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
            <NeuLink
              link="products"
              label={"Products"}
              onClick={() => null}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
            <NeuLink
              link="token"
              label={"Tokenomics"}
              onClick={() => null}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
            <NeuLink
              link="team"
              label={"Team"}
              onClick={() => null}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
            <NeuLink
              label="Roadmap"
              link="roadmap"
              onClick={() => null}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
          </Flex>
          <Flex
            justifyContent={"flex-end"}
            columnGap={{ base: "1rem" }}
            alignItems="center"
          ></Flex>
        </Grid>
      </Box>
      <Box
        textAlign={"center"}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        rowGap={".5rem"}
        p={5}
      >
        <Text color={brandingColors.secondaryTextColor}>
          Disclaimer: Your investment may go down as well as up in value.
          Cryptocurrency is not regulated in the UK.
        </Text>
        <Text pb={{ base: "4" }} color={brandingColors.secondaryTextColor}>
          Copyright 2022 © Axle Games
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
