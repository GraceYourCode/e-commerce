const Title = ({text}: {text: string}) => {
  return (
    <div className="flex gap-3 relative items-center w-full">
      <span className="h-9 bg-red w-3 rounded-sm"></span>
      <p className="text-red text-sm font-semibold">{text}</p>
    </div>
  )
}

export default Title
