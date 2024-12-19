import { createContext, type Dispatch } from 'react';
import { type GameState, type GameAction, initialState } from './game-reducer';

export const GameStateContext = createContext<GameState>(initialState);
export const GameDispatchContext = createContext<Dispatch<GameAction>>(
  () => initialState
);
