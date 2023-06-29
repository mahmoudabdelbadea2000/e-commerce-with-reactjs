import React from "react";
import {
  CardProductsContainer,
  HomeBrands,
  HomeCategories,
  HomeDiscount,
  HomeSilder,
  NewsLetter,
} from "../../components";

const HomePage = () => {
  return (
    <>
      <HomeSilder />
      <HomeCategories />
      <CardProductsContainer title="popular Products" text="more" route="/" />
      <HomeDiscount />
      <CardProductsContainer title="popular wires" text="more" route="/" />
      <HomeBrands />
      <NewsLetter />
    </>
  );
};

export default HomePage;
