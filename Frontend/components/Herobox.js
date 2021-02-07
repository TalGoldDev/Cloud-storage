import React from "react";

export const Herobox = () => {
  return (
    <div id="herobox" className="xl:m-full">
      <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left">
        <span className="text-customBlue-lighter">Cloud</span>Storage
      </h1>

      <p className="mt-7 text-xl lg:w-6/12 lg:leading-8 text-blue-200 text-center md:text-left">
        Quality High-Speed Cloud Service. Create an account <br></br>now and get
        a massive
        <span className="text-customBlue-300"> 10GB OF Free Storage!</span>
      </p>

      <div
        id="call-to-action"
        className="mt-8 md:space-x-4 text-center flex flex-col md:flex-row space-y-4 md:space-y-0"
      >
        <a>
          <button className="focus:outline-none text-lg font-bold bg-customBlue-lighter pt-3 pb-3 pr-6 pl-6 rounded-3xl hover:bg-customBlue-light transition duration-300 ease-in-out">
            Register Now
          </button>
        </a>
        <a>
          <button className="focus:outline-none text-lg text-white font-bold border-2 pt-3 pb-3 pr-6 pl-6 rounded-3xl hover:text-gray-300 hover:border-gray-300 hover:bg-gray-100 hover:bg-opacity-10 transition duration-300 ease-in-out">
            Find Out More
          </button>
        </a>
      </div>
    </div>
  );
};
