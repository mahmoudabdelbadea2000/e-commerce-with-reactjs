import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav className="bg-slate-950 text-white relative">
      <div className="container">
        <div className="grid grid-cols-12 items-center py-3">
          <div className="col-span-2 m-0 flex justify-center">
            <a href="/">
              <img src={logo} alt="logo" className="max-w-[50px]" />
            </a>
          </div>
          <div className="col-span-8">
            <input
              type="text"
              placeholder="search about every thinks"
              className="w-full rounded-sm focus:outline-none text-slate-400 pl-2 py-1"
            />
          </div>
          <div className="col-span-2 flex justify-center gap-3">
            <div
              className="
                flex flex-row justify-center items-center gap-3"
            >
              <Link to="/login">
                <div className="flex items-center">
                  <span className="mr-1 hidden md:inline-block">login</span>
                  <i className="fa-regular fa-user"></i>
                </div>
              </Link>
              <Link to="/cart">
                <div className="flex items-center">
                  <span className="mr-1 hidden md:inline-block">cart</span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
