import ReactEchart from "echarts-for-react";
import * as echarts from "echarts";
import geojson from "../assets/geoJsonSextaRegion.json";

echarts.registerMap("6region", geojson);

export default function MapReactEchart() {
  const mapChart = {
    title: {
      text: "Región de O'higgins - Población",
      subtext: "Data from www.bcn.cl",
      sublink: "https://www.bcn.cl/siit/nuestropais/region6",
      left: "right",
      textStyle: { color: "rgba(255, 255, 255, 0.87)" },
      subtextStyle: { color: "rgba(255, 255, 255, 0.87" },
    },
    tooltip: {
      trigger: "item",
      showDelay: 0,
      transitionDuration: 0.2,
    },
    visualMap: {
      left: "right",
      min: 3000,
      max: 350000,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
      text: ["High", "Low"],
      calculable: true,
      textStyle: { color: "rgba(255, 255, 255, 0.87" },
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "left",
      top: "top",
      borderColor: "rgba(255, 255, 255, 0.87",
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
      iconStyle: { borderColor: "rgba(255, 255, 255, 0.87" },
      emphasis: { iconStyle: { borderColor: "rgba(255, 255, 255, 0.87" } },
    },
    series: [
      {
        name: "Población",
        type: "map",
        roam: true,
        map: "6region",
        label: {
          show: true,
          color: "rgba(255, 255, 255, 0.87",
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        data: [
          { name: "Codegua", value: 12988 },
          { name: "Coinco", value: 7359 },
          { name: "Coltauco", value: 19597 },
          { name: "Las Cabras", value: 24640 },
          { name: "Machalí", value: 52505 },
          { name: "Malloa", value: 13407 },
          { name: "Peumo", value: 14313 },
          { name: "Pichidegua", value: 19714 },
          { name: "Quinta de Tilcoco", value: 13002 },
          { name: "Rancagua", value: 241774 },
          { name: "Rengo", value: 58825 },
          { name: "Requínoa", value: 27968 },
          { name: "Mostazal", value: 25343 },
          { name: "San Vicente", value: 46766 },
          { name: "La Estrella", value: 3041 },
          { name: "Litueche", value: 6294 },
          { name: "Marchigüe", value: 7308 },
          { name: "Navidad", value: 6641 },
          { name: "Paredones", value: 6188 },
          { name: "Pichilemu", value: 16394 },
          { name: "Chépica", value: 15037 },
          { name: "Chimbarongo", value: 35399 },
          { name: "Lolol", value: 6811 },
          { name: "Nancagua", value: 17833 },
          { name: "Palmilla", value: 12482 },
          { name: "Peralillo", value: 11007 },
          { name: "Placilla", value: 8738 },
          { name: "Pumanque", value: 3421 },
          { name: "San Fernando", value: 73973 },
          { name: "Santa Cruz", value: 37855 },
          { name: "Doñihue", value: 20887 },
          { name: "Olivar", value: 13608 },
          { name: "Graneros", value: 33437 },
        ],
      },
    ],
  };

  return (
    <ReactEchart
      option={mapChart}
      style={{
        height: "600px",
        width: "1000px",
        border: "2px solid rgba(255, 255, 255, 0.87)",
      }}
      opts={{ renderer: "svg" }}
    />
  );
}
