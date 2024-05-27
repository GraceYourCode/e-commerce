import { imgCards } from "@/utils/data"
import Button from "../Button"
import Timer from "../flash_sales/Timer"
import Carousel from "./Carousel"
import CarouselBtns from "./CarouselButton"
import ImgCard from "./CarouselImgCard"
import Heading from "./HomePageSectionHeading"
import Title from "./HomePageSectionsTitle"

const FlashSales = () => {
  return (
    <div className="align-page mt-20 flex flex-col items-center">
      <Title text="Today's"/>
      <Heading title="Flash Sales" timer={<Timer />}>
        <CarouselBtns />
      </Heading>
      <Carousel columns={4}>
      {
        imgCards.map(card => <ImgCard image={card.image} alt={card.alt} noOfRate={card.noOfRate} 
          discount={card.discount} key={card.alt} rating={card.rating}
          description={card.description} price={card.price} formalPrice={card.formalPrice}/>)
      }
      </Carousel>
      <Button text="View All Products"/>
      <span className="border-b w-full mt-16"></span>
    </div>
  )
}

export default FlashSales
