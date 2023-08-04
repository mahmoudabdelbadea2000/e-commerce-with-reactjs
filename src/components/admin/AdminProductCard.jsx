import React from "react";
import { Link } from "react-router-dom";
import truncateStr from "../../logic/genral/truncate";
import DeleteProductHook from "../../logic/products/deleteProductHook";
import DeleteModal from "../utility/DeleteModal";

const AdminProductCard = ({ prod }) => {
  const { handelDelete, showModal, onChangeModal } = DeleteProductHook(
    prod._id
  );
  return (
    <div className="bg-white col-span-2 md:col-span-1">
      {showModal && (
        <DeleteModal
          nameOfComponant="product"
          handelDelete={handelDelete}
          onChangeModal={onChangeModal}
        />
      )}
      <div className="flex justify-between items-center px-2 pt-2">
        <p
          className="cursor-pointer text-sm font-semibold text-gray-500"
          onClick={() => onChangeModal(true)}
        >
          delete
        </p>
        <Link to={`/admin/update-product/${prod._id}`}>
          <p className="cursor-pointer text-sm font-semibold text-gray-500">
            edit
          </p>
        </Link>
      </div>
      <Link to={`/products/${prod._id}`}>
        <img src={prod.imageCover} alt={prod.slug} />
        <div className="px-2 pb-2">
          <i className="fa-regular fa-heart cursor-pointer"></i>
          <p className="capitalize font-bold">{prod.title}</p>
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
