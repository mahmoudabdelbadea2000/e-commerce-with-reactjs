import React from "react";
import { Link } from "react-router-dom";
import truncateStr from "../../logic/genral/truncate";
import DeleteProductHook from "../../logic/products/deleteProductHook";
import CustomModal from "../utility/Modal";

const AdminProductCard = ({ prod }) => {
  const { glogalState, onChangeShowModal, handleDelete } = DeleteProductHook(
    prod._id
  );
  return (
    <div className="bg-white col-span-2 md:col-span-1">
      {glogalState.showModal && (
        <CustomModal
          typeOfAction="delete"
          modalTitle="delete the product"
          cancelProp={onChangeShowModal}
          actionProp={handleDelete}
        />
      )}

      <div className="flex justify-between items-center px-2 pt-2">
        <p
          className="cursor-pointer text-sm font-semibold text-gray-500"
          onClick={onChangeShowModal}
        >
          delete
        </p>
        <p className="cursor-pointer text-sm font-semibold text-gray-500">
          edit
        </p>
      </div>
      <Link to={`/products/${prod._id}`}>
        <img src={prod.imageCover} alt="product_image" />
        <div className="px-2 pb-2">
          <i className="fa-regular fa-heart cursor-pointer"></i>
          <p className="capitalize">{truncateStr(prod.description, 30)}</p>
          <div className="flex justify-between items-center mt-2">
            <i className="fa-solid fa-star text-yellow-300">
              {prod.ratingsQuantity}
            </i>
            <p className="font-bold text-lg">${prod.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdminProductCard;
