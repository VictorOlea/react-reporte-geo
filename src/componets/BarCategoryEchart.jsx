import React from "react";
import ReactEcharts from "echarts-for-react";

export default function BarCategoryEchart() {
  const barCategory = {
    title: {
      text: "1º Semestre",
      textStyle: { color: "rgba(255, 255, 255, 0.87)" },
      left: "10%",
    },
    legend: {
      textStyle: { color: "rgba(255, 255, 255, 0.87)" },
    },
    tooltip: { trigger: "axis" },
    dataset: {
      source: [
        ["product", "2020", "2021", "2022"],
        ["Enero", 43.3, 85.8, 93.7],
        ["Febrero", 83.1, 73.4, 55.1],
        ["Marzo", 86.4, 65.2, 82.5],
        ["Abril", 72.4, 53.9, 39.1],
        ["Mayo", 66.6, 75.2, 52.5],
        ["Junio", 92.5, 83.3, 49.4],
      ],
    },
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: { color: "rgba(255,255,255, 0.87" },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: "rgba(255, 255, 255, 0.87)" },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
  };

  return (
    <ReactEcharts
      option={barCategory}
      style={{ height: "400px", width: "1000px" }}
      opts={{ renderer: "svg" }}
    />
  );
}
