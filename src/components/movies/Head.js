import React, { useEffect, useState } from "react";

const Head = (props) => {

  const [isScroll, setIsScroll] = useState(false);

  const {email} = props;

  useEffect(()=>{
     let handleScroll=() => {
      if (window.scrollY > 10) {
        setIsScroll(true);
        console.log("Scroll Happend")
      } else {
        setIsScroll(false);
      }
      
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  },[])


  return (
    <>
      <header className={`w-full lg:py-3 lg:px-10 ${isScroll  ? "bg-black" : "bg-transparent"} `}>
        <div className="flex items-center justify-between w-full  space-x-2 md:space-x-10">
          <div className="flex items-center ">
            <div className="logo mr-10 ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                className="w-36 object-contain  m-5"
              />
            </div>
            <div className="user ">
              <ul className="hidden space-x-4 md:space-x-10 md:flex ">
                <li className="header-link">Home</li>
                <li className="header-link">Tv Shows</li>
                <li className="header-link">Movies</li>
                <li className="header-link">New & Popular</li>
                <li className="header-link">My list</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center pr-10">
            <div className="flex space-x-6 pr-6 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 hidden md:flex "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <p className="hidden md:flex">Kids</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 hidden md:flex"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div className="account flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                alt="Account"
                className="w-8 h-8 rounded mx-4"
              />
              <h1 className="bg-white text-black font-bold py-2 px-4 rounded ">
                Welcome {email? email : "User"}
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Head;
