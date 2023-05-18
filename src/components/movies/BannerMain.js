import React from "react";


const BannerMain = () => {
  return (
    <>
      <div className="absolute h-[90vh] w-full top-0">
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="Banner"
          className="h-full w-full object-cover"
        />
        <div className="w-1/2 absolute bottom-16 left-10">
          <div className="">
            <img
              src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
              alt=""
              className="w-06"
            />
            <span className="py-5 px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              adipisci repellendus eum quasi illo, velit numquam, maxime tempora
              sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic
              repudiandae temporibus eum earum?
            </span>
            <div className="flex my-2">
              <button className="py-3 px-5 border-none rounded-md flex items-center justify-center text-xl font-medium cursor-pointer bg-white text-black">
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
                <span className="bg-white text-black ml-3">
                  
                  Play
                </span>
              </button>
              <button className="bg-gray-300 px-4 ml-3 rounded-md flex text-black items-center ">
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

                <span className="ml-3">Info</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BannerMain;
