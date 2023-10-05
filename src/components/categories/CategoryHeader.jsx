import React from "react";
import GetAllCategoriesHook from "../../logic/categories/getAllCategoriesHook";

const CategoryHeader = () => {
  const { cats } = GetAllCategoriesHook();
  return (
    <section className="bg-white py-2">
      <div className="container px-4">
        <div className="flex items-center gap-5 text-gray-400 ">
          <p className="capitalize transition-colors hover:text-gray-900 cursor-pointer">
            all
          </p>
          {cats?.payload.data && cats?.payload.data.length >= 1
            ? cats?.payload.data.map((cat) => {
                return (
                  <p
                    className="capitalize transition-colors hover:text-gray-900 cursor-pointer"
                    key={cat._id}
                  >
                    {cat.name}
                  </p>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;
