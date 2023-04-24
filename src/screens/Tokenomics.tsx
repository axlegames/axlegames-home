import Heading from "../components/Heading";

import { brandingColors, brandingFonts } from "../config/brandingColors";
import { Box, Image, useMediaQuery } from "@chakra-ui/react";

const token = [
  {
    main: "BEP-20",
    sub: "BSC Token",
    url: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/bsc.webp",
  },
  {
    main: "1B",
    sub: "Total Supply",
    url: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/supply.webp",
  },
  {
    main: "$AXLE",
    sub: "Utility Token",
    url: "https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/util.webp",
  },
];

const Tokenomics = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");

  return (
    <Box
      bg={brandingColors.bgColor}
      py={{ base: "12" }}
      px={{ base: "4", lg: "16" }}
    >
      <Heading title="Tokenomics" />
      <Box
        maxH={{ base: "166vh", md: "130vh", lg: "110vh", xl: "100vh" }}
        id="counter-section"
      >
        <Box pt={{ base: "4", lg: "16" }} px={12}>
          <Box style={{ justifyContent: "center" }} className="row mp-none">
            {token.map((t, i) => (
              <Box key={i} className="col-lg-3 col-md-6 col-sm-6">
                <Box
                  backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
                  className="single-item text-center"
                >
                  <Box className="img-area">
                    <Image
                      style={{ padding: "1rem" }}
                      src={t.url}
                      alt="image"
                    />
                  </Box>
                  <Box
                    fontFamily={brandingFonts.subFont}
                    fontSize={{ base: "2xl", md: "3xl" }}
                    color={brandingColors.primaryTextColor}
                    fontWeight="bold"
                  >
                    {t.main}
                  </Box>
                  <Box
                    fontSize={{ base: "md", md: "lg" }}
                    fontFamily={brandingFonts.headingFont}
                    style={{ fontFamily: "" }}
                    color={brandingColors.secondaryTwoTextColor}
                  >
                    {t.sub}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            minH={{ base: "80vh", lg: "60vh" }}
            overflow={"hidden"}
            py={8}
          >
            <iframe
              style={{ minHeight: isMobile ? "100vh" : "80vh" }}
              title="charts"
              srcDoc={chart}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tokenomics;

const chart = `
<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>AxleGames</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
      * {
        font-family: Staatliches;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
      #chartdiv {
        margin: auto;
        display: block;
        min-height: 80vh;
        max-width: 100vw;
        overflow: hidden;
        display: flex;
      }
    </style>
  </head>

  <body>
    <div id="chartdiv"></div>
    <script src="//cdn.amcharts.com/lib/4/core.js"></script>
    <script src="//cdn.amcharts.com/lib/4/charts.js"></script>
    <script src="//www.amcharts.com/lib/4/themes/animated.js"></script>

    <script>
      am4core.useTheme(am4themes_animated);
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.data = [
        {
          category: "Presale",
          value: 25,
          label: am4core.color("#ffffff"),
        },
        {
          category: "Ecosystem and Staking Rewards",
          value: 30,
          label: am4core.color("#ffffff"),
        },
        {
          category: "Advisors and Partners",
          value: 4,
          label: am4core.color("#ffffff"),
        },
        {
          category: "CEX listings",
          value: 6,
          label: am4core.color("#ffffff"),
        },
        {
          category: "Marketing",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          category: "NULS SCO",
          value: 5,
          label: am4core.color("#ffffff"),
        },
        {
          category: "Liquidity",
          value: 12,
          label: am4core.color("#ffffff"),
        },
        {
          category: "Airdrops and Giveaways",
          value: 3,
          label: am4core.color("#ffffff"),
        },
      ];

      chart.radius = am4core.percent(40);
      chart.innerRadius = am4core.percent(20);
      chart.startAngle = 180;
      chart.endAngle = 360;

      var series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = "value";
      series.dataFields.category = "category";

      // Disable ticks and labels
      series.labels.template.disabled = true;
      series.ticks.template.disabled = true;

      series.slices.template.innerCornerRadius = 2;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;

      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
      series.slices.template.draggable = false;

      chart.legend = new am4charts.Legend();
      chart.legend.labels.template.fill = am4core.color("#ffffff");
      chart.legend.valueLabels.template.fill = am4core.color("#F46B15");
      chart.legend.align = "center";

      console.log(chart.legend);
    </script>
  </body>
</html>

`;
