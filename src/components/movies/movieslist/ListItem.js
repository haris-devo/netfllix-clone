import movieTrailer from "movie-trailer";
import React, { useState } from "react";
import Youtube from "react-youtube"
const BASE_URL = "https://image.tmdb.org/t/p/original";


const ListItem = ({ item, index, slideNumber }) => {
  const itemNumber = slideNumber;


  const [trailerURL, setTrailerURL] = useState([]);

  const handleClick = (item) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(item?.title || item?.name || item?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


  

  return (
    <>
      <div className="flex flex-col items-center mr-5 my-6">
        <div className="relative w-64 h-72 card-here">
          <img
            src={`${BASE_URL}${item?.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 rounded-md"></div>
          <div className="absolute bottom-1 left-0 w-full card-hover opacity-0 flex-col  text-white justify-center px-3 ">
            <h1 className="text-md font-bold text-center">{item?.title}</h1>
            <div className="flex my-2 justify-center">
              <button
                className="py-3 px-5 border-none rounded-full flex items-center justify-center text-sm font-medium cursor-pointer bg-white text-black hover:bg-primary"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </button>
              <button
                className="bg-gray-300 px-4 ml-3 rounded-full flex text-black items-center"
                onClick={() => {
                  console.log("More info", itemNumber);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItem;
