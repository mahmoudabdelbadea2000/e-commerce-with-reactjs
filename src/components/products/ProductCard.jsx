import React from "react";
import pord from "../../images/headphone-prod-5.webp";

const ProductCard = () => {
  function truncateStr(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  return (
    <div className="shadow col-span-2 md:col-span-1">
      <div className="bg-gray-100">
        <img src={pord} alt="product_image" />
      </div>
      <div className="px-2 pb-2">
        <i className="fa-regular fa-heart cursor-pointer"></i>
        <p className="capitalize">
          {truncateStr("boat Rockerz 518 Wireless Headphone", 40)}
        </p>
        <div className="flex justify-between items-center mt-2">
          <i className="fa-solid fa-star text-yellow-300">4.5</i>
          <p className="font-bold text-lg">$502</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
