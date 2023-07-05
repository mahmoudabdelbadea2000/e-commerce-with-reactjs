import React from "react";
import { AdminOrders, AdminPanal } from "../../components";

const AdminAllOrdersPage = () => {
  return (
    <section className="pt-10 bg-gray-100">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-2">
          <AdminPanal />
          <AdminOrders />
        </div>
      </div>
    </section>
  );
};

export default AdminAllOrdersPage;
