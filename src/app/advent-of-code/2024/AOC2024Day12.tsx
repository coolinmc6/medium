import { DayWrapperWithHook } from '@/ui/aoc-components/DayWrapperWithHook';
import { useAocDataContext } from '@/ui/aoc-components/aoc-data-context';

const Day12Content = () => {
  const data = useAocDataContext();

  return (
    <div>
      <section className="mb-2">
        <h3 className="text-xl">Part 1</h3>
        <div>NOT STARTED</div>
      </section>
      <section className="mb-2">
        <h3 className="text-xl">Part 2</h3>
        <div>NOT STARTED</div>
      </section>
    </div>
  );
};

export const AOC2024Day12 = () => {
  return (
    <DayWrapperWithHook day={12} year={2024}>
      <Day12Content />
    </DayWrapperWithHook>
  );
};
