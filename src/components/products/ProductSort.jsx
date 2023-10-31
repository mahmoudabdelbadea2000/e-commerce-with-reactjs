import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import SortSearchHook from "../../logic/search/SortingSearchHook";

const ProductSort = ({ prodCount }) => {
  const { options, defaultOption, onChangeSorting } = SortSearchHook();

  return (
    <div className="flex justify-between items-center py-2 px-4 my-4 bg-white">
      <h4 className="font-bold text-sm md:text-xl text-gray-900">
        products count {prodCount}
      </h4>
      <Dropdown
        options={options}
        onChange={onChangeSorting}
        className="w-[190px]"
        controlClassName="flex justify-center w-full py-2 px-4 gap-2 font-bold border-0 text-lg text-gray-600"
        menuClassName="border-0 rounded-md py-4 px-3 divide-y shadow-lg filter-class"
        arrowClosed={<i className="fa-solid fa-arrow-up-short-wide"></i>}
        arrowOpen={<i className="fa-solid fa-arrow-down-short-wide"></i>}
        value={defaultOption}
      />
    </div>
  );
};

export default ProductSort;
