// export default function Main() {
//   return (
//     <p>Đây là phần main của web</p>
//   );
// }
export default function SPKhuyenMai() {                                  
  return (
    <h2>Sản phẩm khuyến mãi</h2>
  );
}

//Đây là named export, có thể có nhiều named export trong 1 file
//Khi import phải dùng dấu ngoặc nhọn {}
export function SPBanChay() {
    return(
        <h2>Sản phẩm bán chạy</h2>
    )
}
//Đây là named export    
export function SPHot() {
    return(
        <h2>Sản phẩm Hot</h2>
    )
}
