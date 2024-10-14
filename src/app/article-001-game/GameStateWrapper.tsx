import { useReducer, useEffect } from 'react'
import { GameStateContext, GameDispatchContext } from './game-context'
import { initialState, reducer } from './game-reducer'

type GameStateWrapperProps = {
  children: any
}

export const GameStateWrapper = ({ children }: GameStateWrapperProps) => {
  const [game, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: null })
  }, [])

  return (
    <GameStateContext.Provider value={game}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  )
}