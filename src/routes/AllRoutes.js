import { Route, Routes } from "react-router-dom";

import {
  Cartpage,
  Dashboardpage,
  Homepage,
  Login,
  Orderpage,
  Pagenotfound,
  ProductDetail,
  ProductList,
  Signup,
} from "../pages/index";
import { ProtectedRoute } from "./ProtectedRoute";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cartpage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order-summary"
        element={
          <ProtectedRoute>
            <Orderpage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboardpage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
};

export default AllRoutes;
