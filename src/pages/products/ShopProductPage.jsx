import React from "react";
import {
  Pagination,
  ProductCard,
  ProductSort,
  SideFilter,
} from "../../components";

const ShopProductPage = () => {
  return (
    <section className="bg-gray-100">
      <div className="container flex justify-center flex-col px-4 relative">
        <ProductSort />
        <SideFilter />
        <div className="bg-white p-4 rounded-sm">
          <div className="grid grid-cols-4 gap-2">
            <ProductCard colsapn="" />
          </div>
          <div className="flex justify-center items-center pt-4">
            <Pagination pageCount={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProductPage;
