import Image from "next/image"
import logo from '@/public/logo.svg'
import { IoHeartOutline, IoCartOutline } from "react-icons/io5";
import Links from "./nav_components/Links"
import SearchBar from "./nav_components/SearchBar"

const src = "https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E5WHp1TrPAGyBgErSXGRLj0GAwxDYY14m0as9l3dYd3ts34UHxiUZ87hEcatxvvY3y~halkP6u5jdE5XbEkp6tAMnqKc3YAvO00bUZgkWp~oYktlPfx6RBad-BrfuFsKILO4ab6-91ms4Ux5KxgVCsGkeu7I-nC5akzjwQ5g-a5dRYNr2KmqzFjIwe4CJXEqQHcJ1PFBufe0fedATltcY-hcrRu1tFH2nbp3PFrsRJ0MstB-Qkwk~n89JvOiinhbBYBdc1ML7ih~xWMQWeO1CbPVVkFWyf0~cl05b~gyzYplN4kEAguScB4cVolIIsi3hQDmw9OZ-29Gl0dmLoT05Q__"
const NavigationBar = () => {
  return (
    <nav className="flex justify-between items-center px-28 py-6 border-0 border-b border-solid ">
      <Image src={logo} alt="logo" />
      <Links />
      <div className="flex gap-4 items-center text-xl">
        <SearchBar />
        <IoHeartOutline />
        <IoCartOutline />
      </div>
    </nav>
  )
}

export default NavigationBar
