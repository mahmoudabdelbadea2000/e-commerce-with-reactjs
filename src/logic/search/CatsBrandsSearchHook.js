import { useState } from "react";

const CatsBrandsSearchHook = () => {
  const [globalChecked, setGlobalChecked] = useState({
    cats: [],
    brands: [],
  });

  const SelectCategory = (e) => {
    const value = e.target.value;
    if (value !== "0") {
      if (e.target.checked === true) {
        setGlobalChecked({
          ...globalChecked,
          cats: [...globalChecked.cats, value],
        });
      } else {
        const newArray = globalChecked.cats.filter((e) => e !== value);
        setGlobalChecked({
          ...globalChecked,
          cats: newArray,
        });
      }
    }
    let queryCat = globalChecked.cats
      .map((val) => `category[in][]=${val}`)
      .join("&");
    localStorage.setItem("catCheked", queryCat);
  };

  const SelectBrand = (e) => {
    const value = e.target.value;
    if (value !== "0") {
      if (e.target.checked === true) {
        setGlobalChecked({
          ...globalChecked,
          brands: [...globalChecked.brands, value],
        });
      } else {
        const newArray = globalChecked.brands.filter((e) => e !== value);
        setGlobalChecked({
          ...globalChecked,
          brands: newArray,
        });
      }
    }
    let queryBrand = globalChecked.brands
      .map((val) => `brand[in][]=${val}`)
      .join("&");
    localStorage.setItem("brandCheked", queryBrand);
  };

  return { SelectCategory, SelectBrand };
};

export default CatsBrandsSearchHook;
