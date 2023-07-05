import React from "react";
import UserOrderCard from "./UserOrderCard";

const UserOrderItem = () => {
  return (
    <div className="bg-white px-3 py-2 mb-5 rounded-md">
      <h6 className="capitalize text-lg font-bold mb-2">
        order number #120594
      </h6>
      <UserOrderCard />
      <UserOrderCard />
      <div className="flex justify-between items-center">
        <p className="">
          status <span className="text-gray-400">pinding</span>
        </p>
        <p className="font-bold">$3000</p>
      </div>
    </div>
  );
};

export default UserOrderItem;
