import React from "react";
import UserOrderItem from "./UserOrderItem";

const UserOrders = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        hello mahmoud abdo
      </h2>
      <UserOrderItem />
      <UserOrderItem />
      <UserOrderItem />
    </div>
  );
};

export default UserOrders;
