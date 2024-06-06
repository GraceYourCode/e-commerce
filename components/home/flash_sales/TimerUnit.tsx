const TimerUnit = ({unit, value}: {unit: string, value: string | number}) => {
  return (
    <div className="text-black">
      <span className="text-2xs font-medium">{unit}</span>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  )
}

export default TimerUnit
