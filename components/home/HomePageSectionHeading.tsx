import { ReactHTMLElement } from "react"

const Heading = ({ title, timer, children }: { title: string, timer?: React.ReactNode, children?: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center w-full mt-4">
      <header className="flex gap-32 items-end">
        <p className="text-2xl font-semibold">{title}</p>
        {timer}
      </header>
      {children}
    </div>
  )
}

export default Heading
