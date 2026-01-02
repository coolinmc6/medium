import { DayWrapperWithHook } from '@/ui/aoc-components/DayWrapperWithHook';
import { useAocDataContext } from '@/ui/aoc-components/aoc-data-context';
import { AOCAnswer } from '@/app/advent-of-code/components/AOCAnswer';

/**
 * This function breaks a string into an array of all the ranges we'll need to process.
 *
 * For example, the string "989133-1014784, 6948-9419" would return:
 * [
 *  { start: 989133, end: 1014784 },
 *  { start: 6948, end: 9419 }
 * ]
 *
 * @param str the puzzle input
 * @returns
 */
const getRanges = (str: string) => {
  return str
    .split(',')
    .map((id) => id.trim())
    .map((range) => {
      const [start, end] = range.split('-').map((num) => parseInt(num, 10));
      return { start, end };
    });
};

/**
 * This function checks if an ID is invalid based on the puzzle's criteria.
 *
 *
 * @param id the ID (number) we're checking
 * @returns
 */
const isInvalidId = (id: number) => {
  const s = String(id);
  if (s.length % 2 !== 0) return false;
  const half = s.length / 2;
  return s.slice(0, half) === s.slice(half);
};

/**
 *
 * @param ranges the array of ranges we need to check for invalid IDs
 * @returns
 */
const getInvalidIds = (ranges: { start: number; end: number }[]) => {
  const invalidIds: number[] = [];
  ranges.map((range) => {
    for (let id = range.start; id <= range.end; id++) {
      if (isInvalidId(id)) {
        invalidIds.push(id);
      }
    }
  });
  return invalidIds;
};

const hasRepeatingDigits = (num: number) => {
  const numberAsString = num.toString();
  const length = numberAsString.length;
  for (let patternLen = 1; patternLen <= length / 2; patternLen++) {
    if (length % patternLen === 0) {
      const pattern = numberAsString.substring(0, patternLen);
      const repeated = pattern.repeat(length / patternLen);
      if (numberAsString === repeated) {
        return true;
      }
    }
  }
  return false;
};

const getInvalidIdsPart2 = (ranges: { start: number; end: number }[]) => {
  const invalidIds: number[] = [];
  ranges.map((range) => {
    for (let id = range.start; id <= range.end; id++) {
      if (hasRepeatingDigits(id)) {
        invalidIds.push(id);
      }
    }
  });
  return invalidIds;
};

const Day02Content = () => {
  const data = useAocDataContext();
  const ranges = getRanges(data);

  // Part 1
  const invalidIds = getInvalidIds(ranges);
  const answer1 = invalidIds.reduce((acc, curr) => acc + curr, 0);

  // Part 2
  const invalidIdsPart2 = getInvalidIdsPart2(ranges);
  const answer2 = invalidIdsPart2.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="space-y-6 border-b-2 pb-4">
      <AOCAnswer
        answerText="Sum of Invalid IDs"
        answerValue={answer1}
        title="Part 1"
      ></AOCAnswer>

      <AOCAnswer
        answerText="Sum of Invalid IDs with Repeating Digits"
        answerValue={answer2}
        className="text-green-600 dark:text-green-400"
        title="Part 2"
      ></AOCAnswer>
    </div>
  );
};

export const AOC2025Day02 = () => {
  return (
    <DayWrapperWithHook day={2} year={2025}>
      <Day02Content />
    </DayWrapperWithHook>
  );
};
