import BestSelling from "@/components/home/BestSelling"
import Categories from "@/components/home/Categories"
import FlashSales from "@/components/home/FlashSales"
import Hero from "@/components/home/Hero"

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Categories />
      <BestSelling />
    </div>
  )
}

export default HomePage
