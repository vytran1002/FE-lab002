import { useState } from "react";

export default function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h3>Vd Controlled Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Nhập tên sản phẩm..."
      />
      <p>Dữ liệu đang nhập: {inputValue}</p>
    </div>
  );
}