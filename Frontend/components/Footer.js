import React from "react";

export const Footer = () => {
  return (
    <div className="md:mt-60 md:pb-32">
      <footer className="">
        <div className="md:border-b-2 pb-4 flex flex-col lg:flex-row justify-between items-center">
          <div>
            <h2 className="text-5xl text-white">Check our service for free!</h2>
            <p className="text-lg mt-4 text-blue-300">
              You can try out our service for up to 1GB of space for free
            </p>
          </div>
          <div className="flex mt-3 lg:mt-0">
            <a href="#">
              <button className="w-full focus:outline-none text-lg font-bold bg-customBlue-lighter pt-3 pb-3 pr-6 pl-6 rounded-3xl hover:bg-white hover:text-customBlue-lighter transition duration-300 ease-in-out">
                Try it Now
              </button>
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-between mt-8 flex-col lg:flex-row items-center lg:items-start">
          <div className="text-3xl font-bold">CloudStorage</div>
          <div className="flex flex-wrap space-x-12 w-auto text-xl text-blue-200 pt-6 lg:pt-0">
            <a className="pl-6" href="#">
              Home
            </a>
            <a href="#">Pricing</a>
            <a href="#">Features</a>
            <a href="#">ContactUs</a>
            <a href="#">FAQ</a>
          </div>
          <div className="flex flex-col space-y-2 pt-6 lg:pt-0">
            <div className="flex items-center">
              <svg
                className="transform rotate-90 h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <p>@CloudStorage</p>
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              @CloudStorage
            </div>
            <div className="flex items-center">
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              support@cloudstorage
            </div>
          </div>
        </div>
        <div className="hidden lg:flex pt-6 lg:pt-0">
          <p className="mr-24 text-blue-200">@ 2021 CloudStorage</p>
          <p>cloudStorage.service@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};
