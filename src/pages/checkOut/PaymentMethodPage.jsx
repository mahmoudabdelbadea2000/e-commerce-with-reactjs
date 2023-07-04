import React from "react";

const PaymentMethodPage = () => {
  return (
    <section className="py-6 h-[400px]">
      <div className="container px-4">
        <h2 className="font-bold text-lg sm:text-xl md:text-3xl capitalize text-gray-600 py-2">
          choose payment methoud
        </h2>
        <div className="shadow-xl mt-3 p-4 text-gray-500 rounded-md">
          <div className="flex items-center gap-2 py-6 px-4">
            <input type="radio" id="cash" />
            <label htmlFor="cash" className="cursor-pointer capitalize">
              cash on delivery
            </label>
          </div>
          <div className="flex items-center gap-2 py-6 px-4">
            <input type="radio" id="online" />
            <label htmlFor="online" className="cursor-pointer capitalize">
              visa card
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button
            type="submit"
            className="bg-slate-950 text-white py-2 px-6 rounded-md capitalize font-bold"
          >
            apply
          </button>
          <p className="py-2 px-6 border border-gray-500 font-bold rounded-lg text-gray-500">
            $1000
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodPage;
