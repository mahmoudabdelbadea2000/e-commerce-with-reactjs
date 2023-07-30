import React from "react";
import GetAllCategoriesHook from "../../logic/categories/getAllCategoriesHook";
import Spinner from "../utility/Spinner";
import Subtitle from "../utility/Subtitle";
import CardCategories from "./CardCategories";

const CardCategoriesContainer = ({ title, text, route }) => {
  const { cats, isLoading } = GetAllCategoriesHook();
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
            {cats?.payload?.data && cats?.payload?.data.length >= 1
              ? cats?.payload?.data.slice(0, 4).map((cat) => {
                  return <CardCategories cat={cat} key={cat._id} />;
                })
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCategoriesContainer;
