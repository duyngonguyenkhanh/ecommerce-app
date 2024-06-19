import React, { createContext, useContext, useState, useEffect } from "react";

//Tạo context
const DataContext = createContext();
const urlItems =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

//Context Provider

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Sử dụng isLoading để theo dõi trạng thái tải dữ liệu

  async function fetchData(url) {
    setIsLoading(true)
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }finally{
      setIsLoading(false);//Dữ liệu đã tải xong hoặc có lỗi xảy ra
    }
  }

  useEffect(() => {
    fetchData(urlItems);
  }, []);

    // Chỉ truyền items khi dữ liệu đã tải xong
    const value = isLoading ? { items: [] } : { items };

  return (
    <DataContext.Provider value={{ value }}>{children}</DataContext.Provider>
  );
};

// Custom Hook để sử dụng Context
export const useData = () => useContext(DataContext);
