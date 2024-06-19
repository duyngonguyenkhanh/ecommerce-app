import React, { useEffect } from "react";
import BannerCheckout from "../layout/BannerCheckout";
import BillingDetails from "../product/BillingDetails";
import OrderSummary from "../product/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import { syncCart, setUser } from "../redux/cartSlice";

const CheckoutPage = () => {
  // Khởi tạo dispatch để gọi các hành động Redux
  const dispatch = useDispatch();
  // Sử dụng hook useSelector để lấy mảng items từ store
  const items = useSelector((state) => state.cart.items);
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
    <div className="flex justify-center mb-10">
      <div className="w-[1300px]">
        <div className="my-6">
          <BannerCheckout />
        </div>
        <h2 className="text-2xl font-medium my-7">BILLING DETAILS</h2>
        <div className="w-full flex">
          <div className="w-[70%]">
            <BillingDetails />
          </div>
          <div className="w-[30%]">
            <OrderSummary items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
