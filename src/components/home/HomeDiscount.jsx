import React from "react";
import laptop from "../../images/laptops.png";

const HomeDiscount = () => {
  return (
    <section>
      <div className="container my-4 px-4">
        <div
          className=" rounded-md flex px-4 py-8 
      flex-col md:flex-row items-center bg-gray-700"
        >
          <div>
            <img
              src={laptop}
              className="w-full md:w-1/3"
              alt="prod__Discount"
            />
          </div>
          <h3
            className="
        font-bold text-white text-center md:text-right mt-3 md:mt-0 
        text-4xl w-full md:w-2/3"
          >
            Discount at least 50%
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HomeDiscount;
