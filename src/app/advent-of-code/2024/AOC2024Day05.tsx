import { DayWrapperWithHook } from '@/ui/aoc-components/DayWrapperWithHook';
import { useAocDataContext } from '@/ui/aoc-components/aoc-data-context';

const Day05Content = () => {
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

export const AOC2024Day05 = () => {
  return (
    <DayWrapperWithHook day={5} year={2024}>
      <Day05Content />
    </DayWrapperWithHook>
  );
};
