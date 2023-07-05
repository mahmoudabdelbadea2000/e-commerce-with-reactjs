import React from "react";
import UserPanal from "../../components/user/UserPanal";
import UserProfile from "../../components/user/UserProfile";

const UserProfilePage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <UserPanal />
          <UserProfile />
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
