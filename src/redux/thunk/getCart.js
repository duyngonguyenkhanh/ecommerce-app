import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_URL;

export const getCartItems  = createAsyncThunk(
  "auth/getcart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${apiUrl}/product/getcart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Đảm bảo cookie được gửi kèm yêu cầu
        body: JSON.stringify(_),
      });

      // Kiểm tra nếu response không thành công
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      // Bắt lỗi bất ngờ (network errors, etc.)
      return rejectWithValue(error.message);
    }
  }
);
