
import React from "react";
const BASE_URL = "https://image.tmdb.org/t/p/original";

const BannerMain = ({ movie }) => {

  // Get the movie's title, release date, vote average, and runtime.
  const title = movie?.title;
  const releaseDate = movie?.release_date;
  const voteAverage = movie?.vote_average;
  const runtime = movie?.runtime;

  // Get the first 350 characters of the movie's overview.

  const getTrancate = (overview) => {
    const num = 20;
    return (overview?.length < num) ? overview.slice(0, num) + "..." : overview;
  };


  return (
    <div className="absolute h-[80vh] w-full top-0">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 rounded-md"></div>
      <div className="w-full h-full bg-gradient-to-r from-black/80">
        <img
          src={`${BASE_URL}${movie?.backdrop_path}`}
          alt=""
          className="w-full h-full object-cover bg-gradient-to-t from-black/80"
        />
      </div>
      <div className="md:w-1/2 w-full absolute bottom-24 md:left-20 left-10">
        <div className="pr-24">
          <h1 className="md:text-6xl text-3xl font-bold my-3">{title}</h1>
          <h3 className="text-lg bg-black/10 inline-block py-2 rounded">
            {releaseDate} • {voteAverage} • {runtime} min
          </h3>
          <div className="py-3 px-0 md:text-2xl">
            <span>{getTrancate(movie?.overview)}</span>
          </div>
        </div>
               <div className="flex my-2">
              <button className="py-3 px-5 border-none rounded flex items-center justify-center text-xl font-medium cursor-pointer bg-white text-black hover:bg-primary hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
                <span className=" text-black ml-3 hover:bg-primary hover:text-white">Play</span>
              </button>
              <button className="bg-transparent border  border-gray-300 px-4 ml-3 rounded flex text-white  items-center ">
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

                <span className="ml-3">Watch Later</span>
              </button>
            </div>
      </div>
    </div>
  );
};

export default BannerMain;
