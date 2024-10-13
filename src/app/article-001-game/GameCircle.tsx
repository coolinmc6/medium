type GameCircleProps = {
  hexColor: string
  handleMoveColor: (hexColor: string) => void
  isActive: boolean
}

export const GameCircle = ({ hexColor, handleMoveColor, isActive }: GameCircleProps) => {
  const handleClick = () => {
    handleMoveColor(hexColor)
  }

  const style = {
    backgroundColor: hexColor
  }

  let wrapperClass = 'p-2 border-2 border-dotted '
  wrapperClass += isActive ? ' border-gray-500' : 'border-transparent'

  return (
    <div className={wrapperClass}>
      <div className="w-16 h-16 rounded-full" style={style} onClick={handleClick}  />
    </div>
  )
}