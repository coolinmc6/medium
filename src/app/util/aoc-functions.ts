export const parseData = (data: string) => {
  // Split the data into rows
  const rows = data.trim().split("\n");

  // Parse each row
  const parsedRows = rows.map((row, index) => {
    const numbers = row.trim().split(/\s+/).map(Number);

    if (index === 0) {
      console.log(row, numbers);
    }
    return numbers;
  });

  return parsedRows;
};

export const groupByColumns = (parsedRows: number[][]): number[][] => {
  if (!parsedRows.length) return []; // Handle empty input

  const numberOfColumns = parsedRows[0].length; // Assuming all rows have the same length

  // Create an array of empty arrays for each column
  const columns: number[][] = Array.from({ length: numberOfColumns }, () => []);

  // Populate each column
  parsedRows.forEach((row) => {
    row.forEach((num, colIndex) => {
      columns[colIndex].push(num);
    });
  });

  return columns;
};

export const getSimilarities = (
  baseColumn: number[],
  compareColumn: number[]
): Record<number, number> => {
  // Use a Record<number, number> for the map to ensure type safety
  const map: Record<number, number> = {};

  baseColumn.forEach((value) => {
    if (map[value] === undefined) {
      // Use reduce for more efficient counting
      map[value] = compareColumn.reduce(
        (count, compareValue) => (compareValue === value ? count + 1 : count),
        0
      );
    }
  });

  return map;
};
