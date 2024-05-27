import { ImageCard } from "@/utils/types"
import Image from "next/image"
import { FaStar } from "react-icons/fa6"
import { IoEyeOutline, IoHeartOutline } from "react-icons/io5"

const ImgCard: React.FC<ImageCard> = ({
  image,
  alt,
  description,
  discount,
  price,
  formalPrice,
  rating,
  noOfRate,
  addedClass,
}) => {
  let newArray = Array.from(Array(rating));
  const arrayWithKeys = newArray.map((e, i) => i);

  return (
    <div>
      <div className="relative bg-secondary flex items-center justify-center h-64 rounded group">
        <Image src={image} alt={alt} className="m-auto" />
        {discount && <span className={`${addedClass || "bg-red"} px-3 py-1 rounded text-xs absolute top-4 left-4 text-white font-thin`}>{discount}</span>}
        <aside className="*:w-8 *:h-8 *:rounded-full *:bg-white *:flex *:items-center *:justify-center *:text-xl flex flex-col gap-2 absolute right-4 top-4">
          <span>
            <IoHeartOutline />
          </span>
          <span>
            <IoEyeOutline />
          </span>
        </aside>
        <button className="group-hover:w-full w-0 overflow-x-clip text-center py-2 bg-black text-white absolute bottom-0 rounded-b">Add to Cart</button>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <header className="font-semibold text-sm">{description}</header>
        <p className="flex gap-3 text-red text-xs font-semibold">
          <span>{price}</span>
          <span className="text-black opacity-50 line-through">{formalPrice}</span>
        </p>

        <p className="flex gap-1 text-yellow">
          {
            arrayWithKeys.map(key => <FaStar key={key} />)
          }
          <span className="text-black text-xs opacity-50">{`(${noOfRate})`}</span>
        </p>
      </div>
    </div>
  )
}

export default ImgCard
