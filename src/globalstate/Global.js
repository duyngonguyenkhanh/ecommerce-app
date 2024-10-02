import React, { createContext, useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/thunk/getAllProduct";

// Tạo context
const DataContext = createContext();

// Context Provider
export const DataProvider = ({ children }) => {
  const dispatch = useDispatch();
  
  // Lấy dữ liệu sản phẩm từ Redux store
  const products = useSelector(state => state.product.res);

  const [items, setItems] = useState(null);

  // Dispatch action để lấy tất cả sản phẩm khi component mount
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  // Cập nhật state `items` mỗi khi `products` thay đổi
  useEffect(() => {
    if (products) {
      setItems(products);
    }
  }, [products]);

  // Truyền `items` qua context khi đã có dữ liệu
  const value = items ? { items } : { items: [] };

  

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useData = () => useContext(DataContext);
