import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "./thunk/getAllProduct";
import { addToCart } from "./thunk/addToCart";


// Tạo một slice cho việc quản lý state auth
const productSlice = createSlice({
  name: "product",
  initialState: {
    err: null,
    res: null,
    status: "idle",
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status = "loading";
        state.err = null;
        state.res = null
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status = "successful";
        state.res = action.payload;
        state.err = null
        
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.payload;
        state.res = null;
      })
      .addCase(addToCart.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = "successful";
        state.err = null
        
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.payload;
      })
  },
});

// Xuất các hành động để sử dụng trong các component
export const { onLogin, onLogout, resetState } = productSlice.actions;

// Xuất reducer để kết hợp vào store
export default productSlice.reducer;
