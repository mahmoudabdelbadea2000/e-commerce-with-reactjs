import React from "react";
import { Link } from "react-router-dom";
import truncateStr from "../../logic/genral/truncate";

const ProductCard = ({ colsapn, product }) => {
  return (
    <Link
      to={`/products/`}
      className={`shadow ${
        colsapn === "" ? "col-span-2 md:col-span-1" : colsapn
      }`}
    >
      <div className="bg-gray-100">
        <img src={product.imageCover} alt="" />
      </div>
      <div className="px-2 pb-2">
        <i className="fa-regular fa-heart cursor-pointer"></i>
        <p className="capitalize font-bold my-2">{product.title}</p>
        <p className="capitalize">{truncateStr(product.description, 40)}</p>
        <div className="flex justify-between items-center mt-2">
          <i className="fa-solid fa-star text-yellow-300">
            {product.ratingsQuantity}
          </i>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
