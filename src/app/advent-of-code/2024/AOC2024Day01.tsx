'use client';

import { useAdventOfCodeData } from '@/app/hooks/useAdventOfCodeData';
import {
  parseData,
  groupByColumns,
  getSimilarityScore,
} from '@/app/util/aoc-functions';
import { DayWrapper } from '@/ui/aoc-components/DayWrapper';

// https://adventofcode.com/2024/day/1
export const AOC2024Day01 = () => {
  // #1. Fetch the data - our custom hook!
  const { data, loading, error } = useAdventOfCodeData(2024, 1);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // #2. Parse the raw data so that we can use it
  const parsedData = parseData(data);

  // #3. Group the data into two separate arrays (columns) of data, sorted
  const [column1, column2] = groupByColumns(parsedData).map((column) =>
    column.sort()
  );

  // Part 1 Answer
  // #4. Get the sum of the differences between the columns
  const differences = column1
    .map((value, index) => {
      return Math.abs(value - column2[index]);
    })
    .reduce((acc, value) => acc + value, 0);

  // Part 2 Answer
  // #5. Get the similarity scores for each column
  const similarityScore1 = getSimilarityScore(column1, column2);
  const similarityScore2 = getSimilarityScore(column2, column1);

  return (
    <DayWrapper day={1} year={2024}>
      <div>
        <section className="mb-2">
          <h3 className="text-xl">Part 1</h3>
          <p>Differences between columns: {differences}</p>
        </section>
        <section className="mb-2">
          <h3 className="text-xl">Part 2</h3>
          <p>
            Similarity scores: {similarityScore1}, {similarityScore2}
          </p>
        </section>
      </div>
    </DayWrapper>
  );
};
