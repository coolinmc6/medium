'use client';

import { useAdventOfCodeData } from '@/app/hooks/useAdventOfCodeData';
import { DayWrapper } from '@/ui/aoc-components/DayWrapper';
import { AocDataProvider } from '@/ui/aoc-components/aoc-data-context';

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AocDataProvider value={data}>
      <DayWrapper day={day} year={year}>
        {children}
      </DayWrapper>
    </AocDataProvider>
  );
};
