"use client"

import { GameStats } from "./GameStats"
import { GameBoard } from "./GameBoard"
import { GameStateWrapper } from "./GameStateWrapper"

export default function Game() {
  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">Game</h1>
      <div className="flex flex-col md:flex-row max-w-3xl">
        <GameStateWrapper>
          <GameStats />
          <GameBoard />
        </GameStateWrapper>
      </div>
    </div>
  )
}