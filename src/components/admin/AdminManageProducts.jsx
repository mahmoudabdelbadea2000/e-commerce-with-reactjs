import React from "react";
import GetAllProductsHook from "../../logic/products/getAllProductsHook";
import Pagination from "../utility/Pagination";
import Spinner from "../utility/Spinner";
import AdminProductCard from "./AdminProductCard";

const AdminManageProducts = () => {
  const { allProducts, pageCount, onPress, isLoading } = GetAllProductsHook();
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        manage all products
      </h2>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-4 md:grid-cols-3 gap-2">
          {allProducts?.data && allProducts?.data.length >= 1
            ? allProducts?.data.map((prod) => {
                return (
                  <AdminProductCard
                    prod={prod}
                    key={prod._id}
                  />
                );
              })
            : ""}
        </div>
      )}
      {pageCount >= 2 ? (
        <div className="flex justify-center py-3">
          <Pagination pageCount={pageCount} onPress={onPress} />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default AdminManageProducts;
