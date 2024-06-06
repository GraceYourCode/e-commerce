import Adverts from "@/components/home/Adverts"
import BestSelling from "@/components/home/BestSelling"
import Categories from "@/components/home/Categories"
import Featured from "@/components/home/Featured"
import FlashSales from "@/components/home/FlashSales"
import Hero from "@/components/home/Hero"
import Products from "@/components/home/Products"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
      <Adverts />
      <Products />
      <Featured />
    </div>
  )
}

export default HomePage
