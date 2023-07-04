import React from "react";
import headphone from "../../images/earbuds-prod-1.webp";

const ProductDetailes = () => {
  return (
    <section className="flex justify-center items-center gap-4 flex-col sm:flex-row bg-white p-5 rounded-md">
      <div className="flex justify-center items-center basis-1/3">
        <img src={headphone} alt="prod__image" />
      </div>
      <div className="basis-2/3">
        <p className="font-bold">
          boAt Rockerz 450 DC edition I Wireless Headphone with 40mm Dynamic
          Driver
        </p>
        <p className="font-bold my-2 text-purple-900">$1999</p>
        <p className="text-sm">
          There is no better justice to yrur playlist & binging than Rockerz 450
          boAt I DC edition. If Iow battery is your enemy, the 15HRS non-stop
          playback is here to rightfully combat that. Feel the power rising up
          in your veins as you indulge in your playlist with its 40mm dynamic
          drivers. Make adaptiveness your superpower just like the adaptive
          headband of Rockerz 450. Get ready to rule with #DCYou.
        </p>
        <div className="flex gap-2 mt-5">
          <input
            type="number"
            className="border w-14 text-center focus:outline-none bg-gray-50"
          />
          <button type="submit">
            <i className="fa-solid fa-cart-plus text-white bg-purple-800 py-3 px-6 text-sm">
              add to cart
            </i>
          </button>
        </div>
        <hr className="my-3" />
        <p className="font-bold">
          category: <span className="font-normal capitalize">phones</span>
        </p>
        <p className="font-bold my-1">
          brand: <span className="font-normal capitalize">apple</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="font-bold">color:</span>
          <div className="flex justify-between items-centery w-fit gap-1 mt-1">
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <div className="w-6 h-6 bg-purple-700 rounded-full"></div>
            <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailes;
