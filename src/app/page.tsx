'use client';
import React, { useState } from 'react';
import ChartControls from '@/components/molecules/ChartControls';
import DateRangePicker from '@/components/molecules/DateRangePicker';
import Legend from '@/components/molecules/Legend';
import Loader from '@/components/atoms/Loader';

import { useFootFallData } from '@/hooks/useFootFallData';
import { useChartConfig } from '@/hooks/useChartConfig';
import ChartComponent from '@/components/organisms/ChartComponent';
import MapComponent from '@/components/organisms/MapComponent';

// Main page component that displays footfall data using charts and maps.
// It includes controls for toggling data normalization, selecting chart types, and picking date ranges for the data displayed.

const Page: React.FC = () => {
  const [isNormalized, setIsNormalized] = useState<boolean>(false);
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  const [startDate, setStartDate] = useState<Date | null>(new Date('2021-05-03'));
  const [endDate, setEndDate] = useState<Date | null>(new Date('2021-11-03'));

  // Use custom hook to get data
  const { data: filteredData, isLoading } = useFootFallData({
    isNormalized,
    startDate,
    endDate,
  });

  // Use custom hook for chart configuration
  const { chartData, chartOptions } = useChartConfig(filteredData, chartType);

  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  // Map initial view state
  const initialViewState = {
    longitude: 11.5895,
    latitude: 48.1159,
    zoom: 18,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Footfall Data Visualization</h1>
      <ChartControls
        isNormalized={isNormalized}
        chartType={chartType}
        toggleNormalization={() => setIsNormalized(!isNormalized)}
        switchChartType={() => setChartType(chartType === 'bar' ? 'line' : 'bar')}
      />

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={(date) => setStartDate(date)}
        onEndDateChange={(date) => setEndDate(date)}
      />
      <Legend />

      {isLoading ? (
        <Loader />
      ) : filteredData.length > 0 ? (
        <ChartComponent data={chartData} options={chartOptions} chartType={chartType} />
      ) : (
        <div className="text-center text-red-500">
          No data available for the selected date range.
        </div>
      )}

      <div className="mt-8">
        {MAPBOX_TOKEN ? (
          <MapComponent initialViewState={initialViewState} mapboxToken={MAPBOX_TOKEN} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Page;
