/**
 *
 * @param data string data for AOC
 * @param word
 * @returns
 */
export const wordSearch = (data: string, word: string) => {
  const rows = data.split('\n');
  const grid: string[][] = rows.map((row) => row.split(''));
  const height = grid.length;
  const width = grid[0]?.length || 0;

  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
    [1, 1], // diagonal down-right
    [1, -1], // diagonal down-left
    [-1, 1], // diagonal up-right
    [-1, -1], // diagonal up-left
  ];

  const checkWord = (
    startRow: number,
    startCol: number,
    direction: number[],
    word: string
  ): boolean => {
    const [dRow, dCol] = direction;
    for (let i = 0; i < word.length; i++) {
      const newRow = startRow + i * dRow;
      const newCol = startCol + i * dCol;
      if (
        newRow < 0 ||
        newRow >= height ||
        newCol < 0 ||
        newCol >= width ||
        grid[newRow][newCol] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  };

  let count = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === word[0]) {
        // Start of potential word
        for (const direction of directions) {
          if (checkWord(row, col, direction, word)) {
            count++;
          }
        }
      }
    }
  }

  return count;
};
