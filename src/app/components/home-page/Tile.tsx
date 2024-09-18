import React, { type PropsWithChildren} from 'react'
import clsx from 'clsx'

type TileProps = {
  className?: string
} & PropsWithChildren

const Tile = ({ children, className }: TileProps) => {
  return (
    <div className={clsx("bg-gray-900 rounded-lg p-4 text-white text-lg", className)}>
      {children}
    </div>
  )
}

export default Tile