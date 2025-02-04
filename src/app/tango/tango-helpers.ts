import { heapPermute, shuffle } from '@/app/util/helpers';

type SymbolValue = 'S' | 'M';

type ValidBoard = SymbolValue[][];

/**
 *
 * @param row
 * @param fullRow
 * @returns
 */
export const isValidRow = (row: string[], fullRow = true) => {
  const rowString = row.join('');
  const noTriples = rowString.match(/SSS|MMM/) === null;
  const correctSunLength = row.filter((cell) => cell === 'S').length === 3;
  const correctMoonLength = row.filter((cell) => cell === 'M').length === 3;
  const isCorrectLength = fullRow
    ? correctMoonLength && correctSunLength
    : true;
  return noTriples && isCorrectLength;
};

export const generateValidRow = () => {
  const baseRow = ['S', 'S', 'S', 'M', 'M', 'M'];
  let row = shuffle(baseRow);
  while (!isValidRow(row)) {
    row = shuffle(baseRow);
  }
  return row;
};

/**
 *
 * @param board array of arrays of 'S' and 'M'
 * @returns true if the board is valid
 */
export const isValidBoard = (board: ValidBoard): boolean => {
  const columns = new Array(board[0].length).fill([]);
  board.map((row) => {
    row.map((cell, columnIndex) => {
      columns[columnIndex] = [...columns[columnIndex], cell];
    });
  });
  return (
    columns.every((column) => isValidRow(column, column.length === 6)) &&
    board.every((row) => isValidRow(row, row.length === 6))
  );
};

export const generateValidBoard = () => {
  const board = new Array(6).fill([]);
  for (let i = 0; i < 6; i++) {
    let row = generateValidRow();
    board[i] = row;
    let count = 0;
    while (!isValidBoard(board) && count < 50) {
      row = generateValidRow();
      board[i] = row;
      count++;
      console.log('count', count);
    }
  }
  return board;
};

/**
 * Notes:
 *
 * I have generated the functions to create a valid answer board for the game. But I
 * don't have a working board, one that is blank and can be filled in by the user. A
 * working game object would have a board that is blank and a board that is the answer.
 * A working board is probably best not done entirely in the helpers file but in React.
 *
 * I need to generate a board that
 */
export const generatePlayableBoard = (answersGiven = 12) => {
  const cells = shuffle(new Array(36).fill('').map((_, index) => index));
  const targetCells = cells.slice(0, answersGiven);
  const board = generateValidBoard();
  const playableBoard = board.map((row, rowIndex) => {
    return row.map((cell: string, cellIndex: number) => {
      const value = rowIndex * 6 + cellIndex;
      return targetCells.includes(value) ? cell : '';
    });
  });
  return playableBoard;
};

type BoardHash = {
  [key: string]: boolean;
};

export type PossibleRows = {
  hash: BoardHash;
  validRows: ValidBoard[];
};

/**
 * This function generates all possible rows for the game
 * @returns array and hash of all possible rows
 */
export const generatePossibleRows = (): PossibleRows => {
  const possibleBoards = heapPermute(['S', 'S', 'S', 'M', 'M', 'M'], 6);
  const hash: BoardHash = {};
  const validRows = possibleBoards.filter((board) => isValidRow(board));

  validRows.forEach((board) => {
    const boardString = board.join('');
    if (!hash[boardString]) {
      hash[boardString] = true;
    }
  });

  return {
    hash,
    validRows,
  };
};

// export const generatePossibleBoards = (board: ValidBoard, maxCount = 1000) => {
//   const validMatchingBoards = [];
//   const possibleRows = generatePossibleRows();
//   console.log(possibleRows);
// };
