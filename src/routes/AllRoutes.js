import { Routes, Route } from "react-router-dom";

import {
  Homepage,
  ProductList,
  ProductDetail,
  Signup,
  Login,
} from "../pages/index";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/register" element={<Signup />} />
      <Route pth="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
