import React from "react";
import Head from "./Head";
import BannerMain from "./BannerMain";


const MainMovies = (props) => {
  const { email } = props;
  return (
    <>
      <div className="h-screen   py-2 text-white relative bg-gradient-to-b from-gray-900/10 to-[#010511] lg:[140vh]">
        {/* Navbar Header  */}
            <Head email={email} />
        {/* Navbar Header  */}
          
        {/* Start of main  */}  
        <main >
          {/* start of main banner  */}
            <BannerMain />
          {/* End of Banner  */}


          <section>
            hello world
          </section>
        </main>
        


        {/* End of Main */}

        {/* Modal  */}

      </div>

      <div className="">
        hello
      </div>
    </>
  );
};

export default MainMovies;
