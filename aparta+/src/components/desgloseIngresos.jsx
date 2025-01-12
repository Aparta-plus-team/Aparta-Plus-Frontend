import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";

export default function DesgloseIngresos({ data }) {
  // Specify the configuration items and data for the chart
  var option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "center",
      right: "0%",
      orient: 'vertical',
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 10,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return (
    <div className="p-4 rounded-3xl shadow-lg min-w-[40%] flex items-center justify-center">
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

DesgloseIngresos.propTypes = {
  data: PropTypes.object,
};
