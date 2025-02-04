'use client';

import { useReducer } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { generateValidBoard } from '../tango-helpers';

type CellValue = 'S' | 'M' | '';
type Constraint = '=' | 'x' | '' | null;

interface Cell {
  value: CellValue;
  top: Constraint;
  right: Constraint;
  bottom: Constraint;
  left: Constraint;
}

type BoardState = Cell[][];

type Action =
  | { type: 'TOGGLE_CELL'; rowIndex: number; cellIndex: number }
  | {
      type: 'TOGGLE_CONSTRAINT';
      rowIndex: number;
      cellIndex: number;
      direction: 'top' | 'right' | 'bottom' | 'left';
    };

const createEmptyCell = (): Cell => ({
  value: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
});

const createInitialBoard = (rows: number, cols: number): BoardState => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, createEmptyCell)
  );
};

const initialBoard: BoardState = createInitialBoard(6, 6);

const boardReducer = (state: BoardState, action: Action): BoardState => {
  switch (action.type) {
    case 'TOGGLE_CELL': {
      const newState: BoardState = state.map((row, rIdx) =>
        row.map((cell, cIdx) => {
          if (rIdx === action.rowIndex && cIdx === action.cellIndex) {
            const newValue =
              cell.value === 'S' ? 'M' : cell.value === 'M' ? '' : 'S';
            return { ...cell, value: newValue };
          }
          return cell;
        })
      );
      console.log(newState);
      return newState;
    }
    case 'TOGGLE_CONSTRAINT':
      return state.map((row, rIdx) =>
        row.map((cell, cIdx) => {
          if (rIdx === action.rowIndex && cIdx === action.cellIndex) {
            const newConstraint =
              cell[action.direction] === '='
                ? 'x'
                : cell[action.direction] === 'x'
                  ? ''
                  : '=';
            return { ...cell, [action.direction]: newConstraint };
          }
          return cell;
        })
      );
    default:
      return state;
  }
};

const CellImage = ({ value }: { value: CellValue }) => {
  if (value === 'S') {
    return <FaSun className="text-yellow-500" size={20} />;
  } else if (value === 'M') {
    return <FaMoon className="text-blue-500" size={20} />;
  }
  return null;
};

export default function TangoSolver() {
  const [board, dispatch] = useReducer(boardReducer, initialBoard);

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    dispatch({ type: 'TOGGLE_CELL', rowIndex, cellIndex });
  };

  const handleConstraintClick = (
    rowIndex: number,
    cellIndex: number,
    direction: 'top' | 'right' | 'bottom' | 'left'
  ) => {
    dispatch({ type: 'TOGGLE_CONSTRAINT', rowIndex, cellIndex, direction });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    rowIndex: number,
    cellIndex: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleCellClick(rowIndex, cellIndex);
    }
  };

  // const possibleBoards = generatePossibleBoards();
  const randomBoard = generateValidBoard();
  console.log(randomBoard);

  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">Tango Solver</h1>
      <div className="flex justify-center items-center h-full">
        <div className="grid grid-cols-6 w-[400px] h-[400px]">
          {board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                aria-label={`Cell ${rowIndex + 1}-${cellIndex + 1}`}
                className="relative flex items-center justify-center border w-full h-full cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => handleCellClick(rowIndex, cellIndex)}
                onKeyDown={(event) => handleKeyDown(event, rowIndex, cellIndex)}
              >
                <div className="absolute top-45 left-45">
                  <CellImage value={cell.value} />
                </div>

                {rowIndex !== 0 ? (
                  <div
                    aria-label={`Top constraint of cell ${rowIndex + 1}-${cellIndex + 1}`}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 h-2 z-10 w-full bg-gray-100 text-center"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConstraintClick(rowIndex, cellIndex, 'top');
                    }}
                    onKeyDown={(event) =>
                      event.key === 'Enter' || event.key === ' '
                        ? handleConstraintClick(rowIndex, cellIndex, 'top')
                        : null
                    }
                  >
                    <div className="text-center relative -top-4 text-2xl">
                      {cell.top}
                    </div>
                  </div>
                ) : null}
                {cellIndex !== 5 ? (
                  <div
                    aria-label={`Right constraint of cell ${rowIndex + 1}-${cellIndex + 1}`}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 z-10 h-full bg-gray-100"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConstraintClick(rowIndex, cellIndex, 'right');
                    }}
                    onKeyDown={(event) =>
                      event.key === 'Enter' || event.key === ' '
                        ? handleConstraintClick(rowIndex, cellIndex, 'right')
                        : null
                    }
                  >
                    <div className="text-center relative text-2xl -left-0.5 top-4">
                      {cell.right}
                    </div>
                  </div>
                ) : null}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
