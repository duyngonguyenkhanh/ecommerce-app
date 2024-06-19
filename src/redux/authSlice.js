// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Tạo một slice cho việc quản lý state auth
const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null, // Trạng thái ban đầu là chưa có người dùng nào đăng nhập
  },
  reducers: {
    // Hàm xử lý hành động đăng nhập
    onLogin: (state, action) => {
      state.currentUser = action.payload; // Cập nhật trạng thái người dùng hiện tại
    },
    // Hàm xử lý hành động đăng xuất
    onLogout: (state) => {
      state.currentUser = null; // Đặt lại trạng thái người dùng hiện tại về null
    },
  },
});

// Xuất các hành động để sử dụng trong các component
export const { onLogin, onLogout } = authSlice.actions;

// Xuất reducer để kết hợp vào store
export default authSlice.reducer;
