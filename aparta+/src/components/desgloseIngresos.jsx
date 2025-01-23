import { gql, useQuery } from "@apollo/client";
import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";
import { useState } from "react";

const LLENAR_REPORTE_VENTAS = gql`
  query llenarReporteVentas($userId: UUID!) {
    gananciaPropiedads(userId: $userId) {
      ganancia
      nombrePropiedad
    }
  }
`;

export default function DesgloseIngresos() {
  const [reporteVentas, setReporteVentas] = useState([{}]);

  useQuery(LLENAR_REPORTE_VENTAS, {
    variables: { userId: localStorage.getItem("userId") },
    onCompleted: (data) => {
      setReporteVentas(
        data.gananciaPropiedads.map((entry) => ({
          value: entry.ganancia,
          name: entry.nombrePropiedad,
        }))
      );
    },
  });

  // Specify the configuration items and data for the chart
  var option = {
    title: {
      text: "EChart pie chart",
      subtext: "Data",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "center",
      right: "0%",
      orient: "vertical",
    },
    series: [
      {
        name: "Ingresos de:",
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
        data: reporteVentas,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-3xl shadow-lg min-w-[40%] flex items-center justify-center">
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
