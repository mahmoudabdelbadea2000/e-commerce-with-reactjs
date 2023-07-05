import React from "react";
import prod from "../../images/earbuds-prod-5.webp";

const UserOrderCard = () => {
  return (
    <div className="flex gap-2 bg-white sm:ml-2 rounded-md p-3">
      <div className="flex justify-center items-center w-1/5">
        <img src={prod} alt="prod__image" />
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <p>
          Boat Rockerz 518 Wireless Headphone
          <span className="text-yellow-400 font-bold ml-1">4.5</span>
        </p>
        <div className="flex justify-between items-centery w-fit gap-1 mt-1">
          <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-700 rounded-full"></div>
          <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-gray-600 uppercase font-bold">gty</p>
          <input
            type="number"
            className="focus:outline-none border border-black w-10 text-center rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default UserOrderCard;
