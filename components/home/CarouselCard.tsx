import { Card } from "@/utils/types"
import Image from "next/image"

const CarouselCard: React.FC<Card> = ({image, text}) => {
  return (
    <div className="flex items-center flex-col py-6 border rounded text-sm gap-4">
      <Image src={image} alt={text}/>
      <p>{text}</p>
    </div>
  )
}

export default CarouselCard
