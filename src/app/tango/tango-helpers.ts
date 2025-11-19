import { heapPermute, shuffle } from '@/app/util/helpers';
import {
  // BoardState,
  SymbolValue,
  ValidBoard,
  ValidRow,
} from './types';

/**
 *
 * @param row
 * @param fullRow
 * @returns
 */
export const isValidRow = (row: string[], fullRow = true): boolean => {
  const rowString = row.join('');
  const noTriples = rowString.match(/SSS|MMM/) === null;
  const correctSunLength = row.filter((cell) => cell === 'S').length === 3;
  const correctMoonLength = row.filter((cell) => cell === 'M').length === 3;
  const isCorrectLength = fullRow
    ? correctMoonLength && correctSunLength
    : true;
  return noTriples && isCorrectLength;
};

/**
 *
 * @returns a valid row
 */
export const generateValidRow = (): ValidRow => {
  const baseRow: SymbolValue[] = ['S', 'S', 'S', 'M', 'M', 'M'];
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

export const isValidBoardString = (boardString: string): boolean => {
  const board = boardString.match(/.{6}/g);
  if (!board) {
    return false;
  }
  const boardArray = board.map((row) => row.split(''));
  return isValidBoard(boardArray as ValidBoard);
};

/**
 *
 * @returns
 */
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
  uniqueRows: string[];
  uniqueRowsArray: Array<string>[];
};

/**
 * This function generates all possible rows for the game
 * @returns array and hash of all possible rows
 */
export const generatePossibleRows = (): PossibleRows => {
  const possibleBoards = heapPermute(['S', 'S', 'S', 'M', 'M', 'M'], 6);
  const hash: BoardHash = {};
  const validRows = possibleBoards.filter((board) => isValidRow(board));
  const uniqueRows: string[] = [];
  const uniqueRowsArray: Array<string>[] = [];

  validRows.forEach((board) => {
    const boardString = board.join('');
    if (!hash[boardString]) {
      hash[boardString] = true;
    }
    if (!uniqueRows.includes(boardString)) {
      uniqueRows.push(boardString);
      uniqueRowsArray.push(board);
    }
  });

  return {
    hash,
    uniqueRows,
    uniqueRowsArray,
  };
};

// export const calculatePotentialBoards = (board: BoardState) => {

// }

export const generatePossibleBoards = () => {
  const { uniqueRowsArray } = generatePossibleRows();
  const possibleBoards = heapPermute(uniqueRowsArray, 6).map((board) => {
    return board.filter((row, index) => index < 6);
  });
  const validBoards = possibleBoards.filter((board) => isValidBoard(board));
  return validBoards;
};

// const columnsAreValid = (matrixSoFar: string[][]) => {
//   // matrixSoFar is an array of strings, each string length = 6
//   // e.g. ["SMSMSM", "MMSMMS", "SMSMSM", ...]

//   const numRows = matrixSoFar.length; // how many rows we currently have

//   // For each column (0..5) check consecutive triple
//   for (let col = 0; col < 6; col++) {
//     let consecutiveCount = 1;
//     for (let row = 1; row < numRows; row++) {
//       if (matrixSoFar[row][col] === matrixSoFar[row - 1][col]) {
//         consecutiveCount++;
//         if (consecutiveCount === 3) {
//           // Three identical in a row => invalid
//           return false;
//         }
//       } else {
//         consecutiveCount = 1; // reset when we see a different letter
//       }
//     }
//   }

//   return true; // No column had triple consecutive
// };

export const generateAllValidMatrices = () => {
  const validRows = generatePossibleRows().uniqueRowsArray;
  const solutions: ValidBoard[] = [];
  const solutionStrings: string[] = [];
  const hash: Record<string, number> = {};

  function backtrack(currentMatrix: string[][]) {
    // Base case: if we have 6 rows, we've formed a valid matrix
    if (currentMatrix.length === 6) {
      // Make a copy so we don’t mutate later
      const array = [...(currentMatrix as ValidBoard)];
      solutions.push(array);
      solutionStrings.push(array.map((row) => row.join('')).join(''));
      const matrixString = currentMatrix.map((row) => row.join('')).join('');
      if (!hash[matrixString]) {
        hash[matrixString] = 1;
      } else {
        hash[matrixString]++;
      }
      return;
    }

    // Try each valid row as the next row
    for (const row of validRows) {
      const newMatrix = [...currentMatrix, row] as ValidBoard;
      // Check column constraints so far
      if (isValidBoard(newMatrix)) {
        backtrack(newMatrix);
      }
    }
  }

  // Start recursion with an empty matrix
  backtrack([]);
  return {
    solutions,
    solutionStrings,
    hash,
    hashLength: Object.keys(hash).length,
  };
};

export const filterStringsByPattern = (
  strings: string[],
  pattern: string
): string[] => {
  console.log(strings);
  return strings.filter((str: string) =>
    [...pattern].every((char, index) => char === ' ' || char === str[index])
  );
};

export const filterObjectKeysByPattern = (
  obj: Record<string, boolean>,
  pattern: string
): Record<string, boolean> =>
  Object.fromEntries(
    Object.keys(obj)
      .filter((key) =>
        [...pattern].every((char, index) => char === ' ' || char === key[index])
      )
      .map((key) => [key, obj[key]]) // Retain the original boolean values
  );

// class TangoTree {
//   public root: TangoNode;

//   constructor() {
//     this.root = new TangoNode('root', null);
//     this.initializeTree();
//   }

//   public initializeTree() {
//     const validRows = generatePossibleRows().uniqueRowsArray;
//     validRows.map((row) => {
//       const child = new TangoNode(row.join(''), this.root);
//       this.root.children.push(child);
//     });
//   }
// }

// class TangoNode {
//   public children: TangoNode[];
//   public rowNumber: number;
//   public parent: TangoNode | null;
//   public parentValue: string;
//   public cumulativeValue: string;
//   public value: string;
//   constructor(row: string, parent: TangoNode | null = null) {
//     this.children = [];
//     this.value = row;
//     this.parent = parent;
//     this.parentValue = parent ? parent.value : 'root';
//     this.rowNumber = parent ? parent.rowNumber + 1 : 0;
//     if (parent === null) {
//       this.cumulativeValue = '';
//     } else {
//       this.cumulativeValue = parent.cumulativeValue + row;
//     }
//     // this.generatePossibleChildren();
//   }

//   // generatePossibleChildren() {
//   //   const validRows = generatePossibleRows().uniqueRowsArray;
//   //   if (this.rowNumber === 5) return;
//   //   validRows.map((row) => {
//   //     const rowString = row.join('');
//   //     const possibleBoard = this.cumulativeValue + rowString;
//   //     if (isValidBoardString(possibleBoard)) {
//   //       const child = new TangoNode(rowString, this);
//   //       this.children.push(child);
//   //     }
//   //   });
//   // }
// }

// const generateTangoTree = () => {
//   const tree = new TangoTree();
//   // console.log(tree);
// };

// Then just call it:
// const validRows = generatePossibleRows().uniqueRowsArray;
// const allValidMatrices = generateAllValidMatrices(validRows);
// console.log(`Found ${allValidMatrices.solutions.length} valid 6x6 matrices!`);
// console.log(allValidMatrices);
// generateTangoTree();
// const { hash } = generatePossibleRows();
// console.log(hash);
