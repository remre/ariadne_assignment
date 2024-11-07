import Button from '../atoms/Button';
import { ChartControlsProps } from '@/types/index';

// Provides control buttons to toggle data normalization and switch between chart types.
const ChartControls: React.FC<ChartControlsProps> = ({
  isNormalized,
  chartType,
  toggleNormalization,
  switchChartType,
}) => {
  return (
    <div className="mb-4  mr-2 flex items-center justify-center">
      <Button onClick={toggleNormalization}>Toggle {isNormalized ? 'Raw' : 'Normalized'}</Button>
      <Button onClick={switchChartType}>
        Switch to {chartType === 'bar' ? 'Line Chart' : 'Bar Chart'}
      </Button>
    </div>
  );
};

export default ChartControls;
