import React from "react";
import { Link } from "react-router-dom";
import pord from "../../images/headphone-prod-5.webp";
import truncateStr from "../../logic/truncate.js";

const AdminProductCard = () => {
  return (
    <div className="bg-white col-span-2 md:col-span-1">
      <div className="flex justify-between items-center px-2 pt-2">
        <p className="cursor-pointer text-sm font-semibold text-gray-500">
          delete
        </p>
        <p className="cursor-pointer text-sm font-semibold text-gray-500">
          edit
        </p>
      </div>
      <Link to="/products/:id">
        <img src={pord} alt="product_image" />
        <div className="px-2 pb-2">
          <i className="fa-regular fa-heart cursor-pointer"></i>
          <p className="capitalize">
            {truncateStr("boat Rockerz 518 Wireless Headphone", 30)}
          </p>
          <div className="flex justify-between items-center mt-2">
            <i className="fa-solid fa-star text-yellow-300">4.5</i>
            <p className="font-bold text-lg">$502</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdminProductCard;
