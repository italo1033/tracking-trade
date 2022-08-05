
import React, {useState} from "react";
import ReactApexChart from "react-apexcharts";

export default function ChartPresence () {
  const [state, setState]=useState({
    series: [{
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    }, {
      name: 'Social Media',
      type: 'column',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
    },

  })
  return <ReactApexChart options={state.options} series={state.series} type="line" height={'100%'} width={'100%'}/>;
};

