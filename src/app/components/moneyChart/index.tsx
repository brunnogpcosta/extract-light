import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement);

interface IMoneyChart {
  data: any;
}

const MoneyChart: React.FC<IMoneyChart> = ({ data }) => {
  const options: any = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Dataset',
      },
    },
  };

  return (
    <div className='w-[300px] h-[300px]'>
      <Pie options={options} data={data} />
    </div>
  );
};

export default MoneyChart;
