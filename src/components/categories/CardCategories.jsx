import React from "react";
import catOne from "../../images/cat-1.jpg";

const CardCategories = () => {
  return (
    <div className="overflow-hidden col-span-2 md:col-span-1">
      <img
        src={catOne}
        alt="cat_image"
        className="transition-transform hover:scale-125"
      />
    </div>
  );
};

export default CardCategories;
