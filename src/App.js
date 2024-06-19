import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/HomePage";
import ShopPage from "./component/ShopPage";
import DetailPage from "./component/DetailPage";
import CartPage from "./component/CartPage";
import CheckoutPage from "./component/CheckoutPage";
import { DataProvider } from "./globalstate/Global";
import SigIn from "./component/SigIn";
import SignUp from "./component/SignUp";

function App() {
  return (
    <div className="App">
      <DataProvider>
        {/* BrowserRouter được sử dụng để kích hoạt tính năng định tuyến trong ứng dụng */}
        <HashRouter>
          {/* Routes được sử dụng để định nghĩa tất cả các tuyến đường trong ứng dụng */}
          <Routes>
            {/* Tuyến đường mặc định, khi người dùng truy cập vào root URL */}
            <Route path="/" element={<HomePage />} />
            
            {/* Tuyến đường cho trang chủ */}
            <Route path="/home" element={<HomePage />} />

            {/* Tuyến đường cho trang cửa hàng */}
            <Route path="/shop" element={<ShopPage />} />

            {/* Tuyến đường cho trang chi tiết sản phẩm, với tham số động productId */}
            <Route path="/detail/:productId" element={<DetailPage />} />

            {/* Tuyến đường cho trang giỏ hàng */}
            <Route path="/cart" element={<CartPage />} />

            {/* Tuyến đường cho trang đăng ký */}
            <Route path="/lognin" element={<SigIn />} />

            {/* Tuyến đường cho trang đăng nhập */}
            <Route path="/lognup" element={<SignUp />} />

            {/* Tuyến đường cho trang thanh toán */}
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </HashRouter>
      </DataProvider>
    </div>
  );
}

export default App;
