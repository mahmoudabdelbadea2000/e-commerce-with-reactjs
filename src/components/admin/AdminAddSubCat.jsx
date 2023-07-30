import React from "react";
import { ToastContainer } from "react-toastify";
import CreateSubCategoryHook from "../../logic/subCategories/createSubCategoryHook";

const AdminAddSubCat = () => {
  const {
    subName,
    onChangesubName,
    onChangeCatID,
    categories,
    handelSubmit,
    // isPress,
  } = CreateSubCategoryHook();
  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add subCategory
      </h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[50%] pl-2 border border-gray-300"
          placeholder="subcategory name"
          value={subName}
          onChange={onChangesubName}
        />
        <select
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[50%] pl-2 border border-gray-300 text-gray-500"
          onChange={onChangeCatID}
        >
          <option value="0" className="capitalize">
            select category
          </option>
          {categories?.length >= 1
            ? categories.map((cat) => {
                return (
                  <option value={cat._id} key={cat._id} className="capitalize">
                    {cat.name}
                  </option>
                );
              })
            : ""}
        </select>
        <button
          type="submit"
          className="capitalize bg-slate-950 text-white py-2 px-6 rounded-md w-fit"
          onClick={handelSubmit}
        >
          save edites
        </button>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminAddSubCat;
