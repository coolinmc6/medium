'use client';

import { useEffect, useReducer, useCallback } from 'react';
import {
  generateAllValidMatrices,
  filterStringsByPattern,
} from '../tango-helpers';
import { CellImage } from './CellImage';
import { boardReducer } from './reducer';
import { initialBoard } from './helpers';

const validBoards = generateAllValidMatrices();

export default function TangoSolver() {
  const [board, dispatch] = useReducer(boardReducer, initialBoard);

  const calculatePossibleBoards = useCallback(() => {
    if (!validBoards) return;
    if (board.join('').trim().length === 0) return;
    const possibleBoards = filterStringsByPattern(
      validBoards.solutionStrings,
      board.join('')
    );
    console.log(possibleBoards.length);
  }, []);

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

  useEffect(() => {
    console.log(board);
    calculatePossibleBoards();
  }, [board]);

  return (
    <div className="p-4 bg-white grow">
      <h1 className="text-3xl text-center">Tango Solver</h1>
      <h2 className="text-xl text-left">Items Left to Complete</h2>
      <ul className="mb-2 list-disc p-4">
        <li>Show how many possible boards right now</li>
        <li>Upon click in board, count the number of possible boards</li>
      </ul>
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
