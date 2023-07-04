import React from "react";
import { Pagination, RateItem, RatePost } from "../index";

const Rating = () => {
  return (
    <section className="bg-white mt-3 py-5 px-2 md:px-10 rounded-md">
      <div className="flex items-center">
        <h4 className="font-bold capitalize text-2xl">rating</h4>
        <i className="fa-solid fa-star text-yellow-300 text-[8px] mx-2">4.5</i>
        <span className="text-gray-400 capitalize text-[8px]">(180 rates)</span>
      </div>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />
      <div className="flex justify-center mt-3">
        <Pagination />
      </div>
    </section>
  );
};

export default Rating;
