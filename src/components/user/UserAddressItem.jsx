import React from "react";
import { Link } from "react-router-dom";

const UserAddressItem = () => {
  return (
    <div className="bg-white p-4  mb-3 rounded-md shadow-md">
      <div className="flex justify-between items-center">
        <p className="capitalize">home</p>
        <div className="flex gap-7">
          <Link to="/user/edit-address">
            <i className="fa-regular fa-pen-to-square"></i>
          </Link>
          <i className="fa-regular fa-trash-can cursor-pointer"></i>
        </div>
      </div>
      <p className="capitalize my-4">
        ghozlan street - bir elabd - north sinai
      </p>
      <p className="capitalize">
        phone number : <span className="text-gray-400">0102947589</span>
      </p>
    </div>
  );
};

export default UserAddressItem;
