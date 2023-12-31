import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
}

const products: Product[] = [];

interface NumberRange {
  min: number;
  max: number;
}

export function getRandomNumber(range: NumberRange): number {
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

const brands = ["Mango", "H&M"];

for (let i = 1; i <= 10; i++) {
  const product: Product = {
    id: uuid(),
    name: faker.commerce.productName(),
    brand: brands[Math.floor(Math.random() * 2)],
    price: parseFloat(faker.commerce.price()),
    rating: Number(getRandomNumber({ min: 1, max: 5 })),
    image: faker.image.urlLoremFlickr({ category: "fashion" }),
  };

  products.push(product);
}

export default products;
