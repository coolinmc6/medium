'use client';

import { AdventOfCodeBase } from '@/app/advent-of-code/components/AdventOfCodeBase';
import { AOC2025Day01 } from '@/app/advent-of-code/2025/AOC2025Day01';
import { AOC2025Day02 } from '@/app/advent-of-code/2025/AOC2025Day02';
// import { AOC2025Day03 } from '@/app/advent-of-code/2025/AOC2025Day03';
// import { AOC2025Day04 } from '@/app/advent-of-code/2025/AOC2025Day04';

export default function AdventOfCode2025() {
  return (
    <AdventOfCodeBase year={2025}>
      <AOC2025Day01 />
      <AOC2025Day02 />
      {/* <AOC2025Day03 />
      <AOC2025Day04 /> */}
    </AdventOfCodeBase>
  );
}
