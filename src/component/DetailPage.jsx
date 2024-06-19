import React from "react";
import { useData } from "../globalstate/Global";
import { useParams } from "react-router-dom";
import RelatedProduct from "../product/RelatedProduct";
import ProductDetails from "../product/ProductDetails";

// Component chi tiết sản phẩm
const DetailPage = () => {
  // Lấy dữ liệu từ hook useData
  const { value } = useData();

  // Lấy productId từ URL params
  const { productId } = useParams();
  
  // Tìm sản phẩm theo productIdu
  const product = value.items.find((item) => item._id.$oid === productId);

  // Lọc các sản phẩm liên quan theo category và id
  const relatedProducts = value.items.filter(
    (item) => item.category === product.category && item._id.$oid !== productId
  );

  // Hiển thị Loading nếu chưa có sản phẩm
  if (!product) return <div>Loading...</div>;

  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} className="ml-[10%]">
      <div className="flex italic h-[50%] py-[1%]">
        <ProductDetails product={product}  />
      </div>
      <div className="h-[50%]">
        <div className="w-[50%]">
          <button className="bg-[#333] p-4 text-[#fff] italic">DESCRIPTION</button>
          <p className="italic text-xl font-medium py-7">PRODUCT DESCRIPTION</p>
          <p className="text-[#969292] italic" style={{ whiteSpace: "pre-line" }}>{product.long_desc}</p>
          <p className="italic text-xl font-medium py-7">RELATED PRODUCTS</p>
          {/* Component hiển thị các sản phẩm liên quan */}
          <RelatedProduct items={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
