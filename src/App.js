import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  AllBrandsPage,
  AllCategoriesPage,
  CartPage,
  Home,
  LoginPage,
  PaymentMethodPage,
  ProductsDetailesPage,
  RegisterPage,
  ShopProductPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/all-categories" element={<AllCategoriesPage />} />
        <Route path="/all-brands" element={<AllBrandsPage />} />
        <Route path="/products" element={<ShopProductPage />} />
        <Route path="/products/:id" element={<ProductsDetailesPage />} />
        <Route path="/order/payment-method" element={<PaymentMethodPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
