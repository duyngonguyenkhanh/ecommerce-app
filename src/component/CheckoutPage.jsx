import React, { useEffect, useRef, useState } from "react";
import BannerCheckout from "../layout/BannerCheckout";
import OrderSummary from "../product/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { getCartItems } from "../redux/thunk/getCart";
import { createOrder } from "../redux/thunk/createOrder";
import { resetState } from "../redux/shopSlice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  // Khởi tạo dispatch để gọi các hành động Redux
  const dispatch = useDispatch();
  //hàm chuyển hướng
  const navigate = useNavigate();
  // Sử dụng hook useSelector để lấy cart từ store và đảm bảo cartItems là mảng rỗng ban đầu
  const cart = useSelector((state) => state.cart.cart || { cartItems: [] });
  // Sử dụng hook useSelector để lấy cart từ store và đảm bảo cartItems là mảng rỗng ban đầu
  const status = useSelector((state) => state.shop.status);

  const prevStatus = useRef(status);

  useEffect(() => {
    if (prevStatus.current !== "successful" && status === "successful") {
      // Chỉ chuyển hướng khi trạng thái thay đổi từ "loading" sang "successful"
      navigate("/history");
      dispatch(resetState()); // Reset state sau khi chuyển hướng
    }
    prevStatus.current = status; // Cập nhật trạng thái trước đó
  }, [dispatch, status, navigate]);

  // Khởi tạo state để lưu trữ dữ liệu nhập vào từ form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
     dispatch(getCartItems());
  }, [dispatch]); // Chỉ chạy useEffect khi dispatch thay đổi

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    //Chuẩn bị dũ liệu để gửi
    const payload = {
      products: cart.cartItems,
      fullname: formData.fullName,
      email: formData.email,
      phone: formData.phoneNumber,
      address: formData.address,
    };

    dispatch(createOrder(payload));
  };

  return (
    <div className="flex justify-center mb-10">
      <div className="w-[1300px]">
        <div className="my-6">
          <BannerCheckout />
        </div>
        <h2 className="text-2xl font-medium my-7">BILLING DETAILS</h2>
        <div className="w-full flex">
          <div className="w-[68%] mr-[2%]">
            <div className="container mx-auto ">
              <form className="bg-white pr-7 italic" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-500 mb-2"
                  >
                    FULL NAME:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter Your Full Name Here!"
                    className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-500 mb-2">
                    EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email Here!"
                    className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-500 mb-2"
                  >
                    PHONE NUMBER:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number Here!"
                    className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="address" className="block text-gray-500 mb-2">
                    ADDRESS:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Your Address Here!"
                    className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-[20%] bg-[#333335] text-white py-2 hover:bg-primary"
                >
                  Place order
                </button>
              </form>
            </div>
          </div>
          <div className="w-[30%]">
            <OrderSummary items={cart.cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
