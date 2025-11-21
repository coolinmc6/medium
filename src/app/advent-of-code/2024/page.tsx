'use client';

import { AOC2024Day01 } from '@/app/advent-of-code/2024/AOC2024Day01';
import { AOC2024Day02 } from '@/app/advent-of-code/2024/AOC2024Day02';
import { AOC2024Day03 } from '@/app/advent-of-code/2024/AOC2024Day03';
import { AdventOfCodeBase } from '@/app/advent-of-code/components/AdventOfCodeBase';

export default function AdventOfCode2024() {
  return (
    <AdventOfCodeBase year={2024}>
      <AOC2024Day01 />
      <AOC2024Day02 />
      <AOC2024Day03 />
    </AdventOfCodeBase>
  );
}
