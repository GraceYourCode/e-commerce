import Image from "next/image"
import woman from '@/public/assets/woman.svg'
import Description from "./Description"

const Horizontal = () => {
  return (
    <div className="bg-black col-span-2 flex  relative justify-end">
      <Image src={woman} alt="attractive woman"/>
      <Description description="Featured woman collections that give you another vibe."
      title="Women's Collections" addedClass="w-1/2"/>
    </div>
  )
}

export default Horizontal
