import React from "react";
import {
  CategoryHeader,
  Pagination,
  ProductCard,
  ProductSort,
  SideFilter,
  Spinner,
} from "../../components";
import ViewSearchProductHook from "../../logic/search/ViewSearchProductHook";

const ShopProductPage = () => {
  const { searchProducts, onPress, isLoading } = ViewSearchProductHook();

  return (
    <section className="bg-gray-100">
      <CategoryHeader />
      <div className="container flex justify-center flex-col px-4 relative">
        <ProductSort prodCount={searchProducts?.results} />
        <SideFilter />
        <div className="bg-white p-4 rounded-sm">
          {isLoading === true ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-4 gap-2 ">
              {searchProducts?.data && searchProducts?.data.length >= 1
                ? searchProducts?.data.map((product) => {
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
            {searchProducts?.paginationResult?.numberOfPages >= 2 ? (
              <div className="flex justify-center items-center pt-4">
                <Pagination
                  pageCount={searchProducts?.paginationResult?.numberOfPages}
                  onPress={onPress}
                />
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
