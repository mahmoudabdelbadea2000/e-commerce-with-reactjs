import React from "react";
import Subtitle from "../utility/Subtitle";
import ProductCard from "./ProductCard";

const CardProductsContainer = ({ title, text, route }) => {
  return (
    <div className="container mb-4 px-4">
      <Subtitle title={title} text={text} route={route} />
      <div
        className="grid grid-cols-4 justify-between 
        items-center gap-3 mt-4"
      >
        <ProductCard colsapn="" />
        <ProductCard colsapn="" />
        <ProductCard colsapn="" />
        <ProductCard colsapn="" />
      </div>
    </div>
  );
};

export default CardProductsContainer;
