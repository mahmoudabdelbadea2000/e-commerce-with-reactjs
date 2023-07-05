import React from "react";

const UserProfile = () => {
  return (
    <div className="col-span-12 md:col-span-8">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        personal profile
      </h2>
      <div className="bg-white p-4  mb-3 rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <p className="capitalize">home</p>
          <i className="fa-regular fa-pen-to-square cursor-pointer"></i>
        </div>
        <p className="capitalize my-4">
          ghozlan street - bir elabd - north sinai
        </p>
        <p className="capitalize">
          phone number : <span className="text-gray-400">0102947589</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 md:w-[50%]">
        <h4 className="font-bold text-lg text-gray-500 capitalize">
          change your password
        </h4>
        <input
          type="password"
          className="p-2 focus:outline-none border border-gray-400 bg-transparent rounded-md"
          placeholder="enter old password"
        />
        <input
          type="password"
          className="p-2 focus:outline-none border border-gray-400 bg-transparent rounded-md"
          placeholder="enter new password"
        />
        <input
          type="password"
          className="p-2 focus:outline-none border border-gray-400 bg-transparent rounded-md"
          placeholder="confirm new password"
        />
        <button
          type="submit"
          className="capitalize px-4 py-3 bg-slate-950 text-white rounded-md w-fit"
        >
          save password
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
