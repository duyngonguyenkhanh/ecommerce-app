import React from "react";
import { useNavigation } from "./useNavigation";

const Collection = () => {
  const handleNavigate = useNavigation();

  return (
    <div className="w-full">
      <div className="text-center italic mt-[60px] mb-[40px]">
        <p className="text-[20px] text-[#868484]">
          CAREFULLY CREATED COLLECTION
        </p>
        <p className="text-[30px] font-medium">BROWSE OUR CATEGORIES</p>
      </div>
      <div className="grid grid-cols-2 gap-[2%] pb-[2%]">
        <img
          className=" w-full opacity-100 hover:opacity-40"
          src={require("../images/product_1.png")}
          alt=""
          onClick={() => {
            handleNavigate("shop");
          }}
        />
        <img
          className="w-full opacity-100 hover:opacity-40"
          src={require("../images/product_2.png")}
          alt=""
          onClick={() => {
            handleNavigate("shop");
          }}
        />
      </div>
      <div className="grid grid-cols-3 gap-[2%] ">
        <img
          className="w-full  opacity-100 hover:opacity-40"
          src={require("../images/product_3.png")}
          alt=""
          onClick={() => {
            handleNavigate("shop");
          }}
        />
        <img
          className="w-full opacity-100 hover:opacity-40"
          src={require("../images/product_4.png")}
          alt=""
          onClick={() => {
            handleNavigate("shop");
          }}
        />
        <img
          className="w-full opacity-100 hover:opacity-40"
          src={require("../images/product_5.png")}
          alt=""
          onClick={() => {
            handleNavigate("shop");
          }}
        />
      </div>
    </div>
  );
};

export default Collection;
