import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChartControls from '@/components/molecules/ChartControls';

describe('ChartControls', () => {
  const toggleNormalization = jest.fn();
  const switchChartType = jest.fn();

  it('should render buttons with correct labels', () => {
    render(
      <ChartControls
        isNormalized={false}
        chartType="bar"
        toggleNormalization={toggleNormalization}
        switchChartType={switchChartType}
      />,
    );

    expect(screen.getByText('Toggle Normalized')).toBeInTheDocument();
    expect(screen.getByText('Switch to Line Chart')).toBeInTheDocument();
  });

  it('should call toggleNormalization when toggle button is clicked', () => {
    render(
      <ChartControls
        isNormalized={false}
        chartType="bar"
        toggleNormalization={toggleNormalization}
        switchChartType={switchChartType}
      />,
    );

    fireEvent.click(screen.getByText('Toggle Normalized'));
    expect(toggleNormalization).toHaveBeenCalledTimes(1);
  });

  it('should call switchChartType when switch button is clicked', () => {
    render(
      <ChartControls
        isNormalized={false}
        chartType="bar"
        toggleNormalization={toggleNormalization}
        switchChartType={switchChartType}
      />,
    );

    fireEvent.click(screen.getByText('Switch to Line Chart'));
    expect(switchChartType).toHaveBeenCalledTimes(1);
  });
});
