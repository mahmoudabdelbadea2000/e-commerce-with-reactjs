import React from "react";
import ReactStars from "react-rating-stars-component";

const RatePost = () => {
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star text-[#ffc107]" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 my-3">
        <p>mahmoud kamal</p>
        <ReactStars {...setting} />
      </div>
      <div>
        <textarea
          placeholder="write comment"
          className="border border-gray-300 bg-gray-100 pl-3 pt-1 w-full rounded-md focus:outline-none h-20"
        ></textarea>
        <button
          type="submit"
          className="bg-slate-950 text-white py-3 px-4 capitalize rounded-md"
        >
          add comment
        </button>
      </div>
    </div>
  );
};

export default RatePost;
