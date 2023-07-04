import React from "react";
import Pagination from "../../components/utility/Pagination";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";

const AllBrandsPage = () => {
  return (
    <section className="py-6">
      <div className="container px-4">
        <h2 className="font-bold text-3xl capitalize text-gray-800 py-2">
          all brands
        </h2>
        <div className="grid grid-cols-4 gap-2">
          <img
            src={brand1}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand2}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand3}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand1}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand1}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand2}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand3}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand1}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand1}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand2}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand3}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
          <img
            src={brand1}
            className="col-span-2 md:col-span-1"
            alt="brand__image"
          />
        </div>
        <div className="flex justify-center items-center pt-4">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default AllBrandsPage;
