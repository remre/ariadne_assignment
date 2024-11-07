import { parseCSV } from '@/utils/dataUtils';
import { DataPoint } from '@/types';

// check if the parseCSV function is working correctly
describe('parseCSV', () => {
  it('should parse CSV text into an array of DataPoint objects', () => {
    const csvText = 'date;value\n2021-01-01;100\n2021-01-02;200';
    const expectedResult: DataPoint[] = [
      { date: '2021-01-01', value: 100 },
      { date: '2021-01-02', value: 200 },
    ];
    const result = parseCSV(csvText);
    expect(result).toEqual(expectedResult);
  });

  it('should handle empty CSV text', () => {
    const csvText = '';
    const result = parseCSV(csvText);
    expect(result).toEqual([]);
  });
});
