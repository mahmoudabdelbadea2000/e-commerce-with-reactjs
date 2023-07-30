import React from "react";
import Spinner from "../../components/utility/Spinner.jsx";
import GetAllBrandsHook from "../../logic/brands/getAllBrandsHook";
import Subtitle from "../utility/Subtitle";

const HomeBrands = () => {
  const { brands, isLoading } = GetAllBrandsHook();
  return (
    <section className="my-4">
      <div className="container px-4">
        {isLoading === true ? (
          <Spinner />
        ) : (
          <div>
            <Subtitle title="Brands" text="more" route="/all-brands" />
            <div className="grid grid-cols-4 gap-4 justify-items-center items-center">
              {brands?.payload?.data && brands?.payload?.data.length >= 1
                ? brands?.payload?.data.slice(0, 4).map((brand) => {
                    return (
                      <img
                        src={brand.image}
                        className="col-span-2 md:col-span-1"
                        alt={brand.slug}
                        key={brand._id}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeBrands;
