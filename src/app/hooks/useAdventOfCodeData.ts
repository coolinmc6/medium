import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useAdventOfCodeData = (year: number, day: number) => {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`/aoc/${year}/day${day}.txt`);
      setData(response.data);
    } catch (err: unknown) {
      setError(`Failed to fetch data for year ${year}, day ${day}`);
      setData("");
    } finally {
      setLoading(false);
    }
  }, [year, day]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
