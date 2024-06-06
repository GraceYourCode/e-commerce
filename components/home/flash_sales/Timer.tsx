import TimerUnit from "./TimerUnit"

const Timer = () => {
  return (
    <div className="flex gap-4 items-center text-red font-semibold">
      <TimerUnit unit="Days" value={"02"}/>:
      <TimerUnit unit="Hours" value={13}/>:
      <TimerUnit unit="Minutes" value={45}/>:
      <TimerUnit unit="Seconds" value={14}/>
    </div>
  )
}

export default Timer
