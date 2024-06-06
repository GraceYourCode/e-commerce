import Link from "next/link"

const Description = ({ title, description, addedClass }: { title: string, description: string, addedClass?: string }) => {
  return (
    <div className={`text-white text-sm flex ${addedClass} flex-col gap-y-2 absolute bottom-5 left-5`}>
      <header className="text-lg font-medium">{title}</header>
      <p>{description}</p>
      <Link href={"/"} className="underline">Shop Now</Link>
    </div>
  )
}

export default Description
