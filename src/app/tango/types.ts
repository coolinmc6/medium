export type CellValue = 'S' | 'M' | '';
export type Constraint = '=' | 'x' | '' | null;
export type Cell = {
  value: CellValue;
  top: Constraint;
  right: Constraint;
  bottom: Constraint;
  left: Constraint;
};
type Direction = 'top' | 'right' | 'bottom' | 'left';

export type BoardState = Cell[][];

export const TOGGLE_CELL = 'TOGGLE_CELL';
export const TOGGLE_CONSTRAINT = 'TOGGLE_CONSTRAINT';

export type Action =
  | { type: typeof TOGGLE_CELL; rowIndex: number; cellIndex: number }
  | {
      type: typeof TOGGLE_CONSTRAINT;
      rowIndex: number;
      cellIndex: number;
      direction: Direction;
    };

export type SymbolValue = 'S' | 'M';
export type ValidRow = SymbolValue[];
export type ValidBoard = ValidRow[];
