import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io";

const headingContent = "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"

const TopHeader = () => {
  return (
    <div className="bg-black px-28 flex justify-end py-4">
      <header className="text-white text-sm flex gap-60 items-center">
        <p className="flex gap-3 items-center">
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
