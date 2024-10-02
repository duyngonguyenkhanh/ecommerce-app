import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from "../redux/thunk/addToCart"
// Component hiển thị thông tin chi tiết sản phẩm
const ProductDetails = ({ product }) => {

  const {err } = useSelector(state => state.product)
 
  // State chứa hình ảnh đang hiển thị
  const [img, setImg] = useState(null);

  // Khởi tạo dispatch để gọi hành động Redux
  const dispatch = useDispatch();

  // State chứa giá trị quantity
  const [quantity, setQuantity] = useState(1);

  // Hàm tăng quantity
  const increase = () => {
    setQuantity(quantity + 1);
  };

  // Hàm giảm quantity
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Hàm xử lý thêm sản phẩm vào giỏ hàng
  const handleAddToCart = () => {
    const item = {
      productId: product._id,
      quantity: quantity
    };

    
    dispatch(addToCart(item)); // Gọi hành động thêm vào giỏ hàng
  };

  return (
    <div className="flex space-x-9 pt-[100px]">
      <div className="h-[400px] w-[492px]">
        <div className="flex justify-end">
          <div className="flex space-x-[2%]">
            <div className="h-[400px] flex flex-col justify-between space-y-[2%] ">
              {[product.img1, product.img2, product.img3, product.img4].map(
                (src, index) => (
                  <img
                    key={index} // Key cho mỗi hình ảnh
                    className="h-[23%] w-auto"
                    onClick={() => setImg(src)}
                    src={src}
                    alt=""
                  />
                )
              )}
            </div>
            <div>
              <img
                className="h-[400px] w-auto"
                src={img ? img : product.img1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[40%]">
        <h1 className=" text-[30px]">{product.name}</h1>
        <p className=" text-[20px] font-thin py-5 text-[#969292]">
          {Number(product.price).toLocaleString("vi-VN")} VNĐ
        </p>
        <p className=" text-[#969292]">{product.short_desc}</p>
        <div className="flex space-x-4 py-4">
          <p className="font-medium">CATEGORY: </p>
          <p className=" text-[#969292]">{product.category}</p>
        </div>
        <div className="flex">
          <div className="flex items-center justify-between w-[300px] border">
            <p className="text-[#969292] p-2">QUANTITY</p>
            <div className="flex space-x-2 items-center pr-2">
              <img
                onClick={decrease} // Truyền hàm giảm quantity vào component
                className="h-[10px]"
                src={require("../images/leftarrowicon.png")}
                alt=""
              />
              <p className="p-2">{quantity}</p>
              <img
                onClick={increase} // Truyền hàm tăng quantity vào component
                className="h-[10px]"
                src={require("../images/rightarrowicon.png")}
                alt=""
              />
            </div>
          </div>
          <button
            className="bg-[#333] italic text-[#fff] font-thin py-1 px-5"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
