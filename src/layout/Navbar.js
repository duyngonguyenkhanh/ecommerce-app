import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate từ react-router-dom
import { onLogin, onLogout } from "../redux/authSlice"; // Import hành động onLogout từ authSlice
import { logOutUser } from "../redux/thunk/logOutUser";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser); // Lấy trạng thái người dùng hiện tại từ Redux store

  // Lấy mảng userArr từ LocalStorage khi component được tải lên
  useEffect(() => {
    // Kiểm tra xem có người dùng nào đã đăng nhập trước đó không
    const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedCurrentUser) {
      dispatch(onLogin(storedCurrentUser)); // Cập nhật state Redux với người dùng hiện tại
    }
  }, [dispatch]);

  const navigate = useNavigate(); // Khởi tạo navigate để chuyển hướng

  // Hàm xử lý logout
  const handleLogout = () => {
    dispatch(onLogout()); // Dispatch hành động logout
    dispatch(logOutUser())
    navigate("/home"); // Chuyển hướng về trang chủ
  };

  return (
    <div className="flex justify-between py-5 ">
      <div className="inline-flex space-x-3 text-[20px] italic font-thin">
        <button
          className={
            currentUser
              ? "text-black hover:text-[#f3d8ac]"
              : "text-[#f3d8ac] hover:text-black"
          }
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </button>
        <button
          className={
            currentUser
              ? "text-[#f3d8ac] hover:text-black"
              : "text-black hover:text-[#f3d8ac]"
          }
          onClick={() => {
            navigate("/shop");
          }}
        >
          Shop
        </button>
      </div>

      <button className="font-medium text-[20px] hover:text-[#f3d8ac] italic">
        BOUTIQUE
      </button>

      <div className="inline-flex space-x-3 text-[20px] italic font-thin">
        <div className="flex hover:text-[#f3d8ac] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 text-[#6b6a6a]"
          >
            <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>

          <button
            onClick={() => {
              navigate("/cart");
            }}
            className="italic pl-1"
          >
            Cart
          </button>
        </div>
        {currentUser ? (
          <>
            <div className="flex hover:text-[#f3d8ac] items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-5 text-[#6b6a6a]"
              >
                <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
              </svg>
              <button onClick={() => {navigate('/history')}} className="italic pl-1">{currentUser.fullname}</button>
            </div>
            <button
              className="flex hover:text-[#f3d8ac] italic"
              onClick={handleLogout}
            >
              (Logout)
            </button>
          </>
        ) : (
          <div
            className="flex hover:text-[#f3d8ac] items-center"
            onClick={() => {
              navigate("/lognin");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-[#6b6a6a]"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>

            <button className="italic pl-1">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
