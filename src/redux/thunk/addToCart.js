import { createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = process.env.REACT_APP_API_URL;

export const addToCart = createAsyncThunk(
  "auth/addtocart",
  async (payload, { rejectWithValue }) => {
   
    
    try {
      const response = await fetch(`${apiUrl}/product/add-to-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Đảm bảo cookie được gửi kèm yêu cầu
        body: JSON.stringify(payload),
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
