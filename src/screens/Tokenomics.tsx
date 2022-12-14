import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";

import Bsc from "../assets/token/bsc.png";
import Util from "../assets/token/util.png";
import Supply from "../assets/token/supply.png";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { brandingColors } from "../config/brandingColors";

const tokens = [
  {
    title: "BEP-20",
    sub: "BSC Token",
    img: Bsc,
  },

  {
    title: "10 BILLION",
    sub: "Total Supply",
    img: Supply,
  },
  {
    title: "$AXLE",
    sub: "Utility Token",
    img: Util,
  },
];

const Tokenomics = () => {
  am4core.useTheme(am4themes_animated);
  var chart = am4core.create("chartdiv", am4charts.PieChart);
  chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

  chart.data = [
    {
      country: "Presale",
      value: 401,
    },
    {
      country: "Public sale",
      value: 300,
    },
    {
      country: "Team",
      value: 200,
    },
    {
      country: "Presale",
      value: 165,
    },
    {
      country: "Publicsale",
      value: 139,
    },
    {
      country: "Team",
      value: 128,
    },
  ];
  chart.radius = am4core.percent(70);
  chart.innerRadius = am4core.percent(40);
  chart.startAngle = 180;
  chart.endAngle = 360;

  var series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = "value";
  series.dataFields.category = "country";

  series.slices.template.cornerRadius = 10;
  series.slices.template.innerCornerRadius = 7;
  series.slices.template.draggable = true;
  series.slices.template.inert = true;

  series.hiddenState.properties.startAngle = 90;
  series.hiddenState.properties.endAngle = 90;

  chart.legend = new am4charts.Legend();

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
            key={i}
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            rowGap={"1rem"}
            textAlign={"center"}
          >
            <Image maxW={{ xl: "200px" }} borderRadius={"xl"} src={t.img} />
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
        gridTemplateColumns={{ base: "1fr", lg: "1fr" }}
        columnGap={{ base: "8rem" }}
        rowGap={{ base: "2rem" }}
      >
        <Box display={"flex"} justifyContent="flex-end">
          <Box
            height={{ base: "50vh", lg: "70vh" }}
            width="100%"
            bg={brandingColors.fgColor}
            borderRadius="xl"
            color={brandingColors.secondaryTextColor}
            id="chartdiv"
          ></Box>
        </Box>
      </Grid>
      <Box
        alignItems={"center"}
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        textAlign="center"
        rowGap={{ base: "2rem", md: "0" }}
        color={brandingColors.secondaryTextColor}
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
