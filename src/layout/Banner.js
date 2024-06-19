import React from "react";
import banner from "../images/banner1.jpg";
import { useNavigation } from "./useNavigation";

const Banner = () => {
  //Khởi tạo Navigate để chuyển hướng
  const handleNavigate = useNavigation();

  return (
    <div
      className="w-full italic bg-cover bg-center py-[10%]" // Sửa lại thành items-center
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="w-[500px] h-full pl-[10%]">
        <p className="text-[18px] text-[#9b9999]">NEW INSPIRATION 2024</p>
        <p className="text-[50px]">20% OFF ON NEW SEASON</p>
        <button
          className="text-center italic text-[26px] bg-[#333335] text-[#e4e2e2] py-3 px-11"
          onClick={() => {
            handleNavigate("shop");
          }}
        >
          Browse collection
        </button>
      </div>
    </div>
  );
};

export default Banner;
