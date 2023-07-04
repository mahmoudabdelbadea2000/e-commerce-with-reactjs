import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const handlePageClick = () => {};
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<i className="fa-solid fa-angle-right"></i>}
      onPageChange={handlePageClick}
      marginPagesDisplayed={3}
      pageRangeDisplayed={2}
      pageCount={100}
      previousLabel={<i className="fa-solid fa-angle-left"></i>}
      containerClassName={"flex gap-2 items-center"}
      pageClassName={
        "flex justify-center items-center w-6 h-6 rounded-full text-[10px] font-semibold transition hover:bg-blue-500 hover:text-white"
      }
      //   pageLinkClassName={""}
      //   previousClassName={""}
      //   nextClassName={""}
      previousLinkClassName={
        "flex justify-center items-center w-6 h-6 rounded-full font-bold transition hover:bg-blue-500 hover:text-white"
      }
      nextLinkClassName={
        "flex justify-center items-center w-6 h-6 rounded-full font-bold transition hover:bg-blue-500 hover:text-white"
      }
      //   breakClassName={""}
      //   breakLinkClassName={""}
      activeClassName={
        "flex justify-center items-center w-6 h-6 rounded-full font-bold bg-blue-500 text-white"
      }
    />
  );
};

export default Pagination;
