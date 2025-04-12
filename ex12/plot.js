document.addEventListener("DOMContentLoaded", function () {
  let categories = ["Category A", "Category B", "Category C", "Category D"];
  let values = [50, 75, 100, 125];
  let barData = [
    {
      x: categories,
      y: values,
      type: "bar",
      marker: { color: ["red", "blue", "green", "orange"] },
    },
  ];
  let barLayout = {
    title: "Bar Chart Example",
    xaxis: { title: "Categories" },
    yaxis: { title: "Values" },
  };
  Plotly.newPlot("barChart", barData, barLayout);
  let lineData = [
    {
      x: categories,
      y: values,
      type: "scatter",
      mode: "lines+markers",
      line: { color: "purple", width: 2 },
      marker: { color: "black", size: 8 },
    },
  ];
  let lineLayout = {
    title: "Line Chart Example",
    xaxis: { title: "Categories" },
    yaxis: { title: "Values" },
  };
  Plotly.newPlot("lineChart", lineData, lineLayout);
  let pieData = [
    {
      labels: categories,
      values: values,
      type: "pie",
      marker: { colors: ["red", "blue", "green", "orange"] },
    },
  ];
  let pieLayout = { title: "Pie Chart Example" };
  Plotly.newPlot("pieChart", pieData, pieLayout);
  let donutData = [
    {
      labels: categories,
      values: values,
      type: "pie",
      hole: 0.4,
      marker: { colors: ["red", "blue", "green", "orange"] },
    },
  ];
  let donutLayout = { title: "Donut Chart Example" };
  Plotly.newPlot("donutChart", donutData, donutLayout);
});
