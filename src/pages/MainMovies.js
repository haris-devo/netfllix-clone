import React, { useEffect, useState } from "react";
import Head from "../components/movies/Head";
import BannerMain from "../components/movies/BannerMain";
import requests from "../utils/Requests";
import List from "../components/movies/movieslist/List";

const MainMovies = (props) => {
  const { email } = props;
  const [movies, setMovies] = useState([]);
  const [trending , setTrending] = useState([]);  

  const getRandomMovie = () => {
    const movieIndex = Math.floor(Math.random() * movies.length);
    return movies[movieIndex];
  };

  useEffect(() => {
    async function fetchDataOriginals() {
      const request = await fetch(requests.fetchNetflixOriginals);
      const data = await request.json();
      setMovies(data.results);
    }
    async function fetchDataTrending() {
      const request = await fetch(requests.fetchTrending);
      const data = await request.json();
      setTrending(data)
    }
    fetchDataOriginals();
    fetchDataTrending();
  }, []);


  return (
    <>
      <div className="h-[80vh] mb-10     text-white relative bg-gradient-to-b from-gray-900/10 to-[#010511] lg:[140vh]">
        {/* Navbar Header  */}
        <Head email={email} />
        {/* Navbar Header  */}

        {/* Start of main  */}
        <main className="relative ">
          <BannerMain movie={getRandomMovie()} />
        </main>

        {/* End of Main */}
      </div>

      <div className=" overflow-hidden">
        <List fetchURL={requests.fetchNetflixOriginals} title="Netflix Originals" />
        <List fetchURL={requests.fetchTrending} title={"Trending"} />
        <List fetchURL={requests.fetchTopRated} title={"Top Rated"} />
        <List fetchURL={requests.fetchActionMovies} title={"Action Movies"} />
        <List fetchURL={requests.fetchComedyMovies} title={"Comedy Movies"} />
        <List fetchURL={requests.fetchHorrorMovies} title={"Horror Movies"} />

      </div>
    </>
  );
};

export default MainMovies;
