import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/style.css";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
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
        </Route>
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
