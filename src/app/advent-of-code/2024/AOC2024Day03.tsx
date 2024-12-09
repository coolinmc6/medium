"use client";

import { useAdventOfCodeData } from "@/app/hooks/useAdventOfCodeData";
import {
  parseMulString,
  multiplyMulNumbers,
  parseMulDoDontString,
  multiplyEnabledNumbers,
} from "@/app/util/aoc-functions";
import { DayWrapper } from "@/ui/aoc-components/DayWrapper";

export const AOC2024Day03 = () => {
  // https://adventofcode.com/2024/day/1
  const { data, loading, error } = useAdventOfCodeData(2024, 3);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Part 1
  const parsedData = parseMulString(data);
  const result = multiplyMulNumbers(parsedData);

  // Part 2
  const parsedData2 = parseMulDoDontString(data);
  const total = multiplyEnabledNumbers(parsedData2);

  return (
    <DayWrapper day={3} year={2024}>
      <div>
        <section className="mb-2">
          <h3 className="text-xl">Part 1</h3>
          <p>Result: {result}</p>
        </section>
        <section className="mb-2">
          <h3 className="text-xl">Part 2</h3>
          <p>Total: {total}</p>
        </section>
      </div>
    </DayWrapper>
  );
};
