import React from "react";
import { AdminEditProduct, AdminPanal } from "../../components";

const AdminEditProductPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <AdminPanal />
          <AdminEditProduct />
        </div>
      </div>
    </section>
  );
};

export default AdminEditProductPage;
