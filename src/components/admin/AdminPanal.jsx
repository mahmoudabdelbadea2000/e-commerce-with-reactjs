import React from "react";
import { Link } from "react-router-dom";

const AdminPanal = () => {
  return (
    <section className="col-span-12 md:col-span-4 lg:col-span-3 h-fit rounded-md bg-white">
      <div className="grid grid-cols-4 text-center md:text-left md:px-3 md:py-6">
        <Link to="/admin/all-orders" className="col-span-2 md:col-span-4">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            manage orders
          </p>
        </Link>
        <Link to="/admin/all-products" className="col-span-2 md:col-span-4">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            manage products
          </p>
        </Link>
        <Link to="/admin/add-brand" className="col-span-2 md:col-span-4">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            add brand
          </p>
        </Link>
        <Link to="/admin/add-category" className="col-span-2 md:col-span-4">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            add category
          </p>
        </Link>
        <Link to="/admin/add-subcategory" className="col-span-2 md:col-span-4">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            add sub category
          </p>
        </Link>
        <Link to="/admin/add-product" className="col-span-2 md:col-span-4">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            add product
          </p>
        </Link>
      </div>
    </section>
  );
};

export default AdminPanal;
