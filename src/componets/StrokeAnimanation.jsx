import React from "react";
import ReactEcharts from "echarts-for-react";

export default function StrokeAnimation({ text, fontSize }) {
  const animation = {
    graphic: {
      elements: [
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: text,
            fontSize: fontSize,
            fontWeight: "bold",
            lineDash: [0, 100],
            lineDashOffset: 0,
            fill: "transparent",
            stroke: "rgba(255, 255, 255, 0.87)",
            lineWidth: 1,
          },
          keyframeAnimation: {
            duration: 3000,
            loop: false,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: "transparent",
                  lineDashOffset: 200,
                  lineDash: [200, 0],
                },
              },
              {
                // Stop for a while.
                percent: 0.8,
                style: {
                  fill: "transparent",
                },
              },
              {
                percent: 1,
                style: {
                  fill: "rgba(255, 255, 255, 0.87)",
                },
              },
            ],
          },
        },
      ],
    },
  };

  return (
    <div>
      <ReactEcharts
        option={animation}
        style={{ height: "60px"}}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
}
