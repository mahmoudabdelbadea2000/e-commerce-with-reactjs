import React from "react";
import { AdminUpdateProduct, AdminPanal } from "../../components";

const AdminUpdateProductPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <AdminPanal />
          <AdminUpdateProduct />
        </div>
      </div>
    </section>
  );
};

export default AdminUpdateProductPage;
