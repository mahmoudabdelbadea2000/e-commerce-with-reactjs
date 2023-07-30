import React from "react";
import Pagination from "../../components/utility/Pagination";
import Spinner from "../../components/utility/Spinner.jsx";
import GetAllBrandsHook from "../../logic/brands/getAllBrandsHook";

const AllBrandsPage = () => {
  const { brands, pageCount, onPress, isLoading } = GetAllBrandsHook();

  return (
    <section className="py-6">
      <div className="container px-4">
        <h2 className="font-bold text-3xl capitalize text-gray-800 py-2">
          all brands
        </h2>
        {isLoading === true ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-4 gap-2">
            {brands?.payload?.data && brands?.payload?.data.length >= 1
              ? brands?.payload?.data.slice(0, 4).map((brand) => {
                  return (
                    <img
                      src={brand.image}
                      className="col-span-2 md:col-span-1"
                      alt={brand.slug}
                      key={brand._id}
                    />
                  );
                })
              : ""}
          </div>
        )}
      </div>
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

export default AllBrandsPage;
