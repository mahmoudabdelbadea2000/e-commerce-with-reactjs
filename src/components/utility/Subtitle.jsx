import React from "react";
import { Link } from "react-router-dom";

const Subtitle = ({ title, route, text }) => {
  return (
    <div>
      <div className="container px-4">
        <div className="flex justify-between items-center">
          <p
            className="uppercase font-bold relative 
                    after:absolute after:bottom-0 after:left-0
                    after:w-10 after:h-[2px] after:bg-purple-700 after:rounded-md"
          >
            {title}
          </p>
          {text ? (
            <Link to={`${route}`}>
              <p
                className="px-5 py-1 bg-slate-950 text-white transition
                          border-2 border-slate-950 hover:bg-transparent 
                          hover:text-black rounded-md"
              >
                {text !== "" ? text : ""}
              </p>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Subtitle;
