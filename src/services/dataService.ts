import { DataPoint } from '../types';
import { parseCSV } from '../utils/dataUtils';

export const fetchCSVData = async (): Promise<DataPoint[]> => {
  try {
    const response = await fetch('/Footfall_1.csv');
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV data: ${response.status} ${response.statusText}`);
    }
    const text = await response.text();
    return parseCSV(text);
  } catch (error) {
    console.error('Error fetching or parsing CSV data:', error);
    throw error;
  }
};
