import React, { useState } from "react";
import products, { Product } from "../data/products";
import { Link } from "react-router-dom";

const TrendCard = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const trendingProducts = productList.slice(0, 5);
  const popularSuggestions = productList.slice(0, 4);

  return (
    <Link to="/products">
      <div className="p-6 bg-white mt-5 rounded-md overflow-hidden shadow-2xl">
        <div className="flex items-start gap-4 flex-col justify-center">
          <h1 className="font-medium text-xl">Latest Trends</h1>
          <div className="flex gap-4  ">
            {trendingProducts.map((product) => (
              <div className="" key={product.id}>
                <img
                  className="h-[200px] w-[150px] object-cover "
                  src={product.image}
                  alt="img"
                />
                <p
                  className="text-sm font-sans py-2 "
                  style={{ whiteSpace: "nowrap" }}
                >
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-medium text-xl py-2 mt-4">Popular Suggestions</h2>
          {popularSuggestions.map((product) => (
            <div className="" key={product.id}>
              <p className="text-sm font-sans py-1">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default TrendCard;
