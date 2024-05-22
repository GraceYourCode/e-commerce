"use client"

import Image from "next/image"
import logo from '@/public/logo.svg'
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import Links from "./nav_components/Links"
import SearchBar from "./nav_components/SearchBar"
import { IoIosClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";

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

const NavigationBar = () => {
  const [menuClosed, setMenuClosed] = useState(true);

  const toggleMenuList = () => setMenuClosed(prev => !prev)

  return (
    <>
      <nav className="flex justify-between items-center sm:px-8 md:px-12 lg:px-20 xl:px-28 py-6 border-b ">
        <Image src={logo} alt="logo" />
        <Links addedClass="md:flex hidden" />
        <div className="flex gap-4 items-center text-2xl xl:text-4xl">
          <SearchBar addedClass="hidden xl:flex" />
          <IoHeartOutline />
          <IoCartOutline />
        </div>
      </nav>

      {
        // for devices with smaller screens
        <div className="xl:hidden pt-4 md:pt-5 sm:px-8 md:px-12 lg:px-20 flex gap-5 items-center relative">
          <IoMdMenu className="lg:hidden block text-3xl" onClick={() => toggleMenuList()} />
          <SearchBar addedClass="flex w-96" />
          <aside className={`hero-aside ${menuClosed ? "h-0" : "h-fit max-lg:p-6"}`}>
            <IoIosClose className="lg:hidden block text-3xl" onClick={() => toggleMenuList()}/>
            {
              menuLists.map(list => <p key={list}>{list}</p>)
            }
          </aside>
        </div>
      }

    </>
  )
}

export default NavigationBar
