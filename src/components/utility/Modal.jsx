import React from "react";

const CustomModal = ({ modalTitle, typeOfAction, cancelProp, actionProp }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <div className="bg-white shadow-lg rounded-md p-4 capitalize absolute top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-[40%] h-fit">
        <h1 className="font-bold text-[25px] text-slate-900">{modalTitle}</h1>
        <hr className="bg-black" />
        <p className="text-lg text-gray-500 py-5">
          Do you sure to {typeOfAction}
        </p>
        <hr className="bg-black" />
        <div className="flex items-center gap-4 mt-4">
          <button
            type="submit"
            onClick={actionProp}
            className="py-2 px-4 border-none bg-red-700 text-white rounded-md"
          >
            {typeOfAction}
          </button>
          <button
            type="button"
            onClick={cancelProp}
            className="py-2 px-4 border-none text-white bg-slate-950 rounded-md"
          >
            cancel
          </button>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full z-40"
        style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
      />
    </div>
  );
};

export default CustomModal;
