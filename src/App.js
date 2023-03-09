import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/style.css";
import MainLayout from "./components/layout/MainLayout";
import BlogCategoryList from "./pages/BlogCategoryList";
import BlogList from "./pages/BlogList";
import BrandList from "./pages/Brands";
import ColorList from "./pages/Colors";
import CouponList from "./pages/Coupons";
import CustomersList from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Enquires from "./pages/Enquires";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import ProductList from "./pages/ProductList";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquires />} />
          <Route path="customers" element={<CustomersList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="brands" element={<BrandList />} />
          <Route path="coupons" element={<CouponList />} />
          <Route path="colors" element={<ColorList />} />

          {/* category routes */}
          <Route path="blogs" element={<BlogList />} />
          <Route path="categories" element={<BlogCategoryList />} />

          {/* product routes */}
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
