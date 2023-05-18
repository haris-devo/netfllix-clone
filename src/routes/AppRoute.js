import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import MainMovies from "../components/movies/MainMovies";
import Landing from "../pages/Landing";


const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainMovies />} />
      </Routes>
    </>
  );
};

export default AppRoute;
