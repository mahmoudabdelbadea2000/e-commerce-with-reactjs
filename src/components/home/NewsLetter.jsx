import React from "react";

const NewsLetter = () => {
  return (
    <section className="newsletter min-h-60 py-8">
      <div className="container px-4">
        <div className="flex justify-center items-center flex-col">
          <p className="capitalize text-gray-400">newsletter</p>
          <h2 className="capitalize font-bold text-sm sm:text-lg md:text-2xl ">
            SIGN UP FOR LATEST UPDATES AND OFFERS
          </h2>
          <form action="" className="flex mt-4">
            <input
              type="text"
              placeholder="email address"
              className="pl-2 focus:outline-none
              border border-gray-400"
              id="email-address"
            />
            <button
              type="button"
              className="capitalize bg-purple-600 text-white px-4 py-2 ml-2"
            >
              subscribe
            </button>
          </form>
          <p className="mt-2 uppercase text-xs text-gray-400">
            Will be used in accordance with our Privacy Policy
          </p>
          <div className="flex gap-4 mt-4">
            <i className="fa-brands fa-facebook text-2xl flex justify-center items-start"></i>
            <i className="fa-brands fa-linkedin text-2xl flex justify-center items-start"></i>
            <i className="fa-brands fa-twitter text-2xl flex justify-center items-start"></i>
            <i className="fa-brands fa-instagram text-2xl flex justify-center items-start"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
