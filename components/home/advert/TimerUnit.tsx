const TimerUnit = ({value, unit}: {value: number | string, unit: string}) => {
  return (
    <div className="w-12 h-12 rounded-full text-xs bg-white flex flex-col items-center justify-center">
      <span className="font-semibold">{value}</span>
      <p className="text-2xs">{unit}</p>
    </div>
  )
}

export default TimerUnit
