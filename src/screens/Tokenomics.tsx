import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";

import Bsc from "../assets/token/bsc.png";
import Util from "../assets/token/util.png";
import Supply from "../assets/token/supply.png";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { brandingColors } from "../config/brandingColors";
import { useEffect } from "react";

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
  useEffect(() => {
    am4core.useTheme(am4themes_animated);
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "Presale",
        value: 401,
        label: am4core.color("#ffffff"),
      },
      {
        country: "Public sale",
        value: 300,
        label: am4core.color("#ffffff"),
      },
      {
        country: "Team",
        value: 200,
        label: am4core.color("#ffffff"),
      },
      {
        country: "test",
        value: 165,
        label: am4core.color("#ffffff"),
      },
      {
        country: "test2",
        value: 139,
        label: am4core.color("#ffffff"),
      },
      {
        country: "test4",
        value: 128,
        label: am4core.color("#ffffff"),
      },
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    // Disable ticks and labels
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;

    series.slices.template.innerCornerRadius = 4;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color("#ffffff");
    chart.legend.valueLabels.template.fill = am4core.color("#ffffff");
  }, []);

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
