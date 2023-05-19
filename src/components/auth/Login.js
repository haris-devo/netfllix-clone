import React, { useState } from "react";
import MainMovies from "../../pages/MainMovies";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [showMain, setShowMain] = useState(false);

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userLogin.email === "adil" && userLogin.password === "123") {
      setShowMain(true);

      // set value in local storage 

      localStorage.setItem("email", userLogin.email);
      

    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {showMain ? (
        <MainMovies email={userLogin.email} />
      ) : (
        <>
          {/* start of login Component  */}
          <div className="w-full h-screen bg-hero flex  justify-center py-8 overflow-hidden hero_banner">
            <div className="w-full">
              <div className="w-full flex items-center justify-between">
                <div className="w-1/2 mx-12">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                    className="w-40"
                  />
                </div>
              </div>
              <div className="w-full flex items-center  justify-center h-full">
                <div className="flex flex-col items-center justify-center">
                  {/* Sign Up Form  */}
                  
                  <div className="min-w-[21rem] w-96 h-full mb-40  bg-black bg-opacity-40  flex flex-col  py-12 px-10  text-white">
                    <h1 className="text-4xl font-semibold my-5">Sign In</h1>
                    <form
                      className="flex flex-col"
                      action=""
                      onSubmit={handleSubmit}
                    >
                      <label htmlFor="email" className="text-white">
                        Email or phone number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your email or phone number"
                        className="bg-inputBg py-4 px-5 my-3 rounded"
                        name="email"
                        id="email"
                        required
                        onChange={handleChange}
                        value={userLogin.email}
                        autoComplete="new-email"
                      />
                      <label htmlFor="password" className="text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        autoComplete="new-password"
                        required
                        className="bg-inputBg py-4 px-5 my-3 rounded"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={userLogin.password}
                      />
                      <button className="bg-red-600 py-3 my-2 rounded text-md mt-4 font-semibold w-full">
                        Sign In
                      </button>
                    </form>
                    <div className="flex justify-between my-3">
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <p className="text-sm text-gray-300 ">Remember me</p>
                      </div>
                      <p className="text-sm text-gray-300">Need help?</p>
                    </div>
                    <div className="my-4">
                      <div className=" ">
                        <p className="text-gray-400">
                          New to Netflix?
                          <button className="text-white">
                            &nbsp; Sign up Now
                          </button>
                        </p>
                        <p className="w-full text-sm mt-3 pr-3 text-gray-400">
                          This page is protected by Google reCAPTCHA to ensure
                          you're not a bot. Learn more.
                        </p>
                      </div>
                    </div>

                    {/* Sign Up Form  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of login Component  */}
        </>
      )}
    </>
  );
};

export default Login;
