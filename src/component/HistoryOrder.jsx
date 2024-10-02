import { useDispatch, useSelector } from "react-redux";
import SimpleBanner from "../layout/SimpleBanner";
import { useEffect, useState } from "react";
import { getOrders } from "../redux/thunk/createOrder";
import OrderDetailModal from "./OrderDetailModal "; // Component Modal

const HistoryOrder = () => {
  const orders = useSelector((state) => state.shop.order || { orders: [] });
  const dispatch = useDispatch();

  // State để điều khiển modal và lưu id của đơn hàng được chọn
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  const handleViewOrder = (order) => {
    setSelectedOrder(order); // Lưu chi tiết order
    setIsModalOpen(true); // Mở modal
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1400px]">
        <SimpleBanner text={"HISTORY"} />
        <div className="mt-[50px]">
          <div className="flex italic bg-gray-100 font-bold text-center">
            <p className="w-[20%]">ID ORDER</p>
            <p className="w-[20%]">ID USER</p>
            <p className="w-[10%]">NAME</p>
            <p className="w-[10%]">PHONE</p>
            <p className="w-[10%]">ADDRESS</p>
            <p className="w-[10%]">TOTAL</p>
            <p className="w-[10%]">DELIVERY</p>
            <p className="w-[10%]">STATUS</p>
            <p className="w-[10%]">DETAIL</p>
          </div>
          {orders.orders.map((order) => (
            <div
              key={order._id}
              className="flex text-center items-center text-gray-500"
            >
              <p className="w-[20%]">{order._id}</p>
              <p className="w-[20%]">{order.user.userId}</p>
              <p className="w-[10%]">{order.user.fullname}</p>
              <p className="w-[10%]">{order.user.phone}</p>
              <p className="w-[10%]">{order.user.address}</p>
              <p className="w-[10%]">
                {order.products
                  .reduce((total, item) => total + item.product.price, 0)
                  .toLocaleString("vi-VN")}{" "}
                VND
              </p>
              <p className="w-[10%]">Waiting for delivery</p>
              <p className="w-[10%]">Waiting for pay</p>
              <button
                className="border px-2 w-[10%] flex justify-center items-center"
                onClick={() => handleViewOrder(order)} // Gọi hàm mở modal
              >
                View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        {/* Hiển thị Modal khi isModalOpen === true */}
        {isModalOpen && (
          <OrderDetailModal
            order={selectedOrder} // Truyền đơn hàng được chọn vào modal
            onClose={() => setIsModalOpen(false)} // Đóng modal
          />
        )}
      </div>
    </div>
  );
};

export default HistoryOrder;
