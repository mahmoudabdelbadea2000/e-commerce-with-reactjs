import Multiselect from "multiselect-react-dropdown";
import React from "react";

const AdminAddProduct = () => {
  const options = [
    { name: "Option 1", id: 1 },
    { name: "Option 2", id: 2 },
    { name: "Option 3", id: 3 },
    { name: "Option 4", id: 4 },
  ];
  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedItem);
    console.log(selectedList);
  };
  const onRemove = (selectedList, removedItem) => {
    console.log(removedItem);
    console.log(selectedList);
  };

  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add new product
      </h2>
      <div>
        <p className="capitalize text-gray-500">image of product</p>
        <i className="fa-regular fa-images text-8xl cursor-pointer text-gray-300"></i>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="product name"
          />
          <textarea
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="discription of product"
            cols="30"
            rows="4"
          ></textarea>
          <input
            type="number"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="price before discount"
          />
          <input
            type="number"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="price after discount"
          />
          <select
            placeholder="categories"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300 text-gray-400"
          >
            <option value="0" className="capitalize">
              cat one
            </option>
            <option value="1" className="capitalize">
              cat two
            </option>
            <option value="2" className="capitalize">
              cat three
            </option>
          </select>
          <select
            placeholder="brands"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300 text-gray-400"
          >
            <option value="0" className="capitalize">
              brand one
            </option>
            <option value="1" className="capitalize">
              brand two
            </option>
            <option value="2" className="capitalize">
              brand three
            </option>
          </select>
          <Multiselect
            className="rounded-md w-full md:w-[70%]"
            placeholder="sub category"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
          />
          <div className="my-2">
            <p className="text-gray-400">availaple colores</p>
            <div className="flex justify-between items-center w-fit gap-1 mt-1">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              <div className="w-6 h-6 bg-purple-700 rounded-full"></div>
              <div className="w-6 h-6 bg-sky-500 rounded-full"></div>
              <i className="fa-solid fa-plus text-gray-400 border border-gray-400 rounded-full p-1 cursor-pointer"></i>
            </div>
          </div>
          <button
            type="submit"
            className="capitalize bg-slate-950 text-white py-3 px-10 rounded-md w-fit"
          >
            save edites
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminAddProduct;
