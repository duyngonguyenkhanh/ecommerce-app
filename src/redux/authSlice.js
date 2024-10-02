// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { SignupUser } from "./thunk/signup";
import { LoginUser } from "./thunk/login";
import { decodeToken } from "../utils/decodeToken";
import { logOutUser } from "./thunk/logOutUser";


// Tạo một slice cho việc quản lý state auth
const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null, // Trạng thái ban đầu là chưa có người dùng nào đăng nhập
    err: null,
    res: null,
    status: "idle",
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    // Hàm xử lý hành động đăng nhập
    onLogin: (state, action) => {
      state.currentUser = action.payload; // Cập nhật trạng thái người dùng hiện tại
    },
    // Hàm xử lý hành động đăng xuất
    onLogout: (state) => {
      state.token = null;
      state.currentUser = null;
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
    },
    
    resetState: (state) => {
      state.err = null;
      state.status = 'idle'
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignupUser.pending, (state) => {
        state.status = "loading";
        state.err = null;
        state.res = null
      })
      .addCase(SignupUser.fulfilled, (state, action) => {
        state.status = "successful";
        state.res = action.payload;
        state.err = null
        
      })
      .addCase(SignupUser.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.payload;
        state.res = null;
      })
      .addCase(LoginUser.pending, (state) => {
        state.status = "loading";
        state.err = null;
        state.res = null
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.status = "successful";
        state.res = action.payload;
        state.err = null
        // Lưu token vào localStorage
        const token = action.payload.token;
        localStorage.setItem("token", token);
        state.currentUser = decodeToken(token); 
        
        localStorage.setItem('currentUser', JSON.stringify(decodeToken(token))); // Lưu thông tin người dùng vào localStorage
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.payload;
        state.res = null;
      })
      .addCase(logOutUser.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(logOutUser.fulfilled, (state, action) => {
        state.status = "successful";
        state.err = null
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.payload;
      })
  },
});

// Xuất các hành động để sử dụng trong các component
export const { onLogin, onLogout, resetState } = authSlice.actions;

// Xuất reducer để kết hợp vào store
export default authSlice.reducer;
