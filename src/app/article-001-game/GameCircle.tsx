type GameCircleProps = {
  hexColor: string
  handleMoveColor: (hexColor: string) => void
}

export const GameCircle = ({ hexColor, handleMoveColor }: GameCircleProps) => {
  const handleClick = () => {
    handleMoveColor(hexColor)
  }

  const style = {
    backgroundColor: hexColor
  }

  return (
    <div className={'w-16 h-16 rounded-full'} style={style} onClick={handleClick}  />
  )
}