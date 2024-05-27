import Image from "next/image";
import heroImage from '@/public/assets/hero-image.svg';
import { IoLogoApple } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const menuLists: Array<string> = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Goceries & Pets",
  "Health & Beauty",
]

const Hero = () => {
  return (
    <div className="block h-fit lg:grid grid-cols-4 w-full relative align-page max-md:pt-6 max-lg:pt-8">
      <aside className={`hero-aside-desktop`}>
        {
          menuLists.map(list => <p key={list}>{list}</p>)
        }
      </aside>

      <main className="col-span-3 lg:pt-8 lg:pl-8">
        <div className="bg-black flex items-center justify-center relative sm:grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 h-full">
          <aside className="hero-contents">
            <p className="flex items-center -translate-x-2 max-md:text-xs">
              <IoLogoApple className="text-3xl md:text-5xl"/>
              <span>iPhone 14 Series</span>
            </p>

            <header className="text-2xl md:text-3xl xl:text-3xl lg:w-8/12 font-semibold">Up to 10% off Voucher</header>

            <Link href={"/"} className="flex items-center gap-3">
              <span className="border-b">Shop Now</span>
              <IoIosArrowRoundForward className="text-4xl"/>
            </Link>
          </aside>

          <Image src={heroImage} alt="hero image" className="sm:col-span-2 md:col-span-3 lg:col-span-1 " />
        </div>
      </main>
    </div>
  )
}

export default Hero
