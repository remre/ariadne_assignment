import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DateRangePickerProps } from '@/types';

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  return (
    <div className="m-4 items-center flex justify-center">
      <DatePicker
        selected={startDate ?? undefined}
        onChange={(date) => onStartDateChange(date as Date)}
        selectsStart
        startDate={startDate ?? undefined}
        endDate={endDate ?? undefined}
        className="border p-2 rounded mr-2"
        placeholderText="Start Date"
      />
      <DatePicker
        selected={endDate ?? undefined}
        onChange={(date) => onEndDateChange(date as Date)}
        selectsEnd
        startDate={startDate ?? undefined}
        endDate={endDate ?? undefined}
        className="border p-2 rounded"
        placeholderText="End Date"
      />
    </div>
  );
};

export default DateRangePicker;
