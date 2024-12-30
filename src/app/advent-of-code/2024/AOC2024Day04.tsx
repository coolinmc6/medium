'use client';

import { useAdventOfCodeData } from '@/app/hooks/useAdventOfCodeData';
// import {

// } from '@/app/util/aoc-functions';
import { DayWrapper } from '@/ui/aoc-components/DayWrapper';

export const AOC2024Day04 = () => {
  // #1. Fetch the data - our custom hook!
  const { data, loading, error } = useAdventOfCodeData(2024, 4);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);

  return (
    <DayWrapper day={4} year={2024}>
      <div>
        <section className="mb-2">
          <h3 className="text-xl">Part 1</h3>
        </section>
        <section className="mb-2">
          <h3 className="text-xl">Part 2</h3>
        </section>
      </div>
    </DayWrapper>
  );
};
