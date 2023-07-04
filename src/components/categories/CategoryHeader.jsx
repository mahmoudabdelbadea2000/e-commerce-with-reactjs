import React from "react";

const CategoryHeader = () => {
  return (
    <section className="bg-white py-2">
      <div className="container px-4">
        <div className="flex items-center gap-5 text-gray-400 ">
          <p className="capitalize transition-colors hover:text-gray-900 cursor-pointer">
            all
          </p>
          <p className="capitalize transition-colors hover:text-gray-900 cursor-pointer">
            electronices
          </p>
          <p className="capitalize transition-colors hover:text-gray-900 cursor-pointer">
            clothes
          </p>
          <p className="capitalize transition-colors hover:text-gray-900 cursor-pointer">
            offers
          </p>
          <p className="capitalize transition-colors hover:text-gray-900 cursor-pointer">
            more..
          </p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHeader;
