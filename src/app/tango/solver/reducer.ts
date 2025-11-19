import { BoardState, Action, TOGGLE_CELL, TOGGLE_CONSTRAINT } from '../types';

export const boardReducer = (state: BoardState, action: Action): BoardState => {
  switch (action.type) {
    case TOGGLE_CELL: {
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
    case TOGGLE_CONSTRAINT:
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
