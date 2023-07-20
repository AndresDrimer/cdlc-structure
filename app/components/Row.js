"use client"
import { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Thumbnail from "./Thumbnail";

const Row = ({ products, title }) => {
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-0.5 md:space-y-2 mx-2 ">
      <h2 className="w-full mt-6 cursor-pointer text-sm font-semibold text-gray-200 transition duration-200 hover:text-gray-500 md:text-2xl">
        {title}
      </h2>

      <div className="group relative md:ml-2">
        <BiChevronLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("left")}
        />

        <div
          className="flex items-center space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {products.map((product) => (product.imgFront &&
            <Thumbnail key={product._id} product={product} />
          ))}
        </div>

        <BiChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default Row;