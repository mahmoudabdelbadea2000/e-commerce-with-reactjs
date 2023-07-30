import React from "react";
import Subtitle from "../utility/Subtitle";
import ProductCard from "./ProductCard";
import GetAllProductsHook from "../../logic/products/getAllProductsHook";
import Spinner from "../utility/Spinner";

const CardProductsContainer = ({ title, text, route }) => {
  const { allProducts, isLoading } = GetAllProductsHook();
  return (
    <div className="container mb-4 px-4">
      {isLoading === true ? (
        <Spinner />
      ) : (
        <div>
          <Subtitle title={title} text={text} route={route} />
          <div
            className="grid grid-cols-4 justify-between 
        items-center gap-3 mt-4"
          >
            {allProducts?.payload?.data &&
            allProducts?.payload?.data.length >= 1
              ? allProducts?.payload?.data.slice(0, 4).map((product) => {
                  return (
                    <ProductCard
                      colsapn=""
                      product={product}
                      key={product._id}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProductsContainer;
