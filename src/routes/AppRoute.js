import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import MainMovies from "../pages/MainMovies";
import Landing from "../pages/Landing";


const AppRoute = () => {

  // get value from localStorage ]
  const email = localStorage.getItem("email");


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        {/* {
          email =="adil" ? <Route path="/main" element={<MainMovies email={email} />} /> : <Route path="/main" element={<Login />} />
        } */}
        <Route path="/main" element={<MainMovies email={email} />} />
      </Routes>
    </>
  );
};

export default AppRoute;
