/**
 *
 * @param data txt file data
 * @returns array of number arrays
 *
 * Parses the data from the txt file into an array of number arrays.
 */
export const parseData = (data: string) => {
  const rows = data.trim().split("\n");

  const parsedRows = rows.map((row) => {
    const numbers = row.trim().split(/\s+/).map(Number);

    return numbers;
  });

  return parsedRows;
};

/**
 *
 * @param parsedRows array of number arrays
 * @returns essentially transposes the data - if the data has 3 columns
 * and 100 rows, this function will return 3 arrays of 100 numbers each.
 */
export const groupByColumns = (parsedRows: number[][]): number[][] => {
  if (!parsedRows.length) return [];

  const numberOfColumns = parsedRows[0].length;

  const columns: number[][] = Array.from({ length: numberOfColumns }, () => []);

  parsedRows.forEach((row) => {
    row.forEach((num, colIndex) => {
      columns[colIndex].push(num);
    });
  });

  return columns;
};

/**
 *
 * @param arr array of numbers
 * @returns
 */
export const frequencyCounter = (arr: number[]): Map<number, number> => {
  const frequencyMap = new Map();
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  return frequencyMap;
};

/**
 *
 * @param column1
 * @param column2
 * @returns similarity score
 *
 * The similarity score is calculated for each column. The similarity score for a number
 * is calculated by multiplying that number by the number of times it appears in the other column.
 * The total similarity score is the sum of all the similarity scores.
 *
 * Day 1
 */
export const getSimilarityScore = (
  column1: number[],
  column2: number[]
): number => {
  const similarityScore = column1.reduce((acc, value) => {
    const count = column2.filter((val) => val === value).length;
    return acc + value * count;
  }, 0);

  return similarityScore;
};

/**
 *
 * @param prev previous number
 * @param current current number
 * @returns direction of the row: up, down, or flat
 */
const getDirection = (prev: number, current: number): string => {
  if (prev < current) {
    return "up";
  } else if (prev > current) {
    return "down";
  } else {
    return "flat";
  }
};

/**
 *
 * @param row array of numbers
 * @returns boolean to indicate if the row is safe
 *
 * A row is safe if the difference between each number is at least 1 and at most 3
 * and the direction of the row (up or down) is constant.
 */
export const isRowSafe = (row: number[]): boolean => {
  let isSafe = true;
  let prev = row[0];
  const rowDirection = getDirection(row[0], row[1]);
  for (let i = 1; i < row.length; i++) {
    const current = row[i];
    const currentDirection = getDirection(prev, current);

    // If greater than 3, entire row is unsafe
    if (Math.abs(current - prev) > 3) {
      isSafe = false;
      break;
    }

    // If direction changes, entire row is unsafe
    if (rowDirection !== currentDirection) {
      isSafe = false;
      break;
    }

    prev = current;
  }

  return isSafe;
};

export const isRowSafeWithDampener = (row: number[]): boolean => {
  if (isRowSafe(row)) {
    return true;
  }
  let isSafe = false;
  for (let i = 0; i < row.length; i++) {
    const rowCopy = [...row];
    rowCopy.splice(i, 1);
    if (isRowSafe(rowCopy)) {
      isSafe = true;
      break;
    }
  }
  return isSafe;
};

/**
 *
 * @param data string that your parsing
 * @param regex Regular Expression to search for
 * @returns array of string that match the regex pattern
 */
export const parseRegex = (data: string, regex: RegExp): string[] => {
  const matches = Array.from(data.matchAll(regex));
  return matches.map((match) => match[0]);
};

/**
 *
 * @param data txt file data
 * @returns array of strings that match the pattern `mul(X,Y)` where X and Y are 1-3 digit numbers
 *
 * Day 3
 * Note: this can be refactored so that we include the regex pattern as an argument
 */
export const parseMulString = (data: string): string[] => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;

  return parseRegex(data, regex);
};

/**
 *
 * @param data string
 * @returns array of strings that match the pattern `mul(X,Y)` or `do()` or `don't()`
 */
export const parseMulDoDontString = (data: string): string[] => {
  const regex = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g;

  return parseRegex(data, regex);
};

/**
 *
 * @param mulStrings array of strings that match the pattern `mul(X,Y)`
 * @returns product of all the numbers
 */
export const multiplyMulNumbers = (mulStrings: string[]): number => {
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/;
  return mulStrings
    .map((mulString) => {
      const match = mulString.match(regex);

      if (match) {
        const num1 = parseInt(match[1], 10);
        const num2 = parseInt(match[2], 10);

        const product = num1 * num2;
        return product;
      }

      throw new Error(`Invalid mul string: ${mulString}`); // Handle unexpected cases
    })
    .reduce((acc, value) => acc + value, 0); // Sum the results
};

/**
 *
 * @param mulStrings array of strings that match the pattern `mul(X,Y)` or `do()` or `don't()`
 * @returns product of all the numbers that are enabled
 */
export const multiplyEnabledNumbers = (mulStrings: string[]): number => {
  let enabled = true;
  let total = 0;

  mulStrings.forEach((mulString) => {
    if (mulString === "do()") {
      enabled = true;
    } else if (mulString === "don't()") {
      enabled = false;
    } else {
      if (enabled) {
        const regex = /mul\((\d{1,3}),(\d{1,3})\)/;
        const match = mulString.match(regex);

        if (match) {
          const num1 = parseInt(match[1], 10);
          const num2 = parseInt(match[2], 10);

          const product = num1 * num2;
          total += product;
        }
      }
    }
  });

  return total;
};
