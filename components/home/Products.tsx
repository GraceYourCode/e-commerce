import { productCards } from "@/utils/data"
import Carousel from "./Carousel"
import CarouselBtns from "./CarouselButton"
import Heading from "./HomePageSectionHeading"
import Title from "./HomePageSectionsTitle"
import ImgCard from "./CarouselImgCard"
import Button from "../Button"

const Products = () => {
  return (
    <div className="align-page mt-12 flex flex-col items-center">
      <Title text="Our Products"/>
      <Heading title="Explore Our Products">
        <CarouselBtns />
      </Heading>
      <Carousel columns={4}>
        {
          productCards.map(card => (
            <ImgCard alt={card.alt} description={card.description} image={card.image} noOfRate={card.noOfRate}
            price={card.price} rating={card.rating} discount={card.discount} key={card.alt} addedClass="bg-green" />
          ))
        }
      </Carousel>
      <Button text="View All Products"/>
    </div>
  )
}

export default Products
