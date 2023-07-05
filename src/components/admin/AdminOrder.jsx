import React from "react";
import prod from "../../images/watch-prod-3.webp";
import CartPageItem from "../cart/CartPageItem";

const AdminOrder = () => {
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        detailes order #94
      </h2>
      <div className="flex flex-col gap-3">
        <CartPageItem img={prod} />
        <CartPageItem img={prod} />
        <CartPageItem img={prod} />
      </div>
      <section className="bg-white shadow mt-4 rounded-md">
        <h4 className="font-bold text-xl text-gray-700 capitalize mb-3 p-3">
          client detailes
        </h4>
        <div className="flex flex-col gap-1">
          <p className="pl-3">
            name : <span className="text-gray-400">mahmoud abdo</span>
          </p>
          <p className="pl-3">
            phone number : <span className="text-gray-400">0101847543</span>
          </p>
          <p className="pl-3">
            email : <span className="text-gray-400">mahmoud@gmail.com</span>
          </p>
          <p className="text-center py-3 border">$10000</p>
          <div className="flex justify-center gap-2 py-2">
            <select className="focus:outline-none border rounded-md text-center w-[50%]">
              <option value="0" className="capitalize">
                order status
              </option>
              <option value="1" className="capitalize">
                pinding
              </option>
              <option value="2" className="capitalize">
                finish
              </option>
              <option value="3" className="capitalize">
                cancel
              </option>
            </select>
            <button
              type="submit"
              className="capitalize bg-slate-950 text-white py-2 px-6 rounded-md"
            >
              save
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AdminOrder;
