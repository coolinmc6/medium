import { type GameState } from "./game-reducer"

type GameStatsProps = {
  game: GameState
  handleNewGame: () => void
}

export const GameStats = ({ game, handleNewGame }: GameStatsProps) => {
  return (
    <div className="w-full md:w-1/3 flex-row md:flex-col">
      <div className="text-center">
        {game.correct === 5 ? <div className="text-2xl text-green-500">You Win!</div> : null}
      </div>
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
  )
}