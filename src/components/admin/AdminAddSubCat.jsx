import React from "react";

const AdminAddSubCat = () => {
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add subCategory
      </h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[50%] pl-2 border border-gray-300"
          placeholder="subcategory name"
        />
        <select className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[50%] pl-2 border border-gray-300 text-gray-500">
          <option value="0" className="capitalize">
            cat one
          </option>
          <option value="1" className="capitalize">
            cat two
          </option>
          <option value="2" className="capitalize">
            cat three
          </option>
          <option value="3" className="capitalize">
            cancel
          </option>
        </select>
        <button
          type="submit"
          className="capitalize bg-slate-950 text-white py-2 px-6 rounded-md w-fit"
        >
          save edites
        </button>
      </div>
    </section>
  );
};

export default AdminAddSubCat;
