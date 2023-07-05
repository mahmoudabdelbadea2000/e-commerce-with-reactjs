import React from "react";
import { AdminAddCategory, AdminPanal } from "../../components";

const AdminAddCategoryPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <AdminPanal />
          <AdminAddCategory />
        </div>
      </div>
    </section>
  );
};

export default AdminAddCategoryPage;
