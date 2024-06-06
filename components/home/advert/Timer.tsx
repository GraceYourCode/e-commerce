import TimerUnit from "./TimerUnit"

const Timer = () => {
  return (
    <div className="flex gap-5">
      <TimerUnit unit="Days" value={"03"} />
      <TimerUnit unit="Hours" value={23} />
      <TimerUnit unit="Minutes" value={"38"} />
      <TimerUnit unit="Sconds" value={"52"} />
    </div>
  )
}

export default Timer
