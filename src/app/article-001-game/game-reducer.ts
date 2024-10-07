import { createGame } from "./gameHelpers"

type GameState = {
  board: string[]   // player's active board and what they'll see
  answers: string[] // the answers
  moves: number     // how many moves the player has made
  correct: number   // how many correct
}

type GameAction = {
  type: 'NEW_GAME'
  payload: any
}

export const initialState: GameState = {
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
    default: {
      return state
    }
  }  
}
