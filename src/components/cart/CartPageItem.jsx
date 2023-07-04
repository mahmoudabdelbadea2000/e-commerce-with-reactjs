import React from "react";

const CartPageItem = ({ img }) => {
  return (
    <div className="flex gap-2 bg-white sm:ml-2 rounded-md p-3">
      <div className="flex justify-center items-center w-1/5">
        <img src={img} alt="prod__image" />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 capitalize font-semibold">elctronices</p>
          <i className="fa-solid fa-trash-can text-sm cursor-pointer"></i>
        </div>
        <p>
          Boat Rockerz 518 Wireless Headphone{" "}
          <span className="text-yellow-400 font-bold ml-1">4.5</span>
        </p>
        <p className="text-gray-600 font-bold">
          brand:
          <span className=" text-black capitalize"> apple</span>
        </p>
        <div className="flex justify-between items-centery w-fit gap-1 mt-1">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-700 rounded-full"></div>
          <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600 uppercase font-bold">
            gty{" "}
            <input
              type="number"
              className="focus:outline-none border border-black w-10 text-center rounded-sm"
            />
          </p>
          <p className="font-bold">$3000</p>
        </div>
      </div>
    </div>
  );
};

export default CartPageItem;
