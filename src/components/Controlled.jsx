import { useState } from "react";

export default function Controlled() {
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tên sản phẩm: {name}</p>
    </>
  );
}

