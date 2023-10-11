import React, { useState } from "react";
import logoImg from "../assets/images/zevilogo.png";
import SearchBar from "./Searchbar";
import products from "../data/products";
import Product from "./Product";
import { BsChevronDown } from "react-icons/bs";

const RatedStar = () => {
  return (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

const UnratedStar = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-300 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );
};

const ProductList = () => {
  const [productList, setProductList] = useState(products);
  console.log(productList);
  const brands = ["Mango", "H&M"];
  const priceRanges = ["Under 500", "500 To 1000", "1000 +"];
  const ratings = [5, 4, 3, 2, 1];
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [priceRangeOpen, setPriceRangeOpen] = useState(false);
  const [ratingOpen, setRatingOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const getPriceRange = (price: number) => {
    if (price < 500) {
      return "Under 500";
    } else if (price >= 500 && price < 1000) {
      return "500 To 1000";
    } else {
      return "1000 +";
    }
  };

  const togglePriceRange = (priceRange: string) => {
    if (selectedPriceRanges.includes(priceRange)) {
      setSelectedPriceRanges(
        selectedPriceRanges.filter((range) => range !== priceRange)
      );
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, priceRange]);
    }
  };

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredProducts = products.filter((product) => {
    if (
      selectedRatings.length === 0 &&
      selectedPriceRanges.length === 0 &&
      selectedBrands.length === 0
    ) {
      return true;
    }

    const isRatingMatch =
      selectedRatings.length === 0 || selectedRatings.includes(product.rating);
    const isPriceMatch =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.includes(getPriceRange(product.price));
    const isBrandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return isRatingMatch && isPriceMatch && isBrandMatch;
  });

  const toggleRating = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  // const filteredProducts = products.filter((product) => {
  //   if (selectedRatings.length === 0) {
  //     return true;
  //   }
  //   return selectedRatings.includes(product.rating);
  // });

  const toggleBrands = () => {
    setBrandsOpen(!brandsOpen);
  };
  const togglePriceRangeOpen = () => {
    setPriceRangeOpen(!priceRangeOpen);
  };
  const toggleRatingOpen = () => {
    setRatingOpen(!ratingOpen);
  };

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
            <SearchBar isHome={false} />
          </div>
        </div>
      </div>
      <div className="absolute grid grid-cols-10 gap-10">
        <div className="col-span-3">
          <div className="px-10 flex flex-col justify-center ">
            <h2 className="font-sans text-4xl ">Search Results</h2>
            <div className="mt-14 flex gap-4 flex-col">
              <div>
                <div
                  className="flex justify-between uppercase cursor-pointer"
                  onClick={toggleBrands}
                >
                  <h3 className="font-semibold mb-4">Brand</h3>
                  <BsChevronDown />
                </div>
                {brandsOpen && (
                  <div className="flex flex-col gap-2">
                    {brands.map((brand, index) => (
                      <div className="flex gap-2 items-center" key={index}>
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                        />
                        {brand}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <hr />
              <div>
                <div
                  className="flex justify-between uppercase cursor-pointer"
                  onClick={togglePriceRangeOpen}
                >
                  <h3 className="font-semibold mb-4">Price Range</h3>
                  <BsChevronDown />
                </div>
                {priceRangeOpen && (
                  <div className="flex flex-col gap-2">
                    {priceRanges.map((priceRange, index) => (
                      <div className="flex gap-2 items-center" key={index}>
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes(priceRange)}
                          onChange={() => togglePriceRange(priceRange)}
                        />
                        {priceRange}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <hr />
              <div>
                <div
                  className="flex justify-between uppercase cursor-pointer"
                  onClick={toggleRatingOpen}
                >
                  <h3 className="font-semibold mb-4">Rating</h3>
                  <BsChevronDown />
                </div>
                {ratingOpen && (
                  <div className="flex flex-col gap-2">
                    {ratings.map((rating, index) => (
                      <div className="flex gap-3 items-center" key={index}>
                        <input
                          type="checkbox"
                          checked={selectedRatings.includes(rating)}
                          onChange={() => toggleRating(rating)}
                        />
                        <div className="flex">
                          {Array.from({ length: rating }).map((_, index) => (
                            <RatedStar key={index} />
                          ))}
                          {Array.from({ length: 5 - rating }).map(
                            (_, index) => (
                              <UnratedStar key={index} />
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 mt-5">
          <div className="grid grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <Product {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
