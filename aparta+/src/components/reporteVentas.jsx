import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";

export default function ReporteVentas({ data }) {
  // Specify the configuration items and data for the chart
  var option = {
    title: {
      text: "EChart bar chart",
      subtext: 'Data',
    },
    tooltip: {},
    legend: {
      data: ["sales"],
      bottom: "0%",
    },
    xAxis: {
      data: ["L", "M", "X", "J", "V", "S", "D"],
    },
    yAxis: {},
    series: [
      {
        name: "sales",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20, 50],
      },
    ],
  };

  return (
    <div className="p-4 rounded-3xl shadow-lg w-full min-w-96 flex items-center justify-center">
      <ReactECharts
        option={option}
        notMerge={true}
        lazyUpdate={true}
        theme={"aparta-plus"}
        className="w-full h-full"
      />
    </div>
  );
}

ReporteVentas.propTypes = {
  data: PropTypes.object,
};
