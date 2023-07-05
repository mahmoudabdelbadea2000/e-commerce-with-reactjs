import React from "react";

const UserAddAddress = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add new address
      </h2>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          className="bg-transparent focus:outline-none border border-gray-400 px-2 py-3 rounded-md w-[70%] placeholder:text-gray-400"
          placeholder="home"
        />
        <textarea
          id=""
          cols="30"
          rows="3"
          className="bg-transparent focus:outline-none border border-gray-400 px-2 py-3 rounded-md w-[70%] placeholder:text-gray-400"
          placeholder="Ghozlan Street - Bir Elabd - North Sinai"
        ></textarea>
        <input
          type="number"
          className="bg-transparent focus:outline-none border border-gray-400 px-2 py-3 rounded-md w-[70%] placeholder:text-gray-400"
          placeholder="0102947589"
        />
        <button
          type="text"
          className="capitalize px-4 py-3 bg-slate-950 text-white rounded-md w-fit"
        >
          apply address
        </button>
      </form>
    </div>
  );
};

export default UserAddAddress;
