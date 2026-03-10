import React from 'react';
import Product from "./components/Products";
import ControlledInput from "./components/ControlledInput";

function App() {

  const handleChildAction = (productName) => {
    alert("Bạn đang xem sản phẩm: " + productName);
  };

  const productData = [{
    name: "Laptop Dell Precision",
    price: 25000000,
    inStock: true,
    categories: ["Laptop", "Đồ họa"],
    info: { origin: "USA" }
  },
  {
    name: "Điện thoại Samsung Galaxy S21",
    price: 15000000,
    inStock: false,
    categories: ["Điện thoại", "Android"],
    info: { origin: "Hàn Quốc" }
  },
  {
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    inStock: true,
    categories: ["Âm thanh", "Tai nghe"],
    info: { origin: "Nhật Bản" }
  }
];

  return (
    <div className="App">
      <h1>Quản lý Sản phẩm</h1>
      
      <ControlledInput />
      <hr />
      {productData.map((product, index) => (
        <Product 
          key={index}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
          categories={product.categories}
          info={product.info}
          onCheck={handleChildAction} 
        />
      ))}
    </div>
  );
}

export default App;