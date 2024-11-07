import { DataPoint } from '../types';
import { formatDate } from '../utils/dateUtils';
import { calculateYearlyAverage } from '../utils/dataUtils';

export const useChartConfig = (
  data: DataPoint[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  chartType: 'bar' | 'line',
) => {
  const yearlyAverage = calculateYearlyAverage(data);

  const chartData = {
    labels: data.map((dp) => formatDate(dp.date)),
    datasets: [
      {
        label: 'Footfall',
        data: data.map((dp) => dp.value),
        backgroundColor: data.map((dp) =>
          dp.value === 0 ? 'blue' : dp.value > yearlyAverage ? 'green' : 'red',
        ),
        minBarLength: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Footfall Data',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 16,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return { chartData, chartOptions };
};
