'use client';

import { useAdventOfCodeData } from '@/app/hooks/useAdventOfCodeData';
import { DayWrapper } from '@/ui/aoc-components/DayWrapper';
import {
  parseData,
  isRowSafe,
  isRowSafeWithDampener,
} from '@/app/util/aoc-functions';

export const AOC2024Day02 = () => {
  // #1. Fetch the data - our custom hook!
  const { data, loading, error } = useAdventOfCodeData(2024, 2);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // #2. Parse the raw data so that we can use it
  const rows = parseData(data);

  // #3. Filter the rows to find the safe ones
  const safeRows = rows.filter(isRowSafe);

  // #4. Filter the rows to find the safe ones with a dampener
  const safeRowsWithDampener = rows.filter(isRowSafeWithDampener);
  return (
    <DayWrapper day={2} year={2024}>
      <div>
        <section className="mb-2">
          <h3 className="text-xl">Part 1</h3>
          <p>
            The challenge is to find which reports are {`"safe"`} and which are
            not. Reports that are {`"safe"`} are all increasing or decreasing by
            at least 1 and at most 3.
          </p>
          <p>Safe rows: {safeRows.length}</p>
        </section>
        <section className="mb-2">
          <h3 className="text-xl">Part 2</h3>
          <p>
            With a {`"dampener"`} in place, we can disregard one value to see if
            the level is safe. If one value can be removed and the row is safe,
            then we can consider the row safe.
          </p>
          <p>Safe rows with dampener: {safeRowsWithDampener.length}</p>
        </section>
      </div>
    </DayWrapper>
  );
};
