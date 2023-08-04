import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";
import {
  AdminAddBrandPage,
  AdminAddCategoryPage,
  AdminAddProductPage,
  AdminAddSubCatPage,
  AdminManageProductsPage,
  AdminOrderPage,
  AdminUpdateProductPage,
  AllBrandsPage,
  AllCategoriesPage,
  CartPage,
  Home,
  LoginPage,
  PaymentMethodPage,
  ProductsDetailesPage,
  RegisterPage,
  ShopProductPage,
  UserAddAddressPage,
  UserAddressesPage,
  UserAllOrdersPage,
  UserEditAddressPage,
  UserFavProductsPage,
  UserProfilePage,
} from "./pages";
import AdminAllOrdersPage from "./pages/admin/AdminAllOrdersPage";

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
        <Route path="/user/allorders" element={<UserAllOrdersPage />} />
        <Route path="/user/fav-products" element={<UserFavProductsPage />} />
        <Route path="/user/addresses" element={<UserAddressesPage />} />
        <Route path="/user/edit-address" element={<UserEditAddressPage />} />
        <Route path="/user/add-address" element={<UserAddAddressPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/admin/all-orders" element={<AdminAllOrdersPage />} />
        <Route path="/admin/orders/:id" element={<AdminOrderPage />} />
        <Route
          path="/admin/all-products"
          element={<AdminManageProductsPage />}
        />
        <Route path="/admin/add-brand" element={<AdminAddBrandPage />} />
        <Route path="/admin/add-category" element={<AdminAddCategoryPage />} />
        <Route path="/admin/add-subcategory" element={<AdminAddSubCatPage />} />
        <Route path="/admin/add-product" element={<AdminAddProductPage />} />
        <Route
          path="/admin/update-product/:id"
          element={<AdminUpdateProductPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
