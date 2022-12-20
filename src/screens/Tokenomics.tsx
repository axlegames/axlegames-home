import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Heading from "../components/Heading";

import Bsc from "../assets/token/util.png";
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
  {
    title: "10 BILLION",
    sub: "Total Supply",
    img: Supply,
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

  const LeftAligner = (i: number) => {
    if (i === 0 || i === 2) {
      return "flex-end";
    }
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
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        columnGap={"6rem"}
        rowGap={"3rem"}
        justifyContent="center"
      >
        {tokens.map((t, i) => (
          <GridItem
            key={i}
            display={"flex"}
            flexDirection="row"
            borderRadius="md"
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={{ base: "center", lg: LeftAligner(i) }}
            columnGap="1rem"
            p={2}
          >
            <Image
              maxW={{ base: "60px", xl: "80px" }}
              borderRadius={"xl"}
              src={t.img}
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
        px={{ base: "4" }}
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
    </Box>
  );
};

export default Tokenomics;
