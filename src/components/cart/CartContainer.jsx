import React from "react";
import CartItem from "./CartItem";

const CartContainer = ({ setShowCart }) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-[100] w-full h-full bg-black opacity-50"></div>
      <section
        className="
        min-h-screen bg-white text-black z-[1000]
        sm:w-[300px] md:w-[250px]
        fixed top-0 right-0 px-2 py-2"
      >
        <div
          className="flex justify-between
        items-center border-b-[1px]
        border-black pb-1"
        >
          <h4 className="font-bold uppercase text-sm py-1">sopping cart</h4>
          <i
            className="fa-solid fa-xmark cursor-pointer"
            onClick={() => setShowCart((prev) => !prev)}
          ></i>
        </div>
        <div className="grid mt-4 divide-y-[1px] divide-opacity-70 divide-gray-200">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="absolute bottom-[10px] w-[90%]">
          <div
            className="flex justify-between items-center 
        border-t-[1px] border-b-[1px] 
        border-black mb-4 py-2"
          >
            <p className="font-bold uppercase text-sm">subtotal:</p>
            <p className="text-purple-700 font-bold">$100</p>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2"
          >
            checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default CartContainer;
