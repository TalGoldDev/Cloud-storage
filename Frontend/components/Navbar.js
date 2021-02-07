import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div id="logo">
        <h1 className="text-2xl font-bold ">Cloud Storage</h1>
      </div>
      <div
        id="pages"
        className="hidden lg:flex flex-row space-x-6 font-semibold text-lg text-blue-100"
      >
        <a>Home</a>

        <a>Pricing</a>

        <a>Features</a>

        <a>Contact-Us</a>

        <a>FAQ</a>
      </div>
      <div id="login" className="flex font-bold text-lg items-center">
        <a href="#" className="mr-4">
          Login
        </a>

        <a href="/#">
          <button
            className="text-white md:text-customBlue-light font-bold bg-customBlue-lighter md:bg-white pl-5 pr-5 pt-2 pb-2
             rounded-3xl transition duration-300 ease-in-out bg-white hover:bg-customBlue-lighter hover:text-white text-center focus:outline-none"
          >
            Sign Up
          </button>
        </a>
      </div>
    </div>
  );
};
