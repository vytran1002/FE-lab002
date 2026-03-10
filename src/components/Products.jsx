import React from "react";

export default function Product({ name, price, inStock, categories, info, onCheck }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <p>Giá: {price} VNĐ</p>
      <p>Còn hàng: {inStock ? "Có" : "Hết"}</p>
      <p>Danh mục: {categories.join(", ")}</p>
      <p>Xuất xứ: {info.origin}</p>
    
      <button onClick={() => onCheck(name)}>Kiểm tra sản phẩm</button>
    </div>
  );
}