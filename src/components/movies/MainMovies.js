import React, { useEffect, useState } from "react";
import Head from "./Head";
import BannerMain from "./BannerMain";
import requests from "../../utils/Requests";

const MainMovies = (props) => {
  const { email } = props;
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let [
          netflixOriginals,
          trendingNow,
          topRated,
          actionMovies,
          comedyMovies,
          horrorMovies,
          romanceMovies,
          documentaries,
        ] = await Promise.all([
          fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
          fetch(requests.fetchTrending).then((res) => res.json()),
          fetch(requests.fetchTopRated).then((res) => res.json()),
          fetch(requests.fetchActionMovies).then((res) => res.json()),
          fetch(requests.fetchComedyMovies).then((res) => res.json()),
          fetch(requests.fetchHorrorMovies).then((res) => res.json()),
          fetch(requests.fetchRomanceMovies).then((res) => res.json()),
          fetch(requests.fetchDocumentaries).then((res) => res.json()),
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
  }, [email]);

  console.log(value)

  return (
    <>
      <div className="h-screen   py-2 text-white relative bg-gradient-to-b from-gray-900/10 to-[#010511] lg:[140vh]">
        {/* Navbar Header  */}
        <Head email={email} />
        {/* Navbar Header  */}

        {/* Start of main  */}
        <main>
          {/* start of main banner  */}
          <BannerMain />
          {/* End of Banner */}

          {/* Display the movies */}
         
        </main>

        {/* End of Main */}

        {/* Modal  */}
      </div>

      <div className="">hello</div>
    </>
  );
};

export default MainMovies;
