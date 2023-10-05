import React, { useState } from "react";
import GetAllBrandsHook from "../../logic/brands/getAllBrandsHook";
import GetAllCategoriesHook from "../../logic/categories/getAllCategoriesHook";

const SideFilter = () => {
  const [sideFilterToggle, setSideFilterToggle] = useState(false);
  const { catsWithoutPage } = GetAllCategoriesHook();
  const { brandsWithoutPage } = GetAllBrandsHook();
  return (
    <div
      className={`bg-white rounded-e-md fixed top-0 w-52 ${
        sideFilterToggle ? "left-0" : "left-[-210px]"
      } py-4 px-3 transition-all drop-shadow-lg`}
    >
      <i
        onClick={() => setSideFilterToggle((prev) => !prev)}
        className="fa-solid fa-gear absolute top-28 right-[-24px] bg-slate-900 text-white p-1 rounded-e-sm cursor-pointer"
      ></i>
      <div className="h-screen">
        <div>
          <h5 className="font-bold text-md text-slate-950 capitalize">
            categories
          </h5>
          <ul className="ml-2 mt-2 flex gap-3 flex-wrap">
            <li className="flex items-center gap-1">
              <input
                type="checkbox"
                className="cursor-pointer"
                id="cat__all"
              />
              <label
                htmlFor="cat__all"
                className="capitalize text-gray-500 text-sm cursor-pointer"
              >
                all
              </label>
            </li>
            {catsWithoutPage && catsWithoutPage.length >= 1
              ? catsWithoutPage.map((cat) => {
                  return (
                    <li className="flex items-center gap-1" key={cat._id}>
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        id={cat._id}
                      />
                      <label
                        htmlFor={cat._id}
                        className="capitalize text-gray-500 text-sm cursor-pointer"
                      >
                        {cat.name}
                      </label>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        <div className="mt-3">
          <h5 className="font-bold text-md text-slate-950 capitalize">
            brands
          </h5>
          <ul className="flex gap-3 flex-wrap ml-2 mt-2">
            <li className="flex items-center gap-1">
              <input
                type="checkbox"
                className="cursor-pointer"
                id="brand__all"
              />
              <label
                htmlFor="brand__all"
                className="capitalize text-gray-500 text-sm cursor-pointer"
              >
                all
              </label>
            </li>
            {brandsWithoutPage && brandsWithoutPage.length >= 1
              ? brandsWithoutPage.map((brand) => {
                  return (
                    <li className="flex items-center gap-1" key={brand._id}>
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        id={brand._id}
                      />
                      <label
                        htmlFor={brand._id}
                        className="capitalize text-gray-500 text-sm cursor-pointer"
                      >
                        {brand.name}
                      </label>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
        <div className="mt-3">
          <h5 className="font-bold text-md text-slate-950 capitalize">price</h5>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-1">
              <div className="flex items-center gap-2">
                <label htmlFor="price__before" className="cursor-pointer">
                  for:
                </label>
                <input
                  type="number"
                  id="price__before"
                  className="focus:outline-none border border-gray-400 pl-2 w-10 rounded-sm"
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="price__after" className="cursor-pointer mr-1">
                  to:
                </label>
                <input
                  type="number"
                  id="price__after"
                  className="focus:outline-none border border-gray-400 pl-2 w-10 rounded-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-3 py-1 bg-slate-950 text-white text-sm w-10 rounded-sm text-center"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
