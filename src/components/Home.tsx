import React from "react";
import Searchbar from "./Searchbar";
import bgImg from "../assets/images/homebg.jpg";

const Home = () => {
  return (
    <div className="relative h-screen">
      <div
        className="bg-cover bg-no-repeat h-full flex justify-center items-center object-contain"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-30"></div>
      </div>
      <div className="absolute top-0 h-1/2 ">
        <div className="absolute top-1/2 h-[60px] w-screen flex justify-center items-center">
          <div className="w-[60%]">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
