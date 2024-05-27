import { Card, ImageCard } from "@/utils/types"
import gamePad from '@/public/assets/game-pad.svg'
import comfortChair from '@/public/assets/comfort-chair.svg'
import gamingMonitor from '@/public/assets/gaming-monitor.svg'
import wiredKeyboard from '@/public/assets/wired-keyboard.svg'
import camera from '@/public/assets/camera.svg'
import cellPhone from '@/public/assets/cell-phone.svg'
import computer from '@/public/assets/computer.svg'
import gaming from '@/public/assets/gaming.svg'
import headPhones from '@/public/assets/head-phones.svg'
import smartWatch from '@/public/assets/smart-watch.svg'
import bookShelf from '@/public/assets/book-shelf.svg'
import cpuCooler from '@/public/assets/cpu-cooler.svg'
import gucciBag from '@/public/assets/gucci-bag.svg'
import northCoat from '@/public/assets/north-coat.svg'
import canonCamera from '@/public/assets/canon-camera.svg'
import dogFood from '@/public/assets/dog-food.svg'
import curologyProduct from '@/public/assets/curology-product-set.svg'
import kidsCar from '@/public/assets/kids-electric-car.svg'
import gamingLaptop from '@/public/assets/gaming-laptop.svg'
import satinJacket from '@/public/assets/stin-jacket.svg'
import soccerCleats from '@/public/assets/zoom-soccer-cleats.svg'
import usbGamePad from '@/public/assets/usb-gamepad.svg'

export const imgCards: Array<ImageCard> = [
  {
    alt: "game pad",
    image: gamePad,
    discount: "-30%",
    description: "HAVIT HV-G92 Gamepad",
    price: "$120",
    formalPrice: "$160",
    rating: 5,
    noOfRate: 88,
  },
  {
    alt: "wired keyboard",
    image: wiredKeyboard,
    discount: "-20%",
    description: "AK-900 Wired Keyboard",
    price: "$960",
    formalPrice: "$1160",
    rating: 5,
    noOfRate: 79
  },
  {
    alt: "gaming monitor",
    image: gamingMonitor,
    discount: "-40%",
    description: "IPS LCD Gaming Monitor",
    price: "$370",
    formalPrice: "$400",
    rating: 3,
    noOfRate: 102
  },
  {
    alt: "comfort chair",
    image: comfortChair,
    discount: "-35%",
    description: "S-Series Comfort Chair",
    price: "$375",
    formalPrice: "$400",
    rating: 4,
    noOfRate: 76,
  },
]

export const bestSellingCards: Array<ImageCard> = [
  {
    alt: "the north coat",
    image: northCoat,
    description: "The north coat",
    price: "$260",
    formalPrice: "$360",
    rating: 5,
    noOfRate: 65,
  },
  {
    alt: "gucci bag",
    image: gucciBag,
    description: "Gucci Duffle Bag",
    price: "$960",
    formalPrice: "$1160",
    rating: 4,
    noOfRate: 79
  },
  {
    alt: "CPU cooler",
    image: cpuCooler,
    description: "RGB Liquid CPU Cooler",
    price: "$160",
    formalPrice: "$170",
    rating: 5,
    noOfRate: 102
  },
  {
    alt: "small bookshelf",
    image: bookShelf,
    description: "Small BookShelf",
    price: "$375",
    rating: 4,
    noOfRate: 76,
  },
]

export const productCards: Array<ImageCard> = [
  {
    alt: "breed dry dog food",
    image: dogFood,
    description: "Breed Dry Dog Food",
    price: "$100",
    rating: 3,
    noOfRate: 35,
  },
  {
    alt: "canon dos dslr camera",
    image: canonCamera,
    description: "CANON DOS DSLR Camera",
    price: "$360",
    rating: 4,
    noOfRate: 95
  },
  {
    alt: "asus fhd gaming laptop",
    image: gamingLaptop,
    description: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 5,
    noOfRate: 102
  },
  {
    alt: "curology product set",
    image: curologyProduct,
    description: "Curology Product Set",
    price: "$500",
    rating: 4,
    noOfRate: 102
  },
  {
    alt: "kids electric car",
    image: kidsCar,
    discount: "NEW",
    description: "Kids Electric Car",
    price: "$960",
    rating: 5,
    noOfRate: 76,
  },
  {
    alt: "jr zoom soccer cleats",
    image: soccerCleats,
    description: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 5,
    noOfRate: 76,
  },
  {
    alt: "gp11 shooter usb game pad",
    image: usbGamePad,
    discount: "NEW",
    description: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 4,
    noOfRate: 76,
  },
  {
    alt: "quilted satin jacket",
    image: satinJacket,
    description: "Quilted Satin Jacket",
    price: "$660",
    rating: 4,
    noOfRate: 76,
  },
]

export const cards: Array<Card> = [
  {
    image: cellPhone,
    text: "Phones",
  },
  {
    image: computer,
    text: "Computers",
  },
  {
    image: smartWatch,
    text: "Smart Watch",
  },
  {
    image: camera,
    text: "Camera",
  },
  {
    image: headPhones,
    text: "Head Phones",
  },
  {
    image: gaming,
    text: "Gaming",
  },
]