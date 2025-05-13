import React from "react";
import Button from "./Button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex gap-4 justify-center mt-5">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded bg-black text-white hover:bg-zinc-800 disabled:opacity-50 cursor-pointer"
      >
        Prev
      </Button>

      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        return (
          <div
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-[50px] rounded font-bold text-center p-2 cursor-pointer ${
              currentPage === pageNum
                ? "bg-gray-500 text-white"
                : "bg-black text-white hover:bg-zinc-700"
            }`}
          >
            {pageNum}
          </div>
        );
      })}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded bg-black text-white hover:bg-zinc-800 disabled:opacity-50 cursor-pointer"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
