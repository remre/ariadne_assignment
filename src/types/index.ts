/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export interface ChartComponentProps {
  data: any;
  options: any;
  chartType: 'bar' | 'line';
}

export interface ChartControlsProps {
  isNormalized: boolean;
  chartType: 'bar' | 'line';
  toggleNormalization: () => void;
  switchChartType: () => void;
}
//  Represents a single data point in the footfall data.

export interface DataPoint {
  date: string;
  value: number;
}

export interface DateRangePickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
}

//  Props for the MapComponent

export interface LegendItemProps {
  color: string;
  label: string;
}
export interface MapComponentProps {
  initialViewState: {
    longitude: number;
    latitude: number;
    zoom: number;
  };
  mapboxToken: string;
}
// Props for the ErrorBoundary component
export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface UseFootfallDataProps {
  isNormalized: boolean;
  startDate: Date | null;
  endDate: Date | null;
}
