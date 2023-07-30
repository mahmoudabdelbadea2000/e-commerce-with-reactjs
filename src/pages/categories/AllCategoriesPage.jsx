import React from "react";
import CardCategories from "../../components/categories/CardCategories";
import Pagination from "../../components/utility/Pagination";
import Spinner from "../../components/utility/Spinner";
import GetAllCategoriesHook from "../../logic/categories/getAllCategoriesHook";

const AllCategoriesPage = () => {
  const { cats, pageCount, onPress, isLoading } = GetAllCategoriesHook();
  return (
    <section className="py-6">
      <div className="container px-4">
        <h2 className="font-bold text-3xl capitalize text-gray-800 py-2">
          all categories
        </h2>
        {isLoading === true ? (
          <Spinner />
        ) : (
          <div>
            <div className="grid grid-cols-4 gap-2">
              {cats?.payload?.data && cats?.payload?.data.length >= 1
                ? cats?.payload?.data.map((cat) => {
                    return <CardCategories cat={cat} key={cat._id} />;
                  })
                : ""}
            </div>
            {pageCount >= 2 ? (
              <div className="flex justify-center items-center pt-4">
                <Pagination pageCount={pageCount} onPress={onPress} />
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCategoriesPage;
