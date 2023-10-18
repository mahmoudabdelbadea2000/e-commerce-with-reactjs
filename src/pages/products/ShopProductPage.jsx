import React from "react";
import {
  CategoryHeader,
  Pagination,
  ProductCard,
  ProductSort,
  SideFilter,
  Spinner,
} from "../../components";
import GetAllProductsHook from "../../logic/products/getAllProductsHook";

const ShopProductPage = () => {
  const { allProducts, pageCount, onPress, isLoading } = GetAllProductsHook();
  return (
    <section className="bg-gray-100">
      <CategoryHeader />
      <div className="container flex justify-center flex-col px-4 relative">
        <ProductSort />
        <SideFilter />
        <div className="bg-white p-4 rounded-sm">
          {isLoading === true ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-4 gap-2 ">
              {allProducts?.payload?.data &&
              allProducts?.payload?.data.length >= 1
                ? allProducts?.payload?.data.map((product) => {
                    return (
                      <ProductCard
                        colsapn=""
                        product={product}
                        key={product._id}
                      />
                    );
                  })
                : ""}
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
        </div>
      </div>
    </section>
  );
};

export default ShopProductPage;
