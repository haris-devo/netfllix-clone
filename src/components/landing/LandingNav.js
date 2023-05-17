import React from "react";

const LandingNav = () => {
  return (
    <>
      <div className=" mx-auto w-full px-72 h-20 flex items-center justify-center mt-3">
        <div className="w-full flex items-center justify-between">
          <div className="w-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              className="w-52 "
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <button className="bg-red-600 text-white px-5 py-2 rounded-md ml-2 text-xl">
              Sign In
            </button>
          </div>
        </div>
  
      </div>
    </>
  );
};

export default LandingNav;
