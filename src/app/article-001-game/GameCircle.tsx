import { useContext } from 'react';
import { GameDispatchContext } from './game-context';

type GameCircleProps = {
  hexColor: string;
  isActive: boolean;
};

export const GameCircle = ({ hexColor, isActive }: GameCircleProps) => {
  const dispatch = useContext(GameDispatchContext);

  const handleClick = () => {
    dispatch({ type: 'MOVE_COLOR', payload: hexColor });
  };

  const style = {
    backgroundColor: hexColor,
  };

  let wrapperClass = 'p-2 border-2 border-dotted ';
  wrapperClass += isActive ? ' border-gray-500' : 'border-transparent';

  return (
    <div className={wrapperClass}>
      <div
        className="w-16 h-16 rounded-full"
        role="button"
        style={style}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
      />
    </div>
  );
};
