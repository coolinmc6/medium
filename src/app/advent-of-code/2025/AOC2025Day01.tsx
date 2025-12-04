import { DayWrapperWithHook } from '@/ui/aoc-components/DayWrapperWithHook';
import { useAocDataContext } from '@/ui/aoc-components/aoc-data-context';
import { AOCAnswer } from '@/app/advent-of-code/components/AOCAnswer';

const START_POSITION = 50;
const WHEEL_MINIMUM = 0;
const WHEEL_MAXIMUM = 99;

const getNewPosition = (start: number, rotation: string) => {
  const direction = rotation[0];
  let rotationValue = parseInt(rotation.slice(1), 10);

  if (rotationValue > WHEEL_MAXIMUM) {
    rotationValue = rotationValue % 100;
  }

  let newPosition =
    start + (direction === 'L' ? -rotationValue : rotationValue);
  if (newPosition > WHEEL_MAXIMUM) {
    newPosition = newPosition - 100;
  } else if (newPosition < WHEEL_MINIMUM) {
    newPosition = 100 + newPosition;
  }
  return newPosition;
};

const getRotations = (str: string) => {
  return str.split('\n').filter((line) => line.length > 0);
};

/**
 * Counts the number of times the position lands on zero (Part 1)
 * @param rotations
 * @returns
 */
const countZeros = (rotations: string[]) => {
  let currentPosition = START_POSITION;
  let zeroCount = 0;

  rotations.forEach((rotation) => {
    const newPosition = getNewPosition(currentPosition, rotation);
    if (newPosition === 0) {
      zeroCount += 1;
    }
    currentPosition = newPosition;
  });

  return zeroCount;
};

/**
 * Counts total zero crossings including during rotations (Part 2)
 * @param rotations
 * @returns
 */
const countZeroIntersections = (rotations: string[]) => {
  let zeroCount = 0;
  let pos = START_POSITION;

  rotations.forEach((rotation) => {
    const direction = rotation[0];
    let value = parseInt(rotation.slice(1), 10);

    if (direction === 'L') {
      value = -value;
    }

    if (value >= 0) {
      // Going Right

      // Every time we hit a multiple of 100, we cross zero. So if we hit 201, we
      // know we crossed zero twice (at 100 and 200)
      zeroCount += Math.floor((pos + value) / 100);
    } else {
      // Going Left

      // The dial has no negative numbers so a L250 for example and L50 have the same landing
      // position BUT L250 crosses zero two additional times (at -100 and -200). So I am
      // counting them first here
      zeroCount += Math.floor(-value / 100);

      // Now that we have the extra crossings counted, we can check if we cross zero with
      // the remaining steps
      value = value % 100;
      if (pos !== 0 && pos + value <= 0) {
        zeroCount += 1;
      }
    }

    // Update position to ensure it stays between 0 - 99
    // The addition "+ 100" is there for when value is negative
    pos = (pos + value + 100) % 100;

    console.log(`After ${rotation}, position: ${pos}, zeroCount: ${zeroCount}`);
  });

  return zeroCount;
};

const Day01Content = () => {
  const data = useAocDataContext();

  const rotations = getRotations(data);
  const zeroCount = countZeros(rotations);
  const zeroIntersections = countZeroIntersections(rotations);

  return (
    <div className="space-y-6 border-b-2 pb-4">
      <AOCAnswer
        title="Part 1: Final Position Zero Count"
        answerText="Times ending at zero"
        answerValue={zeroCount}
      >
        <p>
          Part 1 was pretty easy but it set me up to try to just use this code
          for Part 2 which, on my first try, didn&apos;t work out so well.
        </p>
      </AOCAnswer>

      <AOCAnswer
        title="Part 2: Total Zero Crossings"
        answerText="Total times crossing zero"
        answerValue={zeroIntersections}
        className="text-green-600 dark:text-green-400"
      >
        <p>
          Part 2 required counting every time the dial points at zero, including
          when it crosses through zero during a rotation.
        </p>
      </AOCAnswer>
    </div>
  );
};

export const AOC2025Day01 = () => {
  return (
    <DayWrapperWithHook day={1} year={2025}>
      <Day01Content />
    </DayWrapperWithHook>
  );
};
