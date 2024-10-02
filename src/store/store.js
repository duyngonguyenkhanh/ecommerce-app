// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/cartSlice';
import authReducer from "../redux/authSlice";
import productReducer from '../redux/productSlice';
import shopReducer from '../redux/shopSlice';

// Cấu hình store với reducer từ cartSlice
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    product: productReducer,
    shop: shopReducer,
  },
});

export default store;