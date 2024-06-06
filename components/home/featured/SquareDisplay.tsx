import { featuredCards } from "@/utils/types"
import Image from "next/image"
import Description from "./Description"
import ellipse from '@/public/assets/ellipse.svg'

const Square: React.FC<featuredCards> = ({ description, image, title }) => {
  return (
    <div className="relative py-5 bg-black flex items-center justify-center">
      <Image src={ellipse} alt="ellipse" className="absolute top-0 left-0" />
      <Image src={image} alt={title} className="relative"/>
      <Description description={description} title={title} />
    </div>
  )
}

export default Square
