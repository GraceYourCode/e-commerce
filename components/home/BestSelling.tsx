import { bestSellingCards } from "@/utils/data";
import Button from "../Button";
import Carousel from "./Carousel";
import Heading from "./HomePageSectionHeading";
import Title from "./HomePageSectionsTitle";
import ImgCard from "./CarouselImgCard";

const BestSelling = () => {
  return (
    <div className="align-page mt-12 flex flex-col items-center">
      <Title text="This Month"/>
      <Heading title="Best Selling Products">
        <Button text="View All"/>
      </Heading>
      <Carousel columns={4}>
        {
          bestSellingCards.map(card => (
            <ImgCard alt={card.alt} description={card.description} image={card.image}
            noOfRate={card.noOfRate} price={card.price} rating={card.rating}
            key={card.alt} formalPrice={card.formalPrice} />
          ))
        }
      </Carousel>
    </div>
  )
}

export default BestSelling;