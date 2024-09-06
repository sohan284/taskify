import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

const CustomChart = ({ title, series, labels }) => {
  const [options] = useState({
    chart: {
      type: "donut",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div className="">
      <p className="text-lg font-medium font m-5  text-gray-500">{title}</p>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
     <div className="m-5 text-gray-500 font-medium">
     {labels?.map((label) => (
        <div className="flex justify-between my-2">
           <BusinessCenterIcon  /><p>{label}</p> <p>23</p>
        </div>
      ))}
     </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default CustomChart;
