import React from "react";
import { Link } from "react-router-dom";
import prod from "../../images/watch-prod-3.webp";
import CartPageItem from "../cart/CartPageItem";
import Pagination from "../utility/Pagination";

const AdminOrders = () => {
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        manage all orders
      </h2>
      <div>
        <Link to="/admin/orders/:id">
          <div className="mb-3 p-3">
            <CartPageItem img={prod} />
          </div>
        </Link>
        <Link to="/admin/orders/:id">
          <div className="mb-3 p-3">
            <CartPageItem img={prod} />
          </div>
        </Link>
        <Link to="/admin/orders/:id">
          <div className="mb-3 p-3">
            <CartPageItem img={prod} />
          </div>
        </Link>
        <Link to="/admin/orders/:id">
          <div className="mb-3 p-3">
            <CartPageItem img={prod} />
          </div>
        </Link>
      </div>
      <div className="flex justify-center py-3">
        <Pagination />
      </div>
    </section>
  );
};

export default AdminOrders;
