import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedProduct = ({ items }) => {
  // Khởi tạo navigate để chuyển hướng
  const navigate = useNavigate();
  return (
    <div>
      <div className="container ">
        <div className="flex space-x-8">
          {items.map((item) => (
            <div onClick={() => navigate(`/detail/${item._id}`)} className="w-[300px]" key={item._id}>
              <img
                className="w-full h-auto flex justify-center items-center"
                src={`${item.img1}`}
                alt=""
              />
              <div>
                <p className="flex font-semibold justify-center  text-center italic">
                  {item.name}
                </p>
                <p className="flex justify-center text-[#969292]">
                  {Number(item.price).toLocaleString("vi-VN")} VNĐ
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProduct;
