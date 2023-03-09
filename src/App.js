import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/style.css";
import MainLayout from "./components/layout/MainLayout";
import BlogCategoryList from "./pages/BlogCategoryList";
import BlogList from "./pages/BlogList";
import Dashboard from "./pages/Dashboard";
import Enquires from "./pages/Enquires";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
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

          {/* category routes */}
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog-category-list" element={<BlogCategoryList />} />

          {/* product routes */}
          <Route path="product-list" element={<ProductList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
