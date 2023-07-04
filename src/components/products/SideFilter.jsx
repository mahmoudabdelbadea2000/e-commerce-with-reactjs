import React, { useState } from "react";

const SideFilter = () => {
  const [sideFilterToggle, setSideFilterToggle] = useState(false);
  return (
    <div
      className={`bg-white rounded-e-md fixed top-28 ${
        sideFilterToggle ? "left-0" : "left-[-150px]"
      } py-4 px-3 transition-all drop-shadow-lg`}
    >
      <i
        onClick={() => setSideFilterToggle((prev) => !prev)}
        className="fa-solid fa-gear absolute top-14 right-[-24px] bg-slate-900 text-white p-1 rounded-e-sm cursor-pointer"
      ></i>
      <div>
        <h5 className="font-bold text-md text-slate-950 capitalize">
          categories
        </h5>
        <ul className=" ml-2 mt-2 flex flex-col gap-1">
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__all" />
            <label
              htmlFor="cat__all"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              all
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__one" />
            <label
              htmlFor="cat__one"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              clothes
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__two" />
            <label
              htmlFor="cat__two"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              phones
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__three" />
            <label
              htmlFor="cat__three"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              tablats
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__four" />
            <label
              htmlFor="cat__four"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              laptops
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-3">
        <h5 className="font-bold text-md text-slate-950 capitalize">brands</h5>
        <ul className="flex flex-col gap-1 ml-2 mt-2">
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__all" />
            <label
              htmlFor="cat__all"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              all
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__one" />
            <label
              htmlFor="cat__one"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              LG
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__two" />
            <label
              htmlFor="cat__two"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              apple
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__three" />
            <label
              htmlFor="cat__three"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              tornadow
            </label>
          </li>
          <li className="flex items-center gap-1">
            <input type="checkbox" className="cursor-pointer" id="cat__four" />
            <label
              htmlFor="cat__four"
              className="capitalize text-gray-500 text-sm cursor-pointer"
            >
              toshipa
            </label>
          </li>
        </ul>
      </div>
      <div className="mt-3">
        <h5 className="font-bold text-md text-slate-950 capitalize">price</h5>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex flex-col gap-2">
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
              <label htmlFor="price__before" className="cursor-pointer mr-1">
                to:
              </label>
              <input
                type="number"
                id="price__before"
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
  );
};

export default SideFilter;
