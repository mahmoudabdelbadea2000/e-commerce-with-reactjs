import React from "react";
import { AdminOrder, AdminPanal } from "../../components";

const AdminOrderPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <AdminPanal />
          <AdminOrder />
        </div>
      </div>
    </section>
  );
};

export default AdminOrderPage;
