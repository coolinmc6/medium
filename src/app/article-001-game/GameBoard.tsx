import { type GameState } from "./game-reducer"
import { GameCircle } from "./GameCircle"

type GameBoardProps = {
  game: GameState
  handleMoveColor: (hexColor: string) => void
}

export const GameBoard = ({ game, handleMoveColor }: GameBoardProps) => {
  return (
    <div className="w-full md:w-2/3">
      <div className="mb-4 mt-4">  
        <div className="flex justify-around mb-4">
          {game.board.map((hexColor) => {
            return <GameCircle key={hexColor} handleMoveColor={handleMoveColor} hexColor={hexColor} isActive={game.activeHex === hexColor} />
          })}
        </div>
      </div>
    </div>
  )
}