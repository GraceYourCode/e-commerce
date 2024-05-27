const Button = ({text}: {text: string}) => {
  return (
    <button className="py-3 text-sm rounded bg-red px-9 text-white">{text}</button>
  )
}

export default Button
