import React from "react";

const AdminAddCategory = () => {
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add category
      </h2>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-gray-500">image of category</p>
        <i className="fa-regular fa-images text-8xl cursor-pointer text-gray-300"></i>
        <input
          type="text"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[50%] pl-2 border border-gray-300"
          placeholder="category name"
        />
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

export default AdminAddCategory;
