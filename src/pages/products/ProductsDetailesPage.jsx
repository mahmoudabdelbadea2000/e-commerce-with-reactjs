import React from "react";
import { CardProductsContainer } from "../../components";
import ProductDetailes from "../../components/products/ProductDetailes";
import Rating from "../../components/rate/Rating";

const ProductsDetailesPage = () => {
  return (
    <section className="bg-gray-100">
      <div className="container px-4 flex justify-center flex-col pt-4">
        <ProductDetailes />
        <Rating />
        <div className="my-3 p-2 bg-white rounded-md">
          <CardProductsContainer title="puplar products" text="" />
        </div>
      </div>
    </section>
  );
};

export default ProductsDetailesPage;
