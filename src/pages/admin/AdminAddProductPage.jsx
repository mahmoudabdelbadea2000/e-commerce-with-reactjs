import React from "react";
import { AdminAddProduct, AdminPanal } from "../../components";

const AdminAddProductPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <AdminPanal />
          <AdminAddProduct />
        </div>
      </div>
    </section>
  );
};

export default AdminAddProductPage;
