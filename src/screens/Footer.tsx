import {
  Box,
  Divider,
  Flex,
  FormControl,
  Grid,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

import Heading from "../components/Heading";
import NeuButton from "../components/NeuButton";
import { brandingColors } from "../config/brandingColors";

const Footer = () => {
  return (
    <Flex
      bg={brandingColors.bgColor}
      fontFamily={"quicksand"}
      fontWeight="bold"
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
      rowGap={{ base: "12rem", md: "5rem" }}
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
        bg={brandingColors.fgColor}
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
        <NeuButton
          label={"Submit"}
          onClick={() => null}
          bg={brandingColors.neuPrimaryBg}
          shadow={brandingColors.newPrimaryShadow}
        />
      </Box>

      <Divider mx="auto" width="90%" />
      <Box mx="auto" width={"90%"}></Box>

      <Text pb={{ base: "4" }} color={brandingColors.secondaryTextColor}>
        Copyright 2022 © Axle Games
      </Text>
    </Flex>
  );
};

export default Footer;
