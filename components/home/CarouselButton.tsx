import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"

const CarouselBtns = () => {
  return (
    <div className="flex gap-1">
      <button className="carousel-btns">
        <IoIosArrowRoundBack />
      </button>

      <button className="carousel-btns">
        <IoIosArrowRoundForward />
      </button>
    </div>
  )
}

export default CarouselBtns
