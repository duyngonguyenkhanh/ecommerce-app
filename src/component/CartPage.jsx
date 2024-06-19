import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import các hook từ React-Redux
import Cart from "../product/Cart"; // Import component Cart
import TotalCart from "../product/TotalCart"; // Import component TotalCart
import SimpleBanner from "../layout/SimpleBanner"; // Import component SimpleBanner
import { syncCart, setUser } from "../redux/cartSlice"; // Import các hành động từ cartSlice

const CartPage = () => {
  // Sử dụng hook useSelector để lấy mảng items từ store
  const items = useSelector((state) => state.cart.items);

  // Khởi tạo dispatch để gọi các hành động Redux
  const dispatch = useDispatch();

  // useEffect để đồng bộ hóa giỏ hàng giữa các tab và thiết lập người dùng hiện tại
  useEffect(() => {
    // Kiểm tra xem có người dùng nào đã đăng nhập trước đó không
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Nếu có người dùng đăng nhập, cập nhật state Redux với người dùng hiện tại và đồng bộ hóa giỏ hàng
    if (currentUser) {
      dispatch(setUser(currentUser.email)); // Cập nhật state Redux với người dùng hiện tại
      dispatch(syncCart()); // Đồng bộ giỏ hàng với localStorage
    } else {
      // Nếu không có người dùng hiện tại, đặt giỏ hàng thành rỗng
      dispatch(setUser(null));
      //localStorage.removeItem('cartItems'); // Xóa giỏ hàng khỏi localStorage
      dispatch(syncCart()); // Đồng bộ lại giỏ hàng rỗng
    }

    // Hàm xử lý sự kiện thay đổi storage
    const handleStorageChange = () => {
      dispatch(syncCart()); // Đồng bộ giỏ hàng khi localStorage thay đổi
    };

    // Lắng nghe sự kiện storage để đồng bộ hóa giỏ hàng giữa các tab
    window.addEventListener("storage", handleStorageChange);

    // Cleanup: Hủy lắng nghe sự kiện storage khi component bị hủy
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]); // Chỉ chạy useEffect khi dispatch thay đổi

  return (
    <div className=" flex justify-center">
      <div className="w-[1300px] h-screen italic">
        {/* Hiển thị banner đơn giản */}
        <SimpleBanner text={"CART"} />
        <h1 className="text-2xl font-medium py-[40px]">SHOPPING CART</h1>
        <div className="flex space-x-[2%]">
          <div className="w-[80%]">
            {/* Hiển thị giỏ hàng với các items */}
            <Cart items={items} />
          </div>
          <div className="bg-gray-100 w-[28%] h-[350px] flex">
            {/* Hiển thị tổng giỏ hàng với các items */}
            <TotalCart items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
