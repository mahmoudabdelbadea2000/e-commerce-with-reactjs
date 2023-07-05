import React from "react";
import ProductCard from "../products/ProductCard";
import Pagination from "../utility/Pagination";

const UserFavProducts = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        fav products
      </h2>
      <div className="bg-white px-3 py-2 mb-5 rounded-md">
        <div
          className="grid grid-cols-4 md:grid-cols-3 justify-between 
        items-center gap-3 mt-4"
        >
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
          <ProductCard colsapn="col-span-2 md:col-span-1" />
        </div>
        <div className="flex justify-center py-3">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default UserFavProducts;
