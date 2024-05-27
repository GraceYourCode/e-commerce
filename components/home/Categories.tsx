import { cards } from "@/utils/data"
import CarouselBtns from "./CarouselButton"
import Heading from "./HomePageSectionHeading"
import Title from "./HomePageSectionsTitle"
import CarouselCard from "./CarouselCard"
import Carousel from "./Carousel"

const Categories = () => {
  return (
    <div className="align-page mt-20 flex flex-col items-center">
      <Title text="Categories" />
      <Heading title="Browse By Category">
        <CarouselBtns />
      </Heading>
      <Carousel columns={6}>
        {cards.map(card => <CarouselCard image={card.image} text={card.text} key={card.text}/>)}
      </Carousel>
    </div>
  )
}

export default Categories
