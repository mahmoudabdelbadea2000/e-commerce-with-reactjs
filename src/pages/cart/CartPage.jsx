import React from "react";
import { Link } from "react-router-dom";
import CartPageItem from "../../components/cart/CartPageItem";
import headphone1 from "../../images/earbuds-prod-1.webp";
import headphone2 from "../../images/earbuds-prod-2.webp";
import headphone3 from "../../images/earbuds-prod-3.webp";
import headphone4 from "../../images/earbuds-prod-4.webp";
import headphone5 from "../../images/mobile.png";

const CartPage = () => {
  return (
    <section className="bg-gray-200 py-5">
      <div className="container px-4">
        <h2 className="font-bold capitalize text-3xl text-gray-800 mb-5">
          cart page
        </h2>
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 sm:col-span-4 order-2 sm:order-1 mt-4 sm:mt-0  rounded-lg p-2 bg-white h-fit">
            <div className="flex">
              <input
                type="text"
                className="text-center focus:outline-none
                placeholder:text-center border border-black
                h-[40px] px-3 w-[75%]"
                placeholder="coboun"
              />
              <button
                type="submit"
                className="bg-black text-white font-bold uppercase text-sm w-[25%]"
              >
                apply
              </button>
            </div>
            <p className="w-full px-5 py-2 rounded-sm text-center my-2 border border-gray-300">
              $3400
            </p>
            <Link to="/order/payment-method">
              <button
                type="submit"
                className="w-full bg-black text-white
            py-2 rounded-sm font-bold capitalize"
              >
                buy now
              </button>
            </Link>
          </div>
          <div className="col-span-12 sm:col-span-8 order-1 sm:order-2 flex flex-col gap-2">
            <CartPageItem img={headphone1} />
            <CartPageItem img={headphone2} />
            <CartPageItem img={headphone3} />
            <CartPageItem img={headphone4} />
            <CartPageItem img={headphone5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
