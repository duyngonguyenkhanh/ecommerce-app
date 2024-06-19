import React from "react";

const OrderSummary = ({ items }) => {
  //Tạo ra mảng mới chứa tổng all items
  const TotalItems = items.map((item) => item.price * item.quantity);

  // Sử dụng reduce để tính tổng của tất cả các giá trị trong mảng itemTotals
  const totalCartPrice = TotalItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <div className="bg-gray-100 p-4 shadow-md italic">
      <h2 className="text-2xl font-medium">YOUR ORDER</h2>
      <div className="mt-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <span className="w-[50%] font-medium">{item.name}</span>
            <span className="w-[50%] text-center text-primary">{Number(item.price).toLocaleString("vi-VN")} VND x {item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4  font-medium">
        <span className="w-[50%] ">TOTAL</span>
        <span className="w-[50%] text-center text-xl">{Number(totalCartPrice).toLocaleString("vi-VN")} VND</span>
      </div>
    </div>
  );
};

export default OrderSummary;
