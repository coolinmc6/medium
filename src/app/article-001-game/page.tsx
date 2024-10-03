"use client"

import { createGame } from "./gameHelpers"

export default function Game() {
  const game = createGame()

  const handleNewGame = () => {
    console.log('new game!')
  }
  return (
    <div className="p-4 bg-white flex-grow">
      <h1 className="text-3xl text-center">Game</h1>
      <div className="flex flex-col md:flex-row max-w-3xl">
        <div className="w-full md:w-1/3 flex-row md:flex-col">
          <div className="text-center"></div>
          <div className="text-center md:mb-8">
            <div className="text-5xl">{game.correct}</div>
            <div className="text-2xl">Correct</div>
          </div>
          <div className="text-center md:mb-8">
            <div className="text-5xl">{game.moves}</div>
            <div className="text-2xl">Moves</div>
          </div>
          <div className="text-center">
            <button className="bg-blue-300 p-2" onClick={handleNewGame}>New Game</button>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="mb-4 mt-4">  
            <div className="flex justify-around mb-4">
                {game.board.map((hexColor) => {
                  return <div key={hexColor} className={'w-16 h-16 rounded-full'} style={{ backgroundColor: hexColor}}  />
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}