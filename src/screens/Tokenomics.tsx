import Heading from "../components/Heading";

import { brandingColors } from "../config/brandingColors";
import { Box } from "@chakra-ui/react";
import useIframeContentHeight from "react-use-iframe-content-height";

const Tokenomics = () => {
  const [iframeRef, iframeHeight] = useIframeContentHeight();
  return (
    <Box bg={brandingColors.bgColor} p={{ base: "4", lg: "16" }}>
      <Heading title="Tokenomics" />
      <iframe
        ref={iframeRef}
        height={iframeHeight}
        title="charts"
        srcDoc={chart}
      />
    </Box>
  );
};

export const chart = `
<!DOCTYPE html>
<html lang="zxx">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>AxleGames</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Shantell+Sans:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
      * {
          font-family: Shantell Sans;
      }
      #chartdiv {
        min-height:36vh;
        overflow:hidden;
      }
      body{
      }
      @media only screen and (min-width:840px){
      #chartdiv {
          min-height:44vh;
          overflow:hidden;
        }
      } 
    </style>

    <link rel="shortcut icon" href="images/fav.png" type="image/x-icon" />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/jquery-ui.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/fontawesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/slick.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/magnific-popup.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/nice-select.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/animate.css"
    />
    <link
      rel="stylesheet"
      href="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/css/style.css"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik+Iso&family=Shantell+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Silkscreen&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <!-- start preloader -->
    <div class="preloader" id="preloader"></div>
    <!-- end preloader -->

    <!-- Counter In start -->
    <section id="counter-section">
      <div class="overlay pt-120 pb-120">
        <div class="container">
          <div style="justify-content:center" class="row mp-none">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    style="padding:1rem"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/bsc.webp"
                    alt="image"
                  />
                </div>
                <h3 style="font-family:Staatliches">BEP-20</h3>
                <p style="font-family:Shantell Sans">BSC Token</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    style="padding:1rem"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/supply.webp"
                    alt="image"
                  />
                </div>
                <h3 style="font-family:Staatliches">1B</h3>
                <p style="font-family:Shantell Sans">Total Supply</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="single-item text-center">
                <div class="img-area">
                  <img
                    style="padding:1rem"
                    src="https://axlegames.s3.ap-south-1.amazonaws.com/assets/token/util.webp"
                    alt="image"
                  />
                </div>
                <h3 style="font-family:Staatliches">$AXLE</h3>
                <p style="font-family:Shantell Sans">Utility Token</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div margin-top:2rem" id="chartdiv"></div>
      </section>



    <script src="//cdn.amcharts.com/lib/4/core.js"></script>
    <script src="//cdn.amcharts.com/lib/4/charts.js"></script>
    <script>
      var chart = am4core.create("chartdiv", am4charts.PieChart);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.data = [
         {
          country: "Private Sale",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Public Sale",
          value: 20,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Founding Team",
          value: 15,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Advisors and Legal team",
          value: 5,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Axle Ecosystem rewards",
          value: 20,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Referral and Bonuses",
          value: 10,
          label: am4core.color("#ffffff"),
        },
        {
          country:"NULS SCO",
          value:5,
          label: am4core.color("#ffffff"),
        },
        {
          country: "Marketing and Listings",
          value: 15,
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
      series.slices.template.draggable = false;

      chart.legend = new am4charts.Legend();
      chart.legend.labels.template.fill = am4core.color("#ffffff");
      chart.legend.valueLabels.template.fill = am4core.color("#ffffff");
    </script>

    </section>
    <!-- Counter In end -->

    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery-3.5.1.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/bootstrap.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/slick.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.nice-select.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/fontawesome.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.counterup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.waypoints.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/jquery.magnific-popup.min.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/wow.js"></script>
    <script src="https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/js/main.js"></script>
  </body>
</html>
`;

export default Tokenomics;
