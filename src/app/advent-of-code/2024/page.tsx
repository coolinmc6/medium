'use client';

import { AOC2024Day01 } from '@/app/advent-of-code/2024/AOC2024Day01';
import { AOC2024Day02 } from '@/app/advent-of-code/2024/AOC2024Day02';
import { AOC2024Day03 } from '@/app/advent-of-code/2024/AOC2024Day03';

const styleObject = {
  // image from: https://2021.adventofcss.com/
  backgroundImage: 'url(/assets/snow.svg)',
  backgroundRepeat: 'repeat',
  backgroundColor: '#fFffff',
};

export default function AdventOfCode2024() {
  return (
    <div className="p-4 bg-white flex-grow" style={styleObject}>
      <div className="flex flex-col gap-y-3 items-center">
        <h1 className="text-4xl text-center mb-2 text-[#E8234D] font-bold bg-white">
          Advent of Code 2024
        </h1>
        <AOC2024Day01 />
        <AOC2024Day02 />
        <AOC2024Day03 />
      </div>
    </div>
  );
}
