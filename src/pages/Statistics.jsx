import React from "react";
import { CommonHero } from "../component/CommonHero";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
  const data = {
    labels: [
      "assignment : 1",
      "assignment : 2",
      "assignment : 3",
      "assignment : 4",
      "assignment : 5",
      "assignment : 6",
    ],
    datasets: [
      {
        data: [58, 59, 50, 32, 58, 55],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <CommonHero>statistics</CommonHero>
      <div className="container my-10 md:my-20 flex justify-center items-center">
        <div className="w-full h-full md:w-1/2 md:h-1/2">
          <Pie data={data} />
        </div>
      </div>
    </>
  );
};

export default Statistics;
