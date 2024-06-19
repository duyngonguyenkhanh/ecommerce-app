import React, { useState, useEffect } from "react";
import banner from "../images/banner1.jpg";
import { useNavigation } from "../layout/useNavigation";
import Navbar from "../layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../redux/authSlice";

const SignIn = () => {
  const dispatch = useDispatch(); // Sử dụng dispatch để gửi hành động
  const currentUser = useSelector(state => state.auth.currentUser); // Lấy trạng thái người dùng hiện tại từ Redux store
  const [userArr, setUserArr] = useState([]); // State để lưu trữ mảng người dùng
  const [email, setEmail] = useState(""); // State để lưu trữ email
  const [password, setPassword] = useState(""); // State để lưu trữ mật khẩu
  const [error, setError] = useState(""); // State để lưu trữ thông báo lỗi

  // Lấy mảng userArr từ LocalStorage khi component được tải lên
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("userArr")) || [];
    setUserArr(storedUsers);

    // Kiểm tra xem có người dùng nào đã đăng nhập trước đó không
    const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedCurrentUser) {
      dispatch(onLogin(storedCurrentUser)); // Cập nhật state Redux với người dùng hiện tại
    }
  }, [dispatch]);

  // Khởi tạo Navigate để chuyển hướng
  const handleNavigate = useNavigation();

  // Xử lý khi người dùng nhấn nút đăng nhập
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Kiểm tra xem người dùng đã nhập đủ thông tin chưa
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Tìm người dùng trong mảng userArr
    const user = userArr.find(user => user.email === email && user.password === password);

    if (user) {
      setError(""); // Xóa thông báo lỗi nếu có
      dispatch(onLogin(user)); // Cập nhật trạng thái người dùng hiện tại
      localStorage.setItem("currentUser", JSON.stringify(user)); // Lưu người dùng hiện tại vào LocalStorage
      handleNavigate("home"); // Chuyển hướng đến trang chủ
    } else {
      setError("Invalid email or password"); // Thông báo lỗi nếu thông tin không chính xác
      setPassword(""); // Xóa trường mật khẩu
    }
  };

  // Nếu người dùng đã đăng nhập, chuyển hướng đến trang chủ
  if (currentUser) {
    handleNavigate("home");
    return null;
  }

  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Navbar />
      <div className="flex items-center justify-center h-screen px-[20%]">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-[5%] pt-6 pb-8 mb-4 w-[50%] mr-[5%] "
        >
          <h1 className="text-center text-[25px] text-primary italic my-[70px]">
            Sign In
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="">
            <input
              className="appearance-none border rounded h-full  w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="appearance-none border rounded h-full w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#333335] hover:bg-gray-900 text-[#e4e2e2] flex justify-center w-full px-8 py-6 my-5"
            >
              SIGN IN
            </button>
          </div>
          <div className="flex justify-center space-x-3 py-[50px]">
            <button
              className="text-xl focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => handleNavigate("lognup")}
            >
              Create an account?
            </button>
            <button
              className="text-xl text-blue-500 hover:text-blue-800"
              onClick={() => handleNavigate("lognup")}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
