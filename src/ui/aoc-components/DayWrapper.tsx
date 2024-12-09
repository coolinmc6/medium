import type { PropsWithChildren } from "react";

type DayWrapperProps = {
  day: number;
  year: number;
} & PropsWithChildren;

export const DayWrapper = ({ children, day, year }: DayWrapperProps) => {
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg my-4">
      <h2 className="text-2xl bold mb-4">
        {year} - Day {day}
      </h2>
      {children}
    </div>
  );
};
