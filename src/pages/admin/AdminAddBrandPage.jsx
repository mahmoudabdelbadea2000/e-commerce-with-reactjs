import React from "react";
import { AdminAddBrand, AdminPanal } from "../../components";

const AdminAddBrandPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <AdminPanal />
          <AdminAddBrand />
        </div>
      </div>
    </section>
  );
};

export default AdminAddBrandPage;
