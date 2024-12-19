import { useContext } from 'react';
import { GameCircle } from './GameCircle';
import { GameStateContext } from './game-context';

export const GameBoard = () => {
  const game = useContext(GameStateContext);
  return (
    <div className="w-full md:w-2/3">
      <div className="mb-4 mt-4">
        <div className="flex justify-around mb-4">
          {game.board.map((hexColor) => {
            return (
              <GameCircle
                key={hexColor}
                hexColor={hexColor}
                isActive={game.activeHex === hexColor}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
