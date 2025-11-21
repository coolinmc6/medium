import Link from 'next/link';

export default function AdventOfCode() {
  return (
    <div className="p-4 bg-white grow">
      <h1 className="text-3xl text-center mb-2">Advent of Code</h1>
      <Link href="/advent-of-code/2024">Go to 2024</Link>
    </div>
  );
}
