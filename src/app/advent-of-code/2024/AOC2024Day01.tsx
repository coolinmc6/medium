"use client";

import { useAdventOfCodeData } from "@/app/hooks/useAdventOfCodeData";
import {
  parseData,
  groupByColumns,
  getSimilarities,
} from "@/app/util/aoc-functions";

export const AOC2024Day01 = () => {
  // https://adventofcode.com/2024/day/1
  const { data, loading, error } = useAdventOfCodeData(2024, 1);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const parsedData = parseData(data);
  const [column1, column2] = groupByColumns(parsedData).map((column) =>
    column.sort()
  );

  console.log(column1, column2);

  const differences = column1
    .map((value, index) => {
      return Math.abs(value - column2[index]);
    })
    .reduce((acc, value) => acc + value, 0);

  const sim1 = getSimilarities(column1, column2);
  const sim2 = getSimilarities(column2, column1);

  console.log({ sim1, sim2 });

  // next step: get the similarity scores between each list

  return <div>{differences}</div>;
};
