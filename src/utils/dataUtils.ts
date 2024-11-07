import { DataPoint } from '../types';

export const parseCSV = (text: string): DataPoint[] => {
  const rows = text.split('\n').map((row) => row.split(';'));
  return rows.slice(1).map((row) => ({
    date: row[0],
    value: parseFloat(row[1]),
  }));
};

export const calculateYearlyAverage = (data: DataPoint[]): number => {
  const validValues = data.filter((dp) => dp.value > 0);
  return validValues.length > 0
    ? validValues.reduce((acc, curr) => acc + curr.value, 0) / validValues.length
    : 0;
};

export const normalizeData = (data: DataPoint[]): DataPoint[] => {
  const maxValue = Math.max(...data.map((d) => d.value));
  return data.map((dp) => ({
    ...dp,
    value: maxValue > 0 ? (dp.value / maxValue) * 100 : 0,
  }));
};
