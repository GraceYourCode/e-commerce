const Button = ({text, addedClass}: {text: string, addedClass?: string}) => {
  return (
    <button className={`py-3 text-sm rounded ${addedClass || "bg-red"} px-9 text-white`}>{text}</button>
  )
}

export default Button
