import ReactEchart from "echarts-for-react";
import Mapa from "../assets/map_6_region.svg";
import * as echarts from "echarts";

// fetch(Mapa)
//   .then((response) => response.text())
//   .then((svg) => document.body.insertAdjacentHTML("afterbegin", svg));

export default function MapReactEchart() {
  echarts.registerMap("6region_svg", { svg: svg });

  const mapChart = {
    title: {
      text: "Sensores Activos",
      textStyle: { color: "rgba(255, 255, 255, 0.87)" },
    },
    tooltip: {},
    geo: {
      tooltip: {
        show: true,
      },
      map: "6region_svg",
      roam: false,
    },
    series: {
      type: "effectScatter",
      coordinateSystem: "geo",
      geoIndex: 0,
      symbolSize: function (params) {
        return (params[2] / 100) * 15 + 5;
      },
      itemStyle: {
        color: "#b02a02",
      },
      encode: {
        tooltip: 2,
      },
      data: [
        [280, 280, 100],
        [80, 100, 30],
        [450, 350, 80],
        [500, 200, 61],
        [30, 250, 70],
        [120, 320, 81],
      ],
    },
  };

  return (
    <div>
      {/* <ReactEchart
        option={mapChart}
        style={{ height: "400px", width: "600px", border: "2px solid white" }}
        opts={{ renderer: "svg" }}
      /> */}
      {/* <img src={Mapa} alt="Mapa" /> */}
    </div>
  );
}
