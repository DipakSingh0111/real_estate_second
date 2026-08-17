import React from "react";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <div className="mt-12 flex justify-center items-center gap-3">
      {Array.from({ length: pageCount }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onPageChange(index + 1)}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 ${
            index === currentPage - 1
              ? "bg-[#2A39CE] text-white shadow-md hover:bg-[#202b9e]"
              : "bg-white text-slate-600 border border-slate-200 hover:border-[#2A39CE] hover:text-[#2A39CE] hover:bg-slate-50 shadow-sm"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
