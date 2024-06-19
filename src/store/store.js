// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import authReducer from "../redux/authSlice";

// Cấu hình store với reducer từ cartSlice
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;