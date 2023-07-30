import React from "react";
import { useParams } from "react-router-dom";
import GetOneProductHook from "../../logic/products/getOneProductHook";

const ProductDetailes = () => {
  const { id } = useParams();
  const { oneProduct } = GetOneProductHook(id);
  console.log(oneProduct?.data);
  return (
    <section className="flex justify-center items-center gap-4 flex-col sm:flex-row bg-white p-5 rounded-md">
      <div className="flex justify-center items-center basis-1/3">
        <img src={oneProduct?.data.imageCover} alt="prod__image" />
      </div>
      <div className="basis-2/3">
        <p className="font-bold">{oneProduct?.data.title}</p>
        <p className="font-bold my-2 text-purple-900">
          ${oneProduct?.data.price}
        </p>
        <p className="text-sm">{oneProduct?.data.description}</p>
        <div className="flex gap-2 mt-5">
          <input
            type="number"
            className="border w-14 text-center focus:outline-none bg-gray-50"
          />
          <button type="submit">
            <i className="fa-solid fa-cart-plus text-white bg-purple-800 py-3 px-6 text-sm">
              add to cart
            </i>
          </button>
        </div>
        <hr className="my-3" />
        <p className="font-bold">
          category:{" "}
          <span className="font-normal capitalize">
            {oneProduct?.data.category}
          </span>
        </p>
        <p className="font-bold my-1">
          brand: <span className="font-normal capitalize">apple</span>
        </p>
        <div className="flex items-center gap-2">
          <span className="font-bold">color:</span>
          <div className="flex justify-between items-centery w-fit gap-1 mt-1">
            {oneProduct?.data.availableColors &&
              oneProduct?.data.availableColors.map((color) => {
                return <div className="w-6 h-6 bg-sky-500 rounded-full"></div>;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailes;
