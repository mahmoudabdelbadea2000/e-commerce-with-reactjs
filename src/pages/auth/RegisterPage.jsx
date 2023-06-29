import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="h-[500px]">
      <div className="container px-4 flex justify-center items-center h-full">
        <form className="flex flex-col gap-2 text-center w-[280px]">
          <p className="text-gray-600 capitalize font-bold text-3xl">
            register
          </p>
          <input
            className="
            focus:outline-none border border-gray-400 
            pl-2 rounded-md placeholder:text-xs
            w-full placeholder:text-gray-300 
            placeholder:capitalize"
            type="text"
            placeholder="your name"
          />
          <input
            className="
            focus:outline-none border border-gray-400 
            pl-2 rounded-md placeholder:text-xs
            w-full placeholder:text-gray-300 
            placeholder:capitalize"
            type="email"
            placeholder="email"
          />
          <input
            className="focus:outline-none border border-gray-400 
            pl-2 rounded-md w-full placeholder:text-xs 
            placeholder:text-gray-300 
            placeholder:capitalize"
            type="password"
            placeholder="your password"
          />
          <input
            className="focus:outline-none border border-gray-400 
            pl-2 rounded-md w-full placeholder:text-xs 
            placeholder:text-gray-300 
            placeholder:capitalize"
            type="password"
            placeholder="confirm your password"
          />
          <button
            type="submit"
            className="text-white bg-slate-900 rounded-md py-1"
          >
            register
          </button>
          <p className="text-slate-900">
            do you have email?{" "}
            <Link to="/login">
              <span className="text-red-900">click here</span>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
