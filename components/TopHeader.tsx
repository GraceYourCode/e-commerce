import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io";

const headingContent = "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"

const TopHeader = () => {
  return (
    <div className="bg-black sm:px-8 md:px-12 lg:px-20 xl:px-28 flex justify-end py-3 md:py-4">
      <header className="text-white text-xs md:text-sm grid grid-cols-8 md:flex max-lg:w-full max-lg:justify-between lg:gap-32 xl:gap-60 items-center">
        <p className="flex gap-2 md:gap-3 items-center col-span-7">
          <span>{headingContent}</span>
          <Link href="/" className="underline font-bold">Shop Now</Link>
        </p>

        <aside className="flex items-center gap-2">
          <span>English</span>
          <IoIosArrowDown className="text-xl"/>
        </aside>
      </header>
    </div>
  )
}

export default TopHeader
