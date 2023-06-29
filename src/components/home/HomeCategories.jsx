import React from "react";
import CardCategoriesContainer from "../categories/CardCategoriesContainer";

const HomeCategories = () => {
  return (
    <section className="my-4">
      <CardCategoriesContainer
        title="categories"
        text="more"
        route="/all-categories"
      />
    </section>
  );
};

export default HomeCategories;
