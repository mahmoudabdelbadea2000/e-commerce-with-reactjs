import React from "react";
import { ToastContainer } from "react-toastify";
import Spinner from "../../components/utility/Spinner";
import CreateCategoryHook from "../../logic/categories/createCategoryHook";

const AdminAddCategory = () => {
  const { img, catName, onChangeCatName, onChangeImg, handelSubmit, isPress } =
    CreateCategoryHook();

  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add category
      </h2>
      <div className="flex flex-col gap-2">
        <p className="capitalize text-gray-500">image of category</p>
        <div className="w-fit">
          <label htmlFor="upload-photo">
            <img
              src={img}
              alt="select category"
              className="cursor-pointer w-32"
            />
          </label>
          <input
            type="file"
            onChange={onChangeImg}
            className="hidden"
            name="photo"
            id="upload-photo"
          />
        </div>
        <input
          type="text"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[80%] pl-2 border border-gray-300"
          placeholder="category name"
          value={catName}
          onChange={onChangeCatName}
        />
        {isPress === true ? <Spinner /> : ""}
        {isPress === true ? (
          <button
            type="submit"
            className="capitalize text-white py-2 px-6 rounded-md w-fit disabled:bg-slate-800"
            disabled
          >
            save edites
          </button>
        ) : (
          <button
            type="submit"
            onClick={handelSubmit}
            className="capitalize bg-slate-950 text-white py-2 px-6 rounded-md w-fit disabled:bg-slate-800"
          >
            save edites
          </button>
        )}
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminAddCategory;
