import React, { type PropsWithChildren } from 'react';
import clsx from 'clsx';

type TileProps = {
  className?: string;
} & PropsWithChildren;

const Tile = ({ children, className }: TileProps) => {
  return (
    <div
      className={clsx(
        'bg-gray-900 rounded-lg p-4 text-white text-lg',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tile;

const Title = ({ children, className }: TileProps) => {
  return <h2 className={clsx('text-4xl mb-6', className)}>{children}</h2>;
};

const Body = ({ children, className }: TileProps) => {
  return <div className={clsx('', className)}>{children}</div>;
};

Tile.Title = Title;
Tile.Body = Body;
