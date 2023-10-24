import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { CompactPicker } from "react-color";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UpdateProductHook from "../../logic/products/updateProductHook";
import Spinner from "../utility/Spinner";

const AdminEditProduct = () => {
  const { id } = useParams();

  const {
    globalProductState,
    onChangeItems,
    allBrands,
    allCategories,
    handleUpdateProduct,
  } = UpdateProductHook(id);

  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        edit product - {globalProductState.prodName}
      </h2>
      <div>
        <p className="capitalize text-gray-500">image of product</p>
        <div className="w-fit mb-4">
          <label htmlFor="upload-photo">
            <img
              src={globalProductState.img}
              alt="select product"
              className="cursor-pointer w-32"
            />
          </label>
          <input
            type="file"
            onChange={onChangeItems.img}
            className="hidden"
            name="photo"
            id="upload-photo"
          />
        </div>
        <form className="flex flex-col gap-2">
          <input
            value={globalProductState.prodName}
            onChange={onChangeItems.prodName}
            type="text"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="product name"
          />
          <textarea
            value={globalProductState.description}
            onChange={onChangeItems.description}
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="discription of product"
            cols="30"
            rows="4"
          ></textarea>
          <input
            value={globalProductState.QTY}
            onChange={onChangeItems.QTY}
            type="number"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="quantity of product"
          />
          <input
            value={globalProductState.priceBefore}
            onChange={onChangeItems.priceBefore}
            type="number"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="price before discount"
          />
          <input
            value={globalProductState.priceAfter}
            onChange={onChangeItems.priceAfter}
            type="number"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
            placeholder="price after discount"
          />
          <select
            value={globalProductState.catID}
            onChange={onChangeItems.catID}
            placeholder="categories"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300 text-gray-400"
          >
            <option value="0" className="capitalize">
              select category
            </option>
            {allCategories?.data.length > 0
              ? allCategories?.data.map((cat) => {
                  return (
                    <option
                      value={cat._id}
                      className="capitalize"
                      key={cat._id}
                    >
                      {cat.name}
                    </option>
                  );
                })
              : null}
          </select>
          <select
            value={globalProductState.brandID}
            onChange={onChangeItems.brandID}
            placeholder="brands"
            className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300 text-gray-400"
          >
            <option value="0" className="capitalize">
              select brand
            </option>
            {allBrands?.data.length > 0
              ? allBrands?.data.map((brand) => {
                  return (
                    <option
                      value={brand._id}
                      className="capitalize"
                      key={brand._id}
                    >
                      {brand.name}
                    </option>
                  );
                })
              : null}
          </select>
          <Multiselect
            className="rounded-md w-full md:w-[70%]"
            placeholder="sub category"
            options={globalProductState.options}
            onSelect={onChangeItems.select}
            onRemove={onChangeItems.remove}
            displayValue="name"
          />
          <div className="my-2">
            <p className="text-gray-400">availaple colores</p>
            <div className="flex justify-between items-center w-fit gap-1 mt-1">
              {globalProductState.colors.length > 0
                ? globalProductState.colors.map((color, idx) => {
                    return (
                      <div
                        className="w-6 h-6 rounded-full transition-all hover:border-[1px] hover:border-black cursor-pointer"
                        style={{ backgroundColor: color }}
                        key={idx}
                        onClick={() => onChangeItems.removeColor(color)}
                      ></div>
                    );
                  })
                : null}

              <i
                className="fa-solid fa-plus text-gray-400 border border-gray-400 rounded-full p-1 cursor-pointer"
                onClick={onChangeItems.showColor}
              ></i>
              {globalProductState.showColor && (
                <CompactPicker onChangeComplete={onChangeItems.color} />
              )}
            </div>
          </div>
          {globalProductState.isPress ? (
            <Spinner />
          ) : (
            <button
              onClick={handleUpdateProduct}
              type="submit"
              className="capitalize bg-slate-950 text-white py-3 px-10 rounded-md w-fit"
            >
              save edites
            </button>
          )}
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default AdminEditProduct;
