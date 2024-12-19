import type { PropsWithChildren } from "react";
import { getLinks } from "@/app/util/aoc-helpers";
import { SiAdventofcode } from "react-icons/si";
import Link from "next/link";

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
          href={links.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          View Day {day} Challenge on Advent of Code
        </Link>
        <Link
          href={links.officialInputDataUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          View Day {day} Data on Advent of Code (Yours)
        </Link>
        <Link
          href={links.repoInputDataUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline"
        >
          View Day {day} Data for this Repo (Mine)
        </Link>
      </div>
    </div>
  );
};
