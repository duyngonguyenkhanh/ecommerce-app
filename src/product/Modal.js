import React from "react";
import { useNavigation } from "../layout/useNavigation";
import '../style/style.css'

const Modal = ({ item, onClose, show }) => {
  //Khởi tạo hàm chuyển hưởng
  const handleNavigate = useNavigation();
  if (!show) {
    return null;
  }

  const handlewiev = (id) => {
    handleNavigate(`detail/${id}`)
  };
  return (
    <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center chatWindow ">
      <div className=" w-auto m-[16%]">
        <div className="flex">
          <img className="w-[50%]" src={`${item.img1}`} alt="" />
          <div className=" bg-white ">
            <div className="flex justify-end pr-4">
              <button className="text-[20px] font-bold" onClick={() => onClose()}>x</button>
            </div>
            <div className="px-[20px]">
              <p className="text-[30px] font-medium w-[400px]">{item.name}</p>
              <p className="text-[25px] font-medium text-[#929090] mb-[3%]">
                {Number(item.price).toLocaleString("vi-VN")} VNĐ
              </p>
              <p className=" text-[#929090] w-[400px]  ">{item.short_desc}</p>
            </div>
            <div className="bg-[#333] w-[50%] text-white p-2  flex justify-center space-x-2 mt-[5%] mx-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fil="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mt-[5px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <button onClick={()=> handlewiev(item._id.$oid)} className="">Wiev Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
