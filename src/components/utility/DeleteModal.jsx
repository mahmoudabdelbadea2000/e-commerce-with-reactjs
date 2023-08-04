import React from "react";

const DeleteModal = ({ onChangeModal, nameOfComponant, handelDelete }) => {
  return (
    <div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 rounded-md bg-white border border-gray-300 w-96 divide-y-[1px] divide-gray-200 z-20">
        <div className="flex justify-between items-center pb-3">
          <h4 className="font-bold text-md text-gray-800 capitalize">
            {`delete the ${nameOfComponant}`}
          </h4>
          <i
            className="fa-solid fa-xmark cursor-pointer transition-all hover:text-red-700"
            onClick={() => onChangeModal(false)}
          ></i>
        </div>
        <p className="py-5">{`Are you sure you want to delete the ${nameOfComponant}`}</p>
        <div className="pt-3 text-right">
          <button
            type="text"
            className="py-2 px-4 text-white rounded-md transition-all capitalize bg-gray-700 hover:bg-gray-500 mr-4"
            onClick={() => onChangeModal(false)}
          >
            cancel
          </button>
          <button
            type="submit"
            className="py-2 px-7 text-white rounded-md transition-all capitalize bg-red-500 hover:bg-red-700"
            onClick={handelDelete}
          >
            delete
          </button>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000033] z-10"></div>
    </div>
  );
};

export default DeleteModal;
