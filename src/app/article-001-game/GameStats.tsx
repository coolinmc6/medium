import { useContext } from 'react';
import { GameStateContext, GameDispatchContext } from './game-context';

export const GameStats = () => {
  const game = useContext(GameStateContext);
  const dispatch = useContext(GameDispatchContext);

  const handleNewGame = () => {
    dispatch({ type: 'NEW_GAME', payload: null });
  };

  return (
    <div className="w-full md:w-1/3 flex-row md:flex-col">
      <div className="text-center">
        {game.correct === 5 ? (
          <div className="text-2xl text-green-500">You Win!</div>
        ) : null}
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
        <button className="bg-blue-300 p-2" onClick={handleNewGame}>
          New Game
        </button>
      </div>
    </div>
  );
};
