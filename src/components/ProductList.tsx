import React, { useState } from "react";
import logoImg from "../assets/images/zevilogo.png";
import SearchBar from "./Searchbar";
import products from "../data/products";
import Product from "./Product";

const ProductList = () => {
  const [productList, setProductList] = useState(products);
  console.log(productList);
  return (
    <div>
      <div className="relative h-[150px] flex justify-center items-center ">
        <img
          src={logoImg}
          alt="Logo"
          className="absolute top-11 right-11 w-20"
        />
        <div className="absolute flex justify-center items-center w-screen top-11">
          <div className="w-[40%]">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="absolute grid grid-cols-10 gap-10">
        <div className="col-span-3">
          <div className="px-8 flex flex-col justify-center ">
            <h2 className="font-sans text-4xl">Search Results</h2>
            <div></div>
          </div>
        </div>

        <div className="col-span-7">
          <div className="grid grid-cols-4 gap-2">
            {productList.map((product) => (
              <div key={product.id}>
                <Product
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
