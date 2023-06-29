import React from "react";
import slider from "../../images/banner-img.png";

const HomeSilder = () => {
  return (
    <section
      className="
        h-2/3 bg-gradient-to-r 
        from-[#822ddd] from-10% 
        via-[#591ed5] via-30% 
        to-[#4118d4] to-90%
        py-5"
    >
      <div className="container px-8 flex items-center flex-col-reverse md:flex-row">
        <div className="text-white w-full md:w-2/3 text-center">
          <h1 className="font-bold text-7xl sm:text-8xl md:text-9xl uppercase">
            sales
          </h1>
          <p className="w-full md:w-[70%] mx-auto my-4">
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
          </p>
          <button
            type="button"
            className="py-2 px-4 uppercase text-xs border border-white mr-4
                      transition hover:bg-white hover:text-black"
          >
            read more
          </button>
          <button
            type="button"
            className="py-2 px-4 uppercase text-xs
              border border-white bg-white text-black
              transition hover:bg-transparent hover:text-white"
          >
            shop now
          </button>
        </div>
        <div className="mb-4 md:mb-0 flex justify-center items-center">
          <img src={slider} className="w-[75%]" alt="slider_image" />
        </div>
      </div>
    </section>
  );
};

export default HomeSilder;
