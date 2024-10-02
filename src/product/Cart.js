import React from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/cartSlice";
import { deleteCart } from "../redux/cartSlice";
import { useNavigation } from "../layout/useNavigation";
import { decrementProduct, incrementProduct } from "../redux/thunk/changeQuantity";
import { getCartItems } from "../redux/thunk/getCart";


const Cart = ({ items }) => {
  // Khởi tạo dispatch để gọi hành động Redux
  const dispatch = useDispatch();
  const handleNavigate = useNavigation();

  
  // Hàm tăng quantity
  const increase = (id, quantity) => {
    dispatch(incrementProduct({ productId: id }));
    dispatch(getCartItems());
  };
  // Hàm giảm quantity
  const decrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrementProduct({ productId: id  }));
      dispatch(getCartItems());
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-gray-100 h-[50px] text-[18px] font-medium">
        <h1 className="text-center w-[10%]">IMAGE</h1>
        <h1 className="text-center w-[30%]">PRODUCT</h1>
        <h1 className="text-center w-[15%]">PRICE</h1>
        <h1 className="text-center w-[20%]">QUANTITY</h1>
        <h1 className="text-center w-[15%]">TOTAL</h1>
        <h1 className="text-center w-[10%]">REMOVE</h1>
      </div>
      <div className="">
        {items.map((item, index) => (
          <div key={index} className="flex items-center text-[20px] py-3">
            <div className="w-[10%] flex justify-center">
              <img className="w-[100px]" src={`${item.image}`} alt="" />
            </div>
            <p className="w-[30%] text-center">{`${item.name}`}</p>
            <p className="w-[15%] text-center text-[18px] text-primary">
              {`${Number(item.price).toLocaleString("vi-VN")}`} VNĐ
            </p>
            <div className="w-[20%] flex justify-center">
              <div className="flex items-center">
                <img
                  onClick={() => decrease(item.id, item.quantity)} // Truyền hàm giảm quantity vào component
                  className="h-[12px]"
                  src={require("../images/leftarrowicon.png")}
                  alt=""
                />
                <p className="text-[18px] px-5">{item.quantity}</p>
                <img
                  onClick={() => increase(item.id, item.quantity)} // Truyền hàm tăng quantity vào component
                  className="h-[12px]"
                  src={require("../images/rightarrowicon.png")}
                  alt=""
                />
              </div>
            </div>
            <p className="w-[15%] text-[18px] text-center text-primary">
              {`${Number(item.price * item.quantity).toLocaleString("vi-VN")}`}
              VNĐ
            </p>
            <div className="w-[10%] flex justify-center">
              <svg
                onClick={() => dispatch(deleteCart(item.id)) }
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-100 px-7 h-[70px] ">
        <div className="flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M14 8a.75.75 0 0 1-.75.75H4.56l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
              clipRule="evenodd"
            />
          </svg>

          <h1 onClick={() => handleNavigate('shop')}>Continue shopping</h1>
        </div>
        <div className="flex space-x-2 items-center border border-black p-3" onClick={() => handleNavigate('checkout')}>
          <h1>Proceed to checkout</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cart;
