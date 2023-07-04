import React from "react";

const RateItem = () => {
  return (
    <div className="p-2 border border-t-[1px] border-x-0 border-b-0 border-gray-300">
      <div className="flex items-center gap-1">
        <h4 className="font-bold text-md">mahmoud kamal</h4>
        <i className="fa-solid fa-star text-yellow-300 text-[8px]"> 4.5</i>
      </div>
      <p>this product is very well i recomended you puy this</p>
    </div>
  );
};

export default RateItem;
