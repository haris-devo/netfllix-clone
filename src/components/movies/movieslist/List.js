import React, { useState, useRef, useEffect } from "react";
import ListItem from "./ListItem";

const List = (props) => {
  const { fetchURL, title } = props;

  console.log(title);

  const [movies, setMovies] = useState([]);

  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef(null);

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber >= 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slideNumber < 8) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(fetchURL);
      const data = await request.json();
      setMovies(data.results);
    }
    fetchData();
  }, [fetchURL] );


  return (
    <>
      <div className="w-screen mt-5">
        <span className="text-white text-2xl font-medium ml-12">{title}</span>
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
              className="w-12 h-12 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer text-white absolute top-28 left-0 z-50 m-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div
            className="ml-12 flex w-max transition duration-300 "
            ref={listRef}
          >
            {movies.map((item, index) => (
              <ListItem
                key={index}
                index={index}
                item={item}
                slideNumber={slideNumber}
              />
            ))}
          </div>
          <div
            className="svgRight"
            onClick={() => handleClick("right")}
            style={{ display: slideNumber === movies.length - 1 ? "none" : "" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 bg-black bg-opacity-50 rounded-full p-2 cursor-pointer text-white absolute right-8 top-28 z-50"
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
