import React from "react";
import LandingNav from "./LandingNav";

const LandingBanner = () => {
  return (
    <>
      <div className=" h-hero  bg-hero relative bg-blend-overlay hero_banner ">
        <div className="h-full absolute  ">

        </div>
        <div className="w-full h-full  z-20">
          <LandingNav />
          <div className="w-full h-full flex  justify-center items-center ">
            <div className="text-center text-white m">
              <p className="mt-1 text-4xl font-extrabold  sm:text-5xl sm:tracking-tight lg:text-6xl">
                Unlimited movies, TV shows, and more
              </p>
              <p className="max-w-xl mt-5 mx-auto text-2xl font-normal ">
                Watch anywhere. Cancel anytime
              </p>
              <p className="max-w-full mt-5 text-center text-xl leading-5 ">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="md:max-w-lg max-w-sm my-10 flex mx-auto">
                <input
                  type="text"
                  autocomplete="email"
                  minLength="5"
                  maxLength="50"
                  id="fcb93acc599c6"
                  name="email"
                  data-uia="field-email"
                  value=""
                  className="w-2/3 p-4 bg-black border border-grey-600 rounded opacity-50"
                  placeholder="Email Address"
                />
                <button className="bg-red-600 text-white px-5 py-2 rounded-md ml-2 text-xl">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingBanner;
