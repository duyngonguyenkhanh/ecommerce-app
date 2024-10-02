import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import các hook từ React-Redux
import Cart from "../product/Cart"; // Import component Cart
import TotalCart from "../product/TotalCart"; // Import component TotalCart
import SimpleBanner from "../layout/SimpleBanner"; // Import component SimpleBanner
import { getCartItems } from "../redux/thunk/getCart";

const CartPage = () => {
 // Sử dụng hook useSelector để lấy cart từ store và đảm bảo cartItems là mảng rỗng ban đầu
 const cart = useSelector((state) => state.cart.cart || { cartItems: [] });

  // Khởi tạo dispatch để gọi các hành động Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);



    
  
  return (
    <div className=" flex justify-center">
      <div className="w-[1300px] h-screen italic">
        {/* Hiển thị banner đơn giản */}
        <SimpleBanner text={"CART"} />
        <h1 className="text-2xl font-medium py-[40px]">SHOPPING CART</h1>
        <div className="flex space-x-[2%]">
          <div className="w-[80%]">
            {/* Hiển thị giỏ hàng với các items */}
            <Cart items={cart.cartItems} />
          </div>
          <div className="bg-gray-100 w-[28%] h-[350px] flex">
            {/* Hiển thị tổng giỏ hàng với các items */}
            <TotalCart items={cart.cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
