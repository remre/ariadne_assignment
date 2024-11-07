import LegendItem from '../atoms/LegendItem';

// Displays a legend indicating the meaning of different colors used in the chart.
const Legend: React.FC = () => {
  return (
    <div className="flex justify-center mb-4">
      <LegendItem color="bg-green-500" label="Above Average" />
      <LegendItem color="bg-red-500" label="Below Average" />
      <LegendItem color="bg-blue-500" label="Zero Values" />
    </div>
  );
};

export default Legend;
