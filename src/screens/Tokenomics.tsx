import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";

import { brandingColors } from "../config/brandingColors";

const tokens = [
  {
    title: "BEP-20",
    sub: "BSC Token",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/bsc.webp`,
  },
  {
    title: "1 BILLION",
    sub: "Total Supply",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/supply.webp`,
  },
  {
    title: "$AXLE",
    sub: "Utility Token",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/util.webp`,
  },
];

const Tokenomics = () => {
  const aligner = (index: number) => {
    if (index === 0) return "flex-end";
    if (index === 1) return "center";
    return "flex-start";
  };

  return (
    <Box
      backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
      p={{ base: "4", lg: "16" }}
    >
      <Heading title="Tokenomics" />
      <Grid
        pt={{ base: "16" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        columnGap={"3rem"}
        rowGap={"3rem"}
        justifyContent="center"
        width={{ lg: "80%" }}
        mx={{ lg: "auto" }}
      >
        {tokens.map((t, i) => (
          <GridItem
            key={i}
            display={"flex"}
            flexDirection="row"
            borderRadius="md"
            alignItems={"center"}
            justifyContent={{ base: "center", lg: aligner(i) }}
            columnGap="1rem"
            p={2}
          >
            <Image
              maxW={{ base: "60px", xl: "80px" }}
              borderRadius={"xl"}
              src={t.img}
              data-aos={`fade-left`}
            />

            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent="flex-start"
              data-aos={`fade-right`}
            >
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
        px={{ base: "4" }}
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{ base: "1fr", lg: "1fr" }}
        columnGap={{ base: "8rem" }}
        rowGap={{ base: "2rem" }}
      >
        <Box display={"flex"} justifyContent="flex-end">
          <Box
            data-aos={`zoom-in`}
            height={{ base: "70vh" }}
            width="100%"
            borderRadius="xl"
            color={brandingColors.secondaryTextColor}
          >
            <Chart />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Tokenomics;

const Chart = () => {
  return (
    <div>
      <div id="chartdiv"></div>;
      <script src="//cdn.amcharts.com/lib/4/core.js"></script>
      <script src="//cdn.amcharts.com/lib/4/charts.js"></script>
      <script src=""></script>
    </div>
  );
};
