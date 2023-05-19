import React from "react";
import LandingBanner from "../components/landing/LandingBanner";
import FrequentQues from "../components/landing/FrequentQues";

const Landing = () => {
  return (
    <>
      <LandingBanner />
      <div className="bg-black min-h-auto  text-white landing ">
        <div className="mx-auto w-full  border-b-8 border-tertiary py-28">
          <div className="flex flex-col md:flex-row justify-between w-3/4 mx-auto">
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Enjoy on your TV.</h1>
              <h3 className="pt-7 md:text-2xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="default-ltr-cache-7cljuy ejqbulh3 cz-color-16777215">
                <div className="default-ltr-cache-bjn8wh cz-color-16777215 relative">
                  <img
                    alt=""
                    src="../assets/feature-1.png"
                    data-uia="nmhp-card-animation-asset-image"
                    className="default-ltr-cache-1d3w5wq cz-color-16777215 z-10 "
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full border-b-8 border-tertiary">
          <div className="flex flex-col md:flex-row justify-between py-16 w-3/4 mx-auto">
            <div className="w-full md:w-1/2">
              <div className="">
                <div className="relative">
                  <img
                    alt="...."
                    src="../assets/feature-2.png"
                    data-uia="nmhp-card-animation-asset-image"
                    className="default-ltr-cache-1d3w5wq"
                  />
                 
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold pt-3 md:pt-0">
                Download your shows to watch offline
              </h1>
              <h3 className="pt-7 text-2xl">
                Save your favorites easily and always have something to watch.
              </h3>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full  border-b-8 border-tertiary py-28">
          <div className="flex flex-col md:flex-row justify-between w-3/5 mx-auto">
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-3xl md:text-4xl lg:text-5xl  font-bold pt-3 md:pt-0">Watch everywhere</h1>
              <h3 className="md:pt-7 py-4 md:text-2xl">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="">
                <div className="relative">
                  <img
                    alt="...."
                    src="../assets/feature-3.png"
                    data-uia="nmhp-card-animation-asset-image"
                    className="default-ltr-cache-1d3w5wq"
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full border-b-8 border-tertiary">
          <div className="flex flex-col md:flex-row justify-between py-16 w-3/4 mx-auto">
            <div className="w-full md:w-1/2">
              <div className="">
                <div className="relative">
                  <img
                    alt=""
                    src="https://occ-0-5346-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABRFH-vdJSR0qkt72Fgqx45jsKfXao7Ds3YDvdyrPvl7kJHMxfm-9aKjlb4EY3ezBGDQdt0WhJOxOOeMcvDfgTw_cg-XWV8mt8AUk.png?r=b36"
                    data-uia="nmhp-card-animation-asset-image"
                    className="default-ltr-cache-1d3w5wq"
                  />
                  
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-2xl md:text-4xl lg:text-5xl  font-bold pt-3 md:pt-0">
                Create profiles for kids
              </h1>
              <h3 className="md:pt-7 md:text-2xl py-3 text-lg">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </h3>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions  */}
        <div className="mx-auto w-full border-b-8 border-tertiary">
          <FrequentQues />
        </div>

      </div>
    </>
  );
};

export default Landing;
