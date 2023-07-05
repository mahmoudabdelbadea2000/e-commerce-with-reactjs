import React from "react";
import { AdminManageProducts, AdminPanal } from "../../components";

const AdminManageProductsPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <AdminPanal />
          <AdminManageProducts />
        </div>
      </div>
    </section>
  );
};

export default AdminManageProductsPage;
