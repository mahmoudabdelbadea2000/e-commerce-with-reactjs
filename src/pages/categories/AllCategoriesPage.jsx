import React from "react";
import CardCategories from "../../components/categories/CardCategories";
import Pagination from "../../components/utility/Pagination";

const AllCategoriesPage = () => {
  return (
    <section className="py-6">
      <div className="container px-4">
        <h2 className="font-bold text-3xl capitalize text-gray-800 py-2">
          {" "}
          all categories
        </h2>
        <div className="grid grid-cols-4 gap-2">
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
        </div>
        <div className="flex justify-center items-center pt-4">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesPage;
