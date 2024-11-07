/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChartComponentProps } from '@/types/index';
import { Chart, registerables } from 'chart.js';
import dynamic from 'next/dynamic';
import Loader from '../atoms/Loader';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
  loading: () => <Loader />,
});
const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
  loading: () => <Loader />,
});

Chart.register(...registerables);

const ChartComponent: React.FC<ChartComponentProps> = ({ data, options, chartType }) => {
  return chartType === 'bar' ? (
    <Bar data={data} options={options} />
  ) : (
    <Line data={data} options={options} />
  );
};

export default ChartComponent;
