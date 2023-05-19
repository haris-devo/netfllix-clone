import React from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <>
      <div className=" mx-auto w-full md:px-72 h-20 flex items-center justify-center mt-3">
        <div className="w-full flex items-center justify-between">
          <div className="w-1/2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              className="w-40 "
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <Link to="/login
            ">
              <button className="bg-red-600 text-white w-20 md:w-auto py-2 md:px-5 md:py-2 rounded-md ml-2 text-md ">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingNav;
