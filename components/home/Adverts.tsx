import Image from "next/image"
import jblBoomBox from '@/public/assets/jbl-boom-box.svg'
import ellipse from '@/public/assets/ellipse.svg'
import Timer from "./Timer"
import Button from "../Button"

const Adverts = () => {
  return (
    <div className="align-page mt-20">
      <div className="grid grid-cols-2 bg-black relative p-16">

      <main className="flex flex-col justify-between items-start">
        <p className="text-green text-xs font-medium">Categories</p>
        <header className="text-white text-3xl w-2/3 tracking-widest">Enhance Your Music Experience</header>
        <Timer />
        <Button text="Buy Now" addedClass="bg-green"/>
      </main>

      <Image src={jblBoomBox} alt="jbl boom box" className="relative z-20"/>
      <Image src={ellipse} alt="jbl boom box" className="absolute right-0 top-0 w-2/3"/>
      </div>
    </div>
  )
}

export default Adverts
