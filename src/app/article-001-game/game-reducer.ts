import { createGame, getNumberCorrect } from "./gameHelpers"

export type GameState = {
  activeHex: string | null // the index of the active hex
  board: string[]   // player's active board and what they'll see
  answers: string[] // the answers
  moves: number     // how many moves the player has made
  correct: number   // how many correct
}

type GameAction = {
  type: 'NEW_GAME' | 'MOVE_COLOR'
  payload: any
}

export const initialState: GameState = {
  activeHex: null,
  answers: [],
  board: [],
  correct: 0,
  moves: 0,
}

export const reducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case 'NEW_GAME': {
      const newGame = createGame()
      return {
        ...state, 
        ...newGame
      }
    }
    case 'MOVE_COLOR': {
      // if the game is over, don't allow any more moves
      if (state.correct === 5) {
        return state;
      }

      // if there's no active hex, set the active hex
      if (!state.activeHex) {
        return {
          ...state,
          activeHex: action.payload
        }
      } 
      
      // if the active hex is the same as the clicked hex, clear the active hex
      if (state.activeHex === action.payload) {
        return {
          ...state,
          activeHex: null
        }
      }

      // Otherwise, swap the active hex with the clicked hex
      const newMoves = state.moves + 1
      const currentSelectedIndex = state.board.indexOf(state.activeHex)
      const targetMoveIndex = state.board.indexOf(action.payload)
      const newBoard = state.board.concat()
      newBoard[currentSelectedIndex] = action.payload
      newBoard[targetMoveIndex] = state.activeHex
      const newCorrect = getNumberCorrect(newBoard, state.answers)
      return {
        ...state,
        board: newBoard,
        activeHex: null,
        moves: newMoves,
        correct: newCorrect
      }
    }
    default: {
      return state
    }
  }  
}
