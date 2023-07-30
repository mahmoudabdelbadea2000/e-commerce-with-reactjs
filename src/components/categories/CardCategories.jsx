import React from "react";

const CardCategories = ({ cat }) => {
  return (
    <div className="overflow-hidden col-span-2 md:col-span-1">
      <img
        src={cat.image}
        alt={cat.slug}
        className="transition-transform hover:scale-125"
      />
    </div>
  );
};

export default CardCategories;
