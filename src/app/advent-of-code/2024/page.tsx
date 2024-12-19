'use client';

import { AOC2024Day01 } from '@/app/advent-of-code/2024/AOC2024Day01';
import { AOC2024Day02 } from '@/app/advent-of-code/2024/AOC2024Day02';
import { AOC2024Day03 } from '@/app/advent-of-code/2024/AOC2024Day03';

export default function AdventOfCode2024() {
  return (
    <div className="p-4 bg-white flex-grow">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-3xl text-center mb-2">Advent of Code 2024</h1>
        <AOC2024Day01 />
        <AOC2024Day02 />
        <AOC2024Day03 />
      </div>
    </div>
  );
}
