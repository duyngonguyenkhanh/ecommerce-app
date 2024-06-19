import React from 'react';
import { useNavigate } from 'react-router-dom';//import hàm chuyển hướng 

const BannerCheckout = () => {

  const navigate = useNavigate(); // Khởi tạo navigate để chuyển hướng

  return (
    <div className='flex justify-between bg-gray-100 items-center italic p-32'>
      <h1 className='text-[40px] '>CHECKOUT</h1>
      <div className='flex space-x-4 text-[20px] font-medium'>
        <button className='hover:text-primary' onClick={() => navigate("/home")}>HOME</button> {/* Chuyển hướng đến Home */}
        <p>/</p>
        <button className='hover:text-primary' onClick={() => navigate("/cart")}>CART</button> {/* Chuyển hướng đến Cart */}
        <p>/</p>
        <p className='text-primary hover:text-black'>CHECKOUT</p>
      </div>
    </div>
  );
};

export default BannerCheckout;