'use client';

import React, { type PropsWithChildren } from 'react';

type AdventOfCodeBaseProps = {
  year: number;
} & PropsWithChildren;

const styleObject = {
  // image from: https://2021.adventofcss.com/
  backgroundImage: 'url(/assets/snow.svg)',
  backgroundRepeat: 'repeat',
  backgroundColor: '#fFffff',
};

export const AdventOfCodeBase = ({ year, children }: AdventOfCodeBaseProps) => {
  return (
    <div className="min-h-screen p-4 bg-white" style={styleObject}>
      <div className="flex flex-col gap-y-3 items-center">
        <h1 className="text-4xl text-center mb-2 text-[#E8234D] font-bold bg-white">
          Advent of Code {year}
        </h1>
        {children}
      </div>
    </div>
  );
};
