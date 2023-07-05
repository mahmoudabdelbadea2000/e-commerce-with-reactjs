import React from "react";
import UserAddresses from "../../components/user/UserAddresses";
import UserPanal from "../../components/user/UserPanal";

const UserAddressesPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <UserPanal />
          <UserAddresses />
        </div>
      </div>
    </section>
  );
};

export default UserAddressesPage;
