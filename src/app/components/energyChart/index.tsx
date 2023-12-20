import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IEnergyChart{
  data: any
}

const EnergyChart: React.FC<IEnergyChart> = ({ data }) => {
  const options:any = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: 'Dataset',
        },
    },
};


return <Bar options={options} data={data} />;
};

export default EnergyChart;
