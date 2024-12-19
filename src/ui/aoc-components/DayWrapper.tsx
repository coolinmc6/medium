import type { PropsWithChildren } from 'react';
import { getLinks } from '@/app/util/aoc-helpers';
import Link from 'next/link';

type DayWrapperProps = {
  day: number;
  year: number;
} & PropsWithChildren;

export const DayWrapper = ({ children, day, year }: DayWrapperProps) => {
  const links = getLinks(year, day);
  console.log(links);
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg my-4">
      <h2 className="text-2xl bold mb-4">
        {year} - Day {day}
      </h2>
      {children}
      <div className="mt-4 flex flex-col">
        <Link
          className="text-sm underline"
          href={links.officialUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Day {day} Challenge on Advent of Code
        </Link>
        <Link
          className="text-sm underline"
          href={links.officialInputDataUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Day {day} Data on Advent of Code (Yours)
        </Link>
        <Link
          className="text-sm underline"
          href={links.repoInputDataUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Day {day} Data for this Repo (Mine)
        </Link>
      </div>
    </div>
  );
};
