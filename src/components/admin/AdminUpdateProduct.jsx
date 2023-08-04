import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { CompactPicker } from "react-color";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UpdateProductHook from "../../logic/products/updateProductHook";
import Spinner from "../utility/Spinner";

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const {
    productImg,
    productCatID,
    productBrandID,
    productName,
    productDescription,
    productCats,
    productBrands,
    priceBefore,
    priceAfter,
    productColors,
    Qty,
    showColors,
    onChangeItems,
    handelSubmit,
    isPress,
    options,
    onSelect,
    onRemove,
    handelChangeComplete,
    handelRemoveColor,
  } = UpdateProductHook(id);

  return (
    <section className="col-span-12 md:col-span-8 lg:col-span-9 rounded-md">
      <h2 className="font-bold text-2xl capitalize text-gray-800 pt-2 pb-5">
        add new product
      </h2>
      <form className="flex flex-col gap-2">
        <p className="capitalize text-gray-500">image of product</p>
        <div className="w-fit">
          <label htmlFor="upload-photo">
            <img
              src={productImg}
              alt="select product"
              className="cursor-pointer w-32"
            />
          </label>
          <input
            type="file"
            onChange={onChangeItems.onChangeProductImg}
            className="hidden"
            name="photo"
            id="upload-photo"
          />
        </div>
        <input
          type="text"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
          placeholder="product name"
          value={productName}
          onChange={onChangeItems.onChangeProductName}
        />
        <textarea
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
          placeholder="discription of product"
          cols="30"
          rows="4"
          value={productDescription}
          onChange={onChangeItems.onChangeProductDescription}
        ></textarea>
        <input
          type="number"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
          placeholder="price before discount"
          value={priceBefore}
          onChange={onChangeItems.onChangePriceBefore}
        />
        <input
          type="number"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
          placeholder="price after discount"
          value={priceAfter}
          onChange={onChangeItems.onChangePriceAfter}
        />
        <input
          type="number"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300"
          placeholder="Qauntity"
          value={Qty}
          onChange={onChangeItems.onChangeQTY}
        />
        <select
          placeholder="categories"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300 text-gray-400"
          value={productCatID}
          onChange={onChangeItems.onChangeProductCatID}
        >
          <option value="0" className="capitalize">
            select category
          </option>
          {productCats.length >= 1
            ? productCats.map((prodCat) => {
                return (
                  <option
                    value={prodCat._id}
                    key={prodCat._id}
                    className="capitalize"
                  >
                    {prodCat.name}
                  </option>
                );
              })
            : ""}
        </select>
        <Multiselect
          className="rounded-md w-full md:w-[70%]"
          placeholder="sub category"
          options={options}
          onSelect={onSelect}
          onRemove={onRemove}
          selectedValues={[]}
          displayValue="name"
        />
        <select
          placeholder="brands"
          className="focus:outline-none bg-transparent py-3 rounded-md w-full md:w-[70%] pl-2 border border-gray-300 text-gray-400"
          value={productBrandID}
          onChange={onChangeItems.onChangeProductBrandID}
        >
          <option value="0" className="capitalize">
            select Brand
          </option>
          {productBrands.length >= 1
            ? productBrands.map((prodBrand) => {
                return (
                  <option
                    value={prodBrand._id}
                    key={prodBrand._id}
                    className="capitalize"
                  >
                    {prodBrand.name}
                  </option>
                );
              })
            : ""}
        </select>
        <div className="my-2">
          <p className="text-gray-400">availaple colores</p>
          <div className="flex justify-between items-center w-fit gap-1 mt-1">
            {productColors.length >= 1
              ? productColors.map((color, idx) => {
                  return (
                    <div
                      key={idx}
                      style={{ backgroundColor: color }}
                      className={`w-8 h-8 rounded-full transition-all hover:border hover:border-black cursor-pointer`}
                      onClick={() => handelRemoveColor(color)}
                    ></div>
                  );
                })
              : ""}
            <i
              onClick={onChangeItems.onChangeShowColor}
              className="fa-solid w-8 h-8 flex justify-center items-center fa-plus text-gray-400 border border-gray-400 rounded-full p-1 cursor-pointer"
            ></i>
            {showColors && (
              <CompactPicker onChangeComplete={handelChangeComplete} />
            )}
          </div>
        </div>
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
            className="capitalize bg-slate-950 text-white py-3 px-10 rounded-md w-fit disabled:bg-slate-800"
          >
            save edites
          </button>
        )}
      </form>
      <ToastContainer />
    </section>
  );
};

export default AdminUpdateProduct;
