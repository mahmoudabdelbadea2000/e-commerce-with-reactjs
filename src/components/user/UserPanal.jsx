import React from "react";
import { Link } from "react-router-dom";

const UserPanal = () => {
  return (
    <section className="col-span-12 md:col-span-4 lg:col-span-3 h-fit rounded-md bg-white">
      <div className="flex justify-between items-center text-sm text-center md:text-left md:text-lg md:block md:px-3 md:py-6">
        <Link to="/user/allorders">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            manage orders
          </p>
        </Link>
        <Link to="/user/fav-products">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            fav products
          </p>
        </Link>
        <Link to="/user/addresses">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            personal addresses
          </p>
        </Link>
        <Link to="/user/profile">
          <p className="px-4 py-3 rounded-md capitalize transition-colors hover:bg-slate-950 hover:text-white">
            profile
          </p>
        </Link>
      </div>
    </section>
  );
};

export default UserPanal;
