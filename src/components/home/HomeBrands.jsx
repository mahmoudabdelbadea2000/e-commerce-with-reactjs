import React from "react";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import Subtitle from "../utility/Subtitle";

const HomeBrands = () => {
  return (
    <section className="my-4">
      <div className="container px-4">
        <Subtitle title="Brands" text="more" route="/all-brands" />
        <div className="grid grid-cols-4 gap-4 justify-items-center items-center">
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
      </div>
    </section>
  );
};

export default HomeBrands;
