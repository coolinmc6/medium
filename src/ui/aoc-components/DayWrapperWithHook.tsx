'use client';

import { useAdventOfCodeData } from '@/app/hooks/useAdventOfCodeData';
import { DayWrapper } from '@/ui/aoc-components/DayWrapper';
import { AocDataProvider } from '@/ui/aoc-components/aoc-data-context';
import { getLinks } from '@/app/util/aoc-helpers';
import Link from 'next/link';

type DayWrapperWithHookProps = {
  day: number;
  year: number;
  children: React.ReactNode;
};

export const DayWrapperWithHook = ({
  day,
  year,
  children,
}: DayWrapperWithHookProps) => {
  const { data, loading, error } = useAdventOfCodeData(year, day);
  const links = getLinks(year, day);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="rounded-lg border-2 border-red-200 bg-red-50 p-6 dark:border-red-800 dark:bg-red-900/20">
        <div className="mb-3 text-lg font-semibold text-red-800 dark:text-red-300">
          {error}
        </div>
        <div className="text-red-700 dark:text-red-400">
          Have you downloaded the{` `}
          <Link
            className="underline hover:text-red-900 dark:hover:text-red-200"
            href={links.officialInputDataUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            data
          </Link>{' '}
          for this{' '}
          <Link
            className="underline hover:text-red-900 dark:hover:text-red-200"
            href={links.officialUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            day
          </Link>
          ?
        </div>
      </div>
    );
  }

  return (
    <AocDataProvider value={data}>
      <DayWrapper day={day} year={year}>
        {children}
      </DayWrapper>
    </AocDataProvider>
  );
};
