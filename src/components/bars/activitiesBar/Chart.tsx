import React, { useEffect, useRef } from "react";
import Chart, {
  plugins,
  PointElement,
  Tooltip,
  TooltipItem,
} from "chart.js/auto";
import { callback, color } from "chart.js/helpers";
import { title } from "process";

export default function ChartComponent() {
  const canvasEl: any = useRef(null);

  const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)",
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)",
    },
  };

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 16, 0, 600);

    gradient.addColorStop(0, colors.purple.half);
    gradient.addColorStop(0.65, colors.purple.quarter);
    gradient.addColorStop(1, colors.purple.zero);

    const weight = [
      60.0, 160.2, 59.1, 61.4, 59.9, 40.2, -39.8, -18.6, -29.6, 59.2,
    ];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ];

    const data = {
      labels: labels,
      datasets: [
        {
          borderColor: "#36A2EB",
          backgroundColor: "#9BD0F5",

          label: "My First Dataset",
          data: weight,
          fill: true,
          borderWidth: 3,
          lineTension: 0.3,
          pointBackgroundColor: "green",
          pointRadius: 9,
        },
      ],
    };

    const config: any = {
      type: "line",
      data: data,
      options: {
        plugins: {
          title: {
            display: false,
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          tooltip: {
            backgroundColor: "red",
            titleSpacing: 8,
            caretSize: 0,
            padding: 40,
            yAlign:'10px',
            // xAlign:'10px'
          },
        },
        scales: {
          x: {
            // display: false,
          },
          y: {
            // display: false,
          },
          // suggestedMin: Math.min(...weight) - 1,
          // suggestedMax: Math.max(...weight) + 1,
        },
      },
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div>
      <canvas id='myChart' ref={canvasEl} height='40' />
    </div>
  );
}
