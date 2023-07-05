import React from "react";
import UserOrders from "../../components/user/UserOrders";
import UserPanal from "../../components/user/UserPanal";

const UserAllOrdersPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <UserPanal />
          <UserOrders />
        </div>
      </div>
    </section>
  );
};

export default UserAllOrdersPage;
