import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const Items = ({ items }) => {
  // Biến lưu trạng thái modal
  const [showModal, setShowModal] = useState();
  const [item, setItem] = useState(null);

  //Hàm xử lý sự kiện click vào item
  const handleClick = (item) => {
    setShowModal(true)
    setItem(item)
  };



  return (
    <div className="italic">
      <div className="py-[50px]">
        <p className="text-[#969292] text-[18px]">MADE THE HARD WAY</p>
        <p className="font-medium text-[25px]">TOP TRENDING PRODUCTS</p>
      </div>
      <div className=" w-full">
        <div className="grid grid-cols-4 gap-10 ">
          {items.map((item, index) => (
            <div key={index} onClick={()=> handleClick(item)}>
              <img className="" src={`${item.img1}`} alt="" />
              <p className="flex justify-center font-semibold text-center pb-1">
                {item.name}
              </p>
              <p className="flex justify-center  text-[#969292]">
                {Number(item.price).toLocaleString("vi-VN")} VNĐ
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-[10%] py-[70px] my-[30px] bg-[#F8F9FA]">
        <div>
          <p className="font-medium text-[22px]">FREE SHIPPING</p>
          <p className="text-[#9c9998]">Free shipping worlwide</p>
        </div>
        <div>
          <p className="font-medium text-[22px]">24 X 7 SERVICE</p>
          <p className="text-[#9c9998]">Free shipping worlwide</p>
        </div>
        <div>
          <p className="font-medium text-[22px]">FESTIVAL OFFER</p>
          <p className="text-[#9c9998]">Free shipping worlwide</p>
        </div>
      </div>
      <div className="flex justify-between py-[30px]">
        <div>
          <p className="font-medium text-[20px]">LET'S BE FRIENDS!</p>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <form className="w-[45%]">
          <input
            className="border-2 border-[#9c9998] w-[70%] h-full px-3"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="text-center text-[#fff] bg-[#333] w-[30%] h-full">
            Subscribe
          </button>
        </form>
      </div>
      <Modal show={showModal} item={item} onClose={()=>setShowModal(false)}/>
    </div>
  );
};

export default Items;
