import { BoardState, Cell } from '../types';

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

export const initialBoard: BoardState = createInitialBoard(6, 6);
