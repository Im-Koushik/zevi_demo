import React, { useState } from "react";
import heart from "../assets/details/love.svg";
import whiteheart from "../assets/details/icons8-heart-100.png";
const Product = ({
  id,
  name,
  brand,
  rating,
  price,
  image,
}: {
  id: string;
  name: string;
  brand: string;
  rating: number;
  price: number;
  image: string;
}) => {
  const ratedStars: JSX.Element[] = [];
  for (let i = 1; i <= rating; i++) {
    ratedStars.push(
      <svg
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  const unratedStars: JSX.Element[] = [];
  for (let i = 1; i <= 5 - rating; i++) {
    unratedStars.push(
      <svg
        className="w-5 h-5 text-gray-300 dark:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  }
  const [toggleHeart, setToggleHeart] = useState(false);
  const addWishlist = () => {
    setToggleHeart(!toggleHeart);
  };

  return (
    <div className="w-[210px] mt-[40px] flex flex-col justify-center gap-2 py-4 relative">
      <div className="relative group">
        <img
          src={image}
          className="h-[280px] rounded-t-sm w-full object-cover"
          alt=""
        />
        <div className="absolute flex justify-center items-center bottom-0 left-0 w-full bg-indigo-500 text-white text-center p-2 opacity-0 group-hover:opacity-60 cursor-pointer">
          View Product
        </div>
      </div>

      {toggleHeart ? (
        <img
          onClick={addWishlist}
          src={heart}
          alt="not-wishlist"
          className="h-7 w-7 absolute top-8 right-4 cursor-pointer"
        />
      ) : (
        <img
          onClick={addWishlist}
          src={whiteheart}
          alt="wishlist"
          className="h-7 w-7 absolute top-8 right-4 cursor-pointer"
        />
      )}

      <h3 className="font-semibold text-md">{name}</h3>
      <div className="flex gap-2">
        <h2 className="text-gray-600 line-through">Rs.{price + 50}</h2>
        <h2 className="text-blue-500 font-medium">Rs.{price}</h2>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center">
          {ratedStars}
          {unratedStars}
          <p className="ml-2 text-sm  text-gray-500 dark:text-gray-500">
            (210)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
