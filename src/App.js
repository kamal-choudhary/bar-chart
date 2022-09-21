import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function colorize(opaque) {
  return (ctx) => {
    const v = ctx.parsed.y;
    const c = v === 7.5 ? "#41D5F8" : v === 1 ? "#C4C4C4" : "#9EEAFB";
    return c;
  };
}
export const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Helment and vest detection",
    },
  },
  elements: {
    bar: {
      backgroundColor: colorize(false),
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      min: 0,
      max: 15,
      ticks: {
        stepSize: 5,
      },
    },
  },
};

const labels = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [
        15, 7, 11, 3, 7, 9, 8, 12, 8, 11, 3, 7, 9, 7.5, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1,
      ],
    },
  ],
};

export default function App() {
  return (
    <div
      style={{
        width: "800px",
        height: "500px",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}
