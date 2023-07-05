import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="h-[500px]">
      <div className="container px-4 flex justify-center pt-24 h-full">
        <form className="flex flex-col gap-2 text-center w-[280px]">
          <p className="text-gray-600 capitalize font-bold text-3xl">login</p>
          <input
            className="
            focus:outline-none border border-gray-400 
            pl-2 rounded-md placeholder:text-xs
            w-full placeholder:text-gray-300 
            placeholder:capitalize"
            type="email"
            placeholder="enter your email"
          />
          <input
            className="focus:outline-none border border-gray-400 
            pl-2 rounded-md w-full placeholder:text-xs 
            placeholder:text-gray-300 
            placeholder:capitalize"
            type="password"
            placeholder="enter your password"
          />
          <button
            type="submit"
            className="text-white bg-slate-900 rounded-md py-1"
          >
            login
          </button>
          <p className="text-slate-900">
            do you have email?{" "}
            <Link to="/register">
              <span className="text-red-900">click here</span>
            </Link>
          </p>
        </form>
        <div>
          <Link to="/user/allorders">
            <h1 className="text-red-900 text-4xl">User</h1>
          </Link>
          <Link to="/admin/all-orders">
            <h1 className="text-red-900 text-4xl">admin</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
