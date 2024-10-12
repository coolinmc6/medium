"use client"

import { useReducer, useEffect } from "react"
import { reducer, initialState } from "./game-reducer"
import { GameStats } from "./GameStats"
import { GameBoard } from "./GameBoard"

export default function Game() {
  const [game, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'NEW_GAME', payload: null })
  }, [])

  const handleNewGame = () => {
    dispatch({ type: 'NEW_GAME', payload: null })
  }

  const handleMoveColor = (hexColor: string) => {
    dispatch({ type: 'MOVE_COLOR', payload: hexColor })
  }
  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">Game</h1>
      <div className="flex flex-col md:flex-row max-w-3xl">
        <GameStats game={game} handleNewGame={handleNewGame} />
        <GameBoard game={game} handleMoveColor={handleMoveColor} />
      </div>
    </div>
  )
}