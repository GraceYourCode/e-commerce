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