import { Box, Grid, GridItem, Image, Progress, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";
import PlaceHoder from "../assets/avatar.jpg";

import Pie from "../assets/pie.svg";
import { brandingColors } from "../config/brandingColors";

const tokens = [
  {
    title: "BEP-20",
    sub: "BSC Token",
  },

  {
    title: "10 BILLION",
    sub: "Total Supply",
  },
  {
    title: "$AXLE",
    sub: "Utility Token",
  },
];

const pie = [1, 2, 3, 4, 5, 6, 7];

const Tokenomics = () => {
  return (
    <Box p={{ base: "4", lg: "16" }}>
      <Heading title="Tokenomics" />
      <Grid
        alignItems={"center"}
        justifyContent="space-evenly"
        py={{ base: "16" }}
        gridTemplateColumns="1fr 1fr 1fr"
        columnGap={"1rem"}
      >
        {tokens.map((t, i) => (
          <GridItem
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            rowGap={"1rem"}
            textAlign={"center"}
          >
            <Image
              maxW={{ xl: "200px" }}
              borderRadius={"xl"}
              src={PlaceHoder}
            />
            <Box>
              <Text
                lineHeight={"1"}
                fontSize={{ base: "md", lg: "3xl" }}
                color={brandingColors.primaryTextColor}
              >
                {t.title}
              </Text>
              <Text
                fontSize={{ base: "sm" }}
                fontWeight={"normal"}
                color={brandingColors.secondaryTextColor}
              >
                {t.sub}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Grid
        p={{ base: "4", lg: "16" }}
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        columnGap={{ base: "8rem" }}
        rowGap={{ base: "2rem" }}
      >
        <Box display={"flex"} justifyContent="flex-end">
          <Image src={Pie} />
        </Box>
        <Box
          justifyContent={"flex-start"}
          display={"flex"}
          flexDirection="column"
        >
          {pie.map((p, i) => (
            <Box my={1}>
              <Text>hello</Text>
              <Progress
                hasStripe
                borderRadius={"xl"}
                value={(i + 1) * 10}
                height={"12"}
                color={"blue.100"}
              />
            </Box>
          ))}
        </Box>
      </Grid>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        textAlign="center"
        rowGap={{ base: "2rem", md: "0" }}
      >
        <Text>
          The total maximum supply of AXLE tokens is 10,000,000,000 (10
          Billion).
        </Text>
        <Text>
          AXLE tokens are based on the BEP20 smart contract standard and run on
          the Binance Smart Chain.
        </Text>
      </Box>
    </Box>
  );
};

export default Tokenomics;
