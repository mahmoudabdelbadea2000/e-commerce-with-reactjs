import React from "react";
import { Link } from "react-router-dom";
import prod from "../../images/headphone-prod-6.webp";
import truncateStr from "../../logic/truncate.js";

const CartItem = () => {
  return (
    <Link to="/products/:id">
      <div className="flex justify-evenly py-2 transition hover:bg-gray-100">
        <img
          src={prod}
          alt="cart__image"
          className="h-[45px] bg-gray-100 rounded-sm"
        />
        <div className="">
          <div className="flex justify-between items-center">
            <p className="capitalize text-xs mr-1">
              {truncateStr("boat Rockerz 518 Wireless Headphone", 25)}
            </p>
            <i className="fa-solid fa-xmark cursor-pointer"></i>
          </div>
          <input
            type="number"
            placeholder="1"
            className="border w-10 text-center focus:outline-none"
          />
          <p className="text-xs mt-1">
            2X <span className="text-purple-800 font-bold">$100</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CartItem;
