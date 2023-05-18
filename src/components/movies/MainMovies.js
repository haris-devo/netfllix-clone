import React, { useEffect, useState } from "react";
import Head from "./Head";
import BannerMain from "./BannerMain";
import requests from "../../utils/Requests";
import List from "./movieslist/List";

const MainMovies = (props) => {
  const { email } = props;
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          netflixOriginals,
          trendingNow,
          topRated,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries,
        ] = await Promise.all([
          fetch(requests.fetchNetflixOriginals),
          fetch(requests.fetchTrending),
          fetch(requests.fetchTopRated),
          fetch(requests.fetchActionMovies),
          fetch(requests.fetchComedyMovies),
          fetch(requests.fetchHorrorMovies),
          fetch(requests.fetchRomanceMovies),
          fetch(requests.fetchDocumentaries),
        ]);

        setValue([
          netflixOriginals.results,
          trendingNow.results,
          topRated.results,
          actionMovies.results,
          comedyMovies.results,
          horrorMovies.results,
          romanceMovies.results,
          documentaries.results,
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(value);

  return (
    <>
      <div className="h-[90vh]   py-2 text-white relative bg-gradient-to-b from-gray-900/10 to-[#010511] lg:[140vh]">
        {/* Navbar Header  */}
        <Head email={email} />
        {/* Navbar Header  */}

        {/* Start of main  */}
        <main className="relative">
          {/* start of main banner  */}
          <BannerMain />
          {/* End of Banner */}

          
        </main>

        {/* End of Main */}

        {/* Modal  */}
      </div>

      <div className=" overflow-hidden">
        <List />
        <List />
        <List />
        <List />
      </div>
    </>
  );
};

export default MainMovies;
