import React from "react";
import { Link } from "react-router-dom";
import UserAddressItem from "./UserAddressItem";

const UserAddresses = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        addresses
      </h2>
      <UserAddressItem />
      <UserAddressItem />
      <UserAddressItem />
      <UserAddressItem />
      <Link to="/user/add-address">
        <div className="flex justify-center">
          <button
            type="text"
            className="capitalize px-4 py-3 bg-slate-950 text-white rounded-md"
          >
            add new address
          </button>
        </div>
      </Link>
    </div>
  );
};

export default UserAddresses;
