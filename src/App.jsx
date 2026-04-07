import products from "./components/Products";
import Profile from "./components/Users/Profile";
import Header from "./components/Header";
import SPKhuyenMai, { SPBanChay, SPHot } from "./components/Main";
import Footer from "./components/Footer";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/UnControlled";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile />
      <hr />
      <Header />
      <SPKhuyenMai />
      <SPBanChay />
      <SPHot />
      <Footer />
      <hr />
      <h1>Quản lý Sản phẩm</h1>

      <Controlled />
      <Uncontrolled />
      <hr />

      <div className="product-grid">
        {products.map((item) => (
          <div className="card tour-card shadow-sm" key={item.id}>
            <img alt={item.ten} className="card-img-top" src={item.hinh} />
            <div className="card-body">
              <h5 className="card-title">{item.ten}</h5>
              <p className="card-text">{item.mota}</p>
              <h5 className="card-title text-danger">
                {item.gia.toLocaleString()} VND
              </h5>
              <a className="btn btn-primary" href="#">
                Chi tiết
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
