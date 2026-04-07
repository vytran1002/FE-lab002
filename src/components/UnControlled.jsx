import { useRef } from "react";

export default function Uncontrolled() {
  const inputRef = useRef();
  const handleClick = () => {
    alert("Tên sản phẩm: " + inputRef.current.value);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Lấy dữ liệu</button>
    </div>
  );
}