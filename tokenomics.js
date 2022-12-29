var chart = am4core.create("chartdiv", am4charts.PieChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
chart.data = [
  {
    country: "Zeus Sale",
    value: 15,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Poseidon Sale",
    value: 25,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Hades Sale",
    value: 10,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Founding Team",
    value: 10,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Advisors and Legal team",
    value: 5,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Axle Ecosystem rewards",
    value: 15,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Referral and Bonuses",
    value: 10,
    label: am4core.color("#ffffff"),
  },
  {
    country: "Marketing and Listings",
    value: 10,
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
