import React from 'react';

const Pagination = ({ noOfBlogs, paginateHandler }) => {
  const noOfPaginateItems = Math.ceil(noOfBlogs / 6);

  return (
    <div className="flex items-center justify-center my-4">
      {Array.from({ length: noOfPaginateItems }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => paginateHandler(idx + 1)}
          className="w-10 h-10 mx-1 flex items-center justify-center bg-purple-500 text-white font-rubik rounded-md hover:bg-white hover:text-purple-500 border border-purple-500 transition-colors duration-300"
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
