import { createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrders } from "./thunk/createOrder";

// Tạo một slice cho việc quản lý state auth
const productSlice = createSlice({
  name: "shop",
  initialState: {
    err: null,
    res: null,
    status: "idle",
    order: null,
  },
  reducers: {
    resetState: (state) => {
        state.err = null;
        state.status = 'idle'
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.status = "successful";
        state.res = action.payload;
        state.err = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "reject";
        state.err = action.payload;
      })
      .addCase(getOrders.pending, (state) => {
        state.status = "loading";
        state.err = null;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.status = "successful";
        state.order = action.payload;
        state.err = null;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.status = "reject";
        state.err = action.payload;
      });
  },
});

// Xuất các hành động để sử dụng trong các component
export const { resetState } = productSlice.actions;

// Xuất reducer để kết hợp vào store
export default productSlice.reducer;
