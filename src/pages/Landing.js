import React from "react";
import LandingBanner from "../components/landing/LandingBanner";
import FrequentQues from "../components/landing/FrequentQues";

const Landing = () => {
  return (
    <>
      <LandingBanner />
      <div className="bg-black min-h-auto  text-white ">
        <div className="mx-auto w-full  border-b border-b-red-300 py-28">
          <div className="flex flex-col md:flex-row justify-between w-3/4 mx-auto">
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-6xl font-bold">Enjoy on your TV.</h1>
              <h3 className="pt-7 text-2xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="default-ltr-cache-7cljuy ejqbulh3 cz-color-16777215">
                <div className="default-ltr-cache-bjn8wh cz-color-16777215 relative">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    data-uia="nmhp-card-animation-asset-image"
                    className="default-ltr-cache-1d3w5wq cz-color-16777215 z-10 "
                  />
                  <div
                    data-uia="nmhp-card-animation-asset-motion"
                    className="default-ltr-cache-eshtlu cz-color-16777215 absolute top-[6rem] left-20 overflow-hidden"
                  >
                    <video
                      data-uia="nmhp-card-animation-asset-video"
                      autoplay={true}
                      playsInLine=""
                      muted=""
                      loop=""
                      className="cz-color-16777215"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        zIndex: "-10px",
                      }}
                    >
                      <source
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                        type="video/mp4"
                        className="cz-color-0"
                      ></source>
                    </video>
                    <div className="default-ltr-cache-0 cz-color-16777215"></div>
                    <div
                      data-uia="nmhp-card-animation-asset-custom"
                      aria-hidden="true"
                      className="default-ltr-cache-0 cz-color-16777215"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full border-b border-b-red-300">
          <div className="flex flex-col md:flex-row justify-between py-16 w-3/4 mx-auto">
            <div className="w-full md:w-1/2">
              <div className="">
                <div className="relative">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                    data-uia="nmhp-card-animation-asset-image"
                    className="default-ltr-cache-1d3w5wq"
                  />
                  <div
                    data-uia="nmhp-card-animation-asset-motion"
                    className="absolute bottom-10 flex  items-center justify-between left-40 p-2 px-10 bg-black border border-gray-600 rounded-lg "
                  >
                    <div className="mx-5">
                      <img
                        data-uia="nmhp-card-animation-asset-animation"
                        alt=""
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                        className="h-28"
                      />
                    </div>
                    <div className="default-ltr-cache-tcf860">
                      <div
                        id=""
                        className="default-ltr-cache-1265pqp"
                        data-uia=""
                      >
                        Stranger Things
                      </div>
                      <div
                        id=""
                        className="default-ltr-cache-dlzs1w"
                        data-uia=""
                      >
                        Downloading...
                      </div>
                    </div>
                    <div
                      data-uia="nmhp-card-animation-asset-custom"
                      aria-hidden="true"
                      className="default-ltr-cache-93n3kh"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-6xl font-bold">
                Download your shows to watch offline
              </h1>
              <h3 className="pt-7 text-2xl">
                Save your favorites easily and always have something to watch.
              </h3>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full  border-b border-b-red-300 py-28">
          <div className="flex flex-col md:flex-row justify-between w-3/5 mx-auto">
            <div className="w-full md:w-1/2  flex justify-center  flex-col flex-wrap">
              <h1 className="text-6xl font-bold">Watch everywhere</h1>
              <h3 className="pt-7 text-2xl">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <div className="default-ltr-cache-7cljuy ejqbulh3 cz-color-16777215">
                <div className="default-ltr-cache-bjn8wh cz-color-16777215 relative">
                  <div
                    data-uia="nmhp-card-animation-asset-motion"
                    className="default-ltr-cache-eshtlu cz-color-16777215 absolute top-[6rem] left-20 overflow-hidden"
                  >
                    <div
                      data-uia="nmhp-card-animation-asset-custom"
                      aria-hidden="true"
                      className="default-ltr-cache-0 cz-color-16777215"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full border-b border-b-red-300">
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
              <h1 className="text-6xl font-bold">
                Create profiles for kids
              </h1>
              <h3 className="pt-7 text-2xl">
                Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </h3>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions  */}
        <div className="mx-auto w-full border-b border-b-red-300">
          <FrequentQues />
        </div>

      </div>
    </>
  );
};

export default Landing;
