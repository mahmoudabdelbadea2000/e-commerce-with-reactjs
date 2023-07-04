import React from "react";
import CategoryHeader from "../../components/categories/CategoryHeader";
import ProductCard from "../../components/products/ProductCard";
import ProductSort from "../../components/products/ProductSort";
import SideFilter from "../../components/products/SideFilter";
import Pagination from "../../components/utility/Pagination";

const ShopProductPage = () => {
  return (
    <section className="bg-gray-100">
      <CategoryHeader />
      <div className="container flex justify-center flex-col px-4 relative">
        <ProductSort />
        <SideFilter />
        <div className="grid grid-cols-4 gap-2 p-4 bg-white rounded-sm">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center mt-5">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default ShopProductPage;
