import React, { useEffect, useState } from "react";
import banner from "../images/banner1.jpg";
import { useNavigation } from "../layout/useNavigation";
import { useSelector, useDispatch } from "react-redux";
import "../style/style.css";
import { SignupUser } from "../redux/thunk/signup";
import { resetState } from "../redux/authSlice";

const SignUp = () => {
  // Khởi tạo Navigate để chuyển hướng
  const navigate = useNavigation();
  //Khởi tạo dispatch
  const dispatch = useDispatch();
  //state từ redux
  const { err, status } = useSelector((state) => state.auth);

  
  // Khởi tạo state cho các trường nhập liệu và thông báo lỗi
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // Regular định dạng email và sđt
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Hàm xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra các trường nhập liệu có hợp lệ không
    if (!fullName || !email || !password || !phone) {
      setError("Bạn cần nhập tất cả các trường");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Định dạng email không hợp lệ");
      return;
    }
    if (!phoneRegex.test(phone)) {
      setError("Số điện thoại phải đủ 10 số");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    // Thêm người dùng mới vào mảng userArr , Thêm 1 trạng thái ON OFF để biết user này đang được đăng nhập hay chưa??
    const newUser = {
      fullname: fullName,
      email: email,
      password: password,
      phone: phone,
    };
 

    dispatch(SignupUser(newUser));

    // Điều hướng đến trang đăng nhập
    // navigate("lognin");
  };

  useEffect(() => {
    if (status === "successful") {
      dispatch(resetState());
      // Điều hướng đến trang đăng nhập
       navigate("lognin");
    }
  }, [status, dispatch, navigate]);

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-[4%] pt-6 pb-8 mb-4 w-[35%] mr-[5%] mt-[4%]"
        >
          <h1 className="text-center  text-[30px] italic my-[60px] text-primary">
            Sign Up
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="">
            <input
              className="appearance-none border h-full w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
              id="full-name"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="appearance-none border h-full w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="appearance-none border h-full w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="appearance-none border h-full w-full p-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input"
              id="phone"
              type="number"
              placeholder="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {err && (<p className="text-red-500">{err.message}</p>)}
          <div>
            <button
              type="submit"
              className="bg-[#333335]  hover:bg-gray-900 text-[#e4e2e2] flex items-center justify-center h-[20px] w-full p-8 my-6 button"
            >
              SIGN UP
            </button>

            <div className="flex justify-center text-xl space-x-3">
              <button
                className=" focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In?
              </button>
              <button
                className=" text-blue-500 hover:text-blue-800"
                onClick={() => navigate("lognin")}
              >
                Click
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
