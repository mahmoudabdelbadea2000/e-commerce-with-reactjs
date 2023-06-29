import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-7">
      <div className="container px-4 divide-y-[1px] divide-slate-400">
        <div className="grid grid-cols-12 gap-7 mb-4 text-center md:justify-items-center md:text-left">
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="font-bold capitalize text-2xl mb-4">about</h3>
            <p className="text-sm w-9/12 md:w-full mx-auto md:mx-0">
              Voluptatem accusantium doloremque laudantium, totam rem aperiam.
              eaque ipsa quae ab illo inventore veritatiset quasi architecto
              beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <h3 className="font-bold capitalize text-2xl mb-4">contact</h3>
            <div className="text-[12px] flex flex-col gap-2">
              <p>
                <i className="fa-solid fa-location-arrow mr-1"></i> egypt, arish
              </p>
              <p>
                <i className="fa-solid fa-phone mr-1"></i> +201019134823
              </p>
              <p>
                <i className="fa-solid fa-envelope mr-1"></i>
                mahmoud2000@gmail.com
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <h3 className="font-bold capitalize text-2xl mb-4">categories</h3>
            <ul className="text-sm flex flex-col gap-1">
              <li>headphones</li>
              <li>smart watches</li>
              <li>bluetooth speakers</li>
              <li>wireless airbuds</li>
              <li>projectors</li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <h3 className="font-bold capitalize text-2xl mb-4">pages</h3>
            <ul className="text-sm flex flex-col gap-1">
              <li>home</li>
              <li>about</li>
              <li>privacy policy</li>
              <li>returns</li>
              <li>terms &amp; conditions</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center flex-col md:flex-row text-center pt-4">
          <p className="text-sm">
            e-commerce 2023 created by mahmoud abdelbadea
          </p>
          <div className="flex  gap-4 justify-center ml-0 mt-3 md:ml-4 md:mt-0">
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
