import React from "react";
import UserAddAddress from "../../components/user/UserAddAddress";
import UserPanal from "../../components/user/UserPanal";

const UserAddAddressPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <UserPanal />
          <UserAddAddress />
        </div>
      </div>
    </section>
  );
};

export default UserAddAddressPage;
