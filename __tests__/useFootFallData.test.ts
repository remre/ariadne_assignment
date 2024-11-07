import { renderHook, act } from '@testing-library/react';
import { useFootFallData } from '@/hooks/useFootFallData';
import { fetchCSVData } from '@/services/dataService';
import { DataPoint } from '@/types';

jest.mock('@/services/dataService');

const mockData: DataPoint[] = [
  { date: '2021-01-01', value: 100 },
  { date: '2021-01-02', value: 200 },
];

describe('useFootFallData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch and return data', async () => {
    (fetchCSVData as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() =>
      useFootFallData({ isNormalized: false, startDate: null, endDate: null }),
    );

    expect(result.current.isLoading).toBe(true);

    // Wait for the hook to finish updating
    await act(async () => {
      // Wait for the state updates
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('should set error state when data fetching fails', async () => {
    (fetchCSVData as jest.Mock).mockRejectedValue(new Error('Network Error'));

    const { result } = renderHook(() =>
      useFootFallData({ isNormalized: false, startDate: null, endDate: null }),
    );

    // Wait for the hook to finish updating
    await act(async () => {
      // Wait for the state updates
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe('Failed to load data. Please try again later.');
    expect(result.current.data).toEqual([]);
  });
});
