import { DayWrapperWithHook } from '@/ui/aoc-components/DayWrapperWithHook';
import { useAocDataContext } from '@/ui/aoc-components/aoc-data-context';
import { AOCAnswer } from '@/app/advent-of-code/components/AOCAnswer';

const Day04Content = () => {
  const data = useAocDataContext();

  console.log('Day 4', data);

  return (
    <div className="space-y-6 border-b-2 pb-4">
      <AOCAnswer title="Part 1" answerText="Answer" answerValue={0}>
        <p>Part 1 solution coming soon...</p>
      </AOCAnswer>

      <AOCAnswer
        title="Part 2"
        answerText="Answer"
        answerValue={0}
        className="text-green-600 dark:text-green-400"
      >
        <p>Part 2 solution coming soon...</p>
      </AOCAnswer>
    </div>
  );
};

export const AOC2025Day04 = () => {
  return (
    <DayWrapperWithHook day={4} year={2025}>
      <Day04Content />
    </DayWrapperWithHook>
  );
};
