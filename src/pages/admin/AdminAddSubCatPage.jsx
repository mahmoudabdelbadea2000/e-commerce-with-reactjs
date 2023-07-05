import React from "react";
import { AdminAddSubCat, AdminPanal } from "../../components";

const AdminAddSubCatPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <AdminPanal />
          <AdminAddSubCat />
        </div>
      </div>
    </section>
  );
};

export default AdminAddSubCatPage;
