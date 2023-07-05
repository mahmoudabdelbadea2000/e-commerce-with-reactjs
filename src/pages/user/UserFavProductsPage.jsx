import React from "react";
import UserFavProducts from "../../components/user/UserFavProducts";
import UserPanal from "../../components/user/UserPanal";

const UserFavProductsPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <UserPanal />
          <UserFavProducts />
        </div>
      </div>
    </section>
  );
};

export default UserFavProductsPage;
