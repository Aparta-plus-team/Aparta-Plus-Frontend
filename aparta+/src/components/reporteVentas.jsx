import { useState } from "react";
import ReactECharts from "echarts-for-react";
import PropTypes from "prop-types";

export default function ReporteVentas({ data }) {
  const [timeframe, setTimeframe] = useState("Mensual");
  const [selectedPeriod, setSelectedPeriod] = useState("Enero");

  // Opciones para los dropdowns
  const timeframeOptions = ["Mensual", "Anual"];
  const periodOptions = {
    Mensual: ["Diciembre", "Noviembre", "Octubre", "Septiembre", "Agosto", "Julio", "Junio", "Mayo", "Abril", "Marzo", "Febrero", "Enero"],
    Anual: ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000"],
  };

  // Configuración dinámica del gráfico
  const option = {
    title: {
      text: `Reporte de Ventas - ${timeframe}`,
      subtext: `Período: ${selectedPeriod}`,
    },
    tooltip: {},
    legend: {
      data: ["sales"],
      bottom: "0%",
    },
    xAxis: {
      data: timeframe === "Mensual" ? ["L", "M", "X", "J", "V", "S", "D"] : ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    },
    yAxis: {},
    series: [
      {
        name: "sales",
        type: "bar",
        data:
          timeframe === "Mensual"
            ? [5, 20, 36, 10, 10, 20, 50]
            : [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
      },
    ],
  };

  return (
    <div className="p-4 rounded-3xl shadow-lg w-full min-w-96">
      {/* Dropdowns */}
      <div className="flex justify-end mb-4">
        {/* Timeframe Selector */}
        <select
          className="border border-gray-300 rounded-md px-3 py-2 mr-2"
          value={timeframe}
          onChange={(e) => {
            setTimeframe(e.target.value);
            setSelectedPeriod(periodOptions[e.target.value][0]); // Reset selected period
          }}
        >
          {timeframeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Period Selector */}
        <select
          className="border border-gray-300 rounded-md px-3 py-2"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          {periodOptions[timeframe].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Gráfico */}
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
