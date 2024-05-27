import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageCard {
    discount?: string;
    image: string | StaticImport;
    alt: string;
    description?: string;
    price?: number | string;
    formalPrice?: string | number;
    rating: number;
    noOfRate?: number;
}

export interface Card {
  image: StaticImport | string;
  text: string;
}