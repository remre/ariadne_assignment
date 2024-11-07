import { useEffect, useState } from 'react';
import { DataPoint, UseFootfallDataProps } from '@/types';
import { fetchCSVData } from '@/services/dataService';
import { normalizeData } from '@/utils/dataUtils';
import { parseDate } from '@/utils/dateUtils';

// hook to fetch and filter footfall data
export const useFootFallData = ({ isNormalized, startDate, endDate }: UseFootfallDataProps) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const csvData = await fetchCSVData();
        setData(csvData);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
        setData([]);
        console.error('Error loading data:', err);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const displayData = isNormalized ? normalizeData(data) : data;

  const filteredData = displayData.filter((dp) => {
    const date = parseDate(dp.date);
    return (startDate ? date >= startDate : true) && (endDate ? date <= endDate : true);
  });

  return {
    data: filteredData,
    isLoading,
    error,
  };
};
