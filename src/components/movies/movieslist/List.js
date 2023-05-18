import React, { useRef, useState } from "react";
import ListItem from "./ListItem";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slideNumber < 8) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <>
      <div className="w-screen mt-5">
        <span className="text-white text-xl font-medium ml-12">Continue to watch</span>
        <div className="relative">
          <div
            className=""
            onClick={() => handleClick("left")}
            style={{ display: !slideNumber ? "none" : "" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer text-white absolute top-1/4 left-0 z-50 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div className="ml-12 flex w-max transition duration-300 " ref={listRef}>
            {Array(7).fill(0).map((_, i) => (
              <ListItem key={i} index={i} className="cursor-pointer"/>
            ))}
          </div>
          <div
            className="svgRight"
            onClick={() => handleClick("right")}
            style={{ display: slideNumber === 4 ? "none" : "" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer text-white absolute right-0 top-1/4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 19.5L21 12m0 0l-7.5-7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
