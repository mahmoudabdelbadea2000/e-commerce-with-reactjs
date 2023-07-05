import React from "react";
import Pagination from "../utility/Pagination";
import AdminProductCard from "./AdminProductCard";

const AdminManageProducts = () => {
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        manage all products
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-2">
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </div>
      <div className="flex justify-center py-3">
        <Pagination />
      </div>
    </section>
  );
};

export default AdminManageProducts;
