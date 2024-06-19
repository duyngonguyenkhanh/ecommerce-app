import { createSlice } from '@reduxjs/toolkit';

// Khởi tạo state ban đầu
const initialState = {
  items: [],
  email: null,
};

// Tạo slice cho giỏ hàng với các hành động và reducer tương ứng
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thiết lập email và đồng bộ hóa giỏ hàng từ localStorage
    setUser: (state, action) => {
      state.email = action.payload;
      const storedCart = JSON.parse(localStorage.getItem(`cartItems_${state.email}`));
      if (storedCart) {
        state.items = storedCart;
      } else {
        state.items = [];
      }
    },
    // Thêm sản phẩm vào giỏ hàng
    addCart: (state, action) => {
      if (!state.email) return; // Nếu chưa có email, không làm gì cả

      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity });
      }
      // Lưu lại state giỏ hàng mới vào localStorage với key là email
      localStorage.setItem(`cartItems_${state.email}`, JSON.stringify(state.items));
    },
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateCart: (state, action) => {
      if (!state.email) return; // Nếu chưa có email, không làm gì cả

      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
        // Lưu lại state giỏ hàng mới vào localStorage với key là email
        localStorage.setItem(`cartItems_${state.email}`, JSON.stringify(state.items));
      }
    },
    // Xóa sản phẩm khỏi giỏ hàng
    deleteCart: (state, action) => {
      if (!state.email) return; // Nếu chưa có email, không làm gì cả

      state.items = state.items.filter(item => item.id !== action.payload);
      // Lưu lại state giỏ hàng mới vào localStorage với key là email
      localStorage.setItem(`cartItems_${state.email}`, JSON.stringify(state.items));
    },
    // Đồng bộ hóa giỏ hàng từ localStorage
    syncCart: (state) => {
      if (state.email) {
        state.items = JSON.parse(localStorage.getItem(`cartItems_${state.email}`)) || [];
      }
    },
  },
});

// Xuất các hành động để sử dụng trong component
export const { setUser, addCart, updateCart, deleteCart, syncCart } = cartSlice.actions;

// Xuất reducer để cấu hình store
export default cartSlice.reducer;
