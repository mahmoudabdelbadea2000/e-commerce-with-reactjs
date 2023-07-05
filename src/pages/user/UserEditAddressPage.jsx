import React from "react";
import UserEditAddress from "../../components/user/UserEditAddress";
import UserPanal from "../../components/user/UserPanal";

const UserEditAddressPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <UserPanal />
          <UserEditAddress />
        </div>
      </div>
    </section>
  );
};

export default UserEditAddressPage;
