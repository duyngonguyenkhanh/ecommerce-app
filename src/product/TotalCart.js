import React from "react";

const TotalCart = ({ items }) => {
  //Tạo ra mảng mới chứa tổng all items
  const TotalItems = items.map((item) => item.price * item.quantity);

  // Sử dụng reduce để tính tổng của tất cả các giá trị trong mảng itemTotals
  const totalCartPrice = TotalItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="bg-gray-100 w-full px-[10%]">
      <h1 className="text-2xl font-medium py-9">CART TOTAL</h1>
      <div className="flex justify-between item-center border-b pb-2 mb-2">
        <p className="text-[18px] font-semibold">SUBTOTAL</p>
        <p className="text-primary">
          {Number(totalCartPrice).toLocaleString("vi-VN")} VND
        </p>
      </div>
      <div className="flex justify-between item-center mb-4">
        <p className="text-[18px] font-semibold">TOTAL</p>
        <p className="text-[18px]">
          {Number(totalCartPrice).toLocaleString("vi-VN")} VND
        </p>
      </div>
      <div>
        <input
          className="w-full border p-3"
          type="text"
          placeholder="Enter your coupon"
        />
      </div>
      <div className="">
        <button className="w-full inline-flex justify-center items-center bg-[#333] text-white text-center p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M3.75 3.5c0 .563.186 1.082.5 1.5H2a1 1 0 0 0 0 2h5.25V5h1.5v2H14a1 1 0 1 0 0-2h-2.25A2.5 2.5 0 0 0 8 1.714 2.5 2.5 0 0 0 3.75 3.5Zm3.499 0v-.038A1 1 0 1 0 6.25 4.5h1l-.001-1Zm2.5-1a1 1 0 0 0-1 .962l.001.038v1h.999a1 1 0 0 0 0-2Z"
              clipRule="evenodd"
            />
            <path d="M7.25 8.5H2V12a2 2 0 0 0 2 2h3.25V8.5ZM8.75 14V8.5H14V12a2 2 0 0 1-2 2H8.75Z" />
          </svg>
          Apply coupon
        </button>
      </div>
    </div>
  );
};

export default TotalCart;
