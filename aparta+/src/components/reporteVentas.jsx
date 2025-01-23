import { useState } from "react";
import ReactECharts from "echarts-for-react";
import { gql, useQuery } from "@apollo/client";

const LLENAR_REPORTE_VENTAS = gql`
query llenarReporteVentas($userId: UUID!, $year: Int!) {
  reporteVentas(userId: $userId, year: $year) {
    ganancia
    mes
  }
}
`;

function mapVentasToMonths(data) {
  const monthlyGains = Array(12).fill(0);

  data.reporteVentas.forEach(entry => {
    monthlyGains[entry.mes - 1] += entry.ganancia;
  });

  return monthlyGains;
}

export default function ReporteVentas() {
  const [timeframe] = useState("Anual");
  const [selectedPeriod, setSelectedPeriod] = useState("2025");
  const [reporteVentas, setReporteVentas] = useState([]);
  
  useQuery(LLENAR_REPORTE_VENTAS, {
    variables: { userId: localStorage.getItem("userId"), year: parseInt(selectedPeriod) },
    onCompleted: (data) => {
      setReporteVentas(mapVentasToMonths(data));
    },
  });
  
  const periodOptions = {
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
      data: ["Ventas"],
      bottom: "0%",
    },
    xAxis: {
      data: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    },
    yAxis: {},
    series: [
      {
        name: "Ventas",
        type: "bar",
        data: reporteVentas,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-3xl shadow-lg w-full min-w-96">
      {/* Dropdowns */}
      <div className="flex justify-end mb-4">

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