export const parseData = (data: string) => {
  const rows = data.trim().split("\n");

  const parsedRows = rows.map((row) => {
    const numbers = row.trim().split(/\s+/).map(Number);

    return numbers;
  });

  return parsedRows;
};

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
