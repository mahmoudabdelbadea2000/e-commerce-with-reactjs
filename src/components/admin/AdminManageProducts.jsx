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
          {allProducts?.payload?.data && allProducts?.payload?.data.length >= 1
            ? allProducts?.payload?.data.map((prod) => {
                return <AdminProductCard key={prod._id} prod={prod} />;
              })
            : null}
        </div>
      )}
      <div className="flex justify-center items-center pt-4">
        {pageCount >= 2 ? (
          <div className="flex justify-center items-center pt-4">
            <Pagination pageCount={pageCount} onPress={onPress} />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default AdminManageProducts;
