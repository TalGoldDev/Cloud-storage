import React from "react";

export const Features = () => {
  return (
    <div
      id="features"
      className="mt-16 text-white md:text-black 2xl:text-white md:mt-96 xl:mt-36 flex"
    >
      <div className="m-auto flex flex-col rounded-2xl md:bg-white bg-opacity-60 2xl:bg-opacity-0 items-center p-3 2xl:border-2 xl:pb-8 xl:shadow-2xl">
        <svg
          className="hidden md:block h-12 w-12 rounded-full bg-green-100 text-customBlue-lighter mt-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>

        <h2 className="text-4xl font-semibold  mt-4">Our Features</h2>
        <div
          id="feature-list"
          className="md:mt-6 md:pl-4 md:pr-4 md:space-x-6 space-y-6 flex flex-col md:flex-row flex-wrap justify-center"
        >
          <div className="flex flex-col items-center lg:w-3/12 md:items-start md:pl-6 pt-6">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <h3 className="font-semibold text-lg">Free Storage</h3>
            <p className="w-72 md:w-48 lg:72 text-center md:text-left text-center md:text-left">
              Free storage up option, try our service for free up to 1,000mb of
              space for your own personal use.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-3/12 md:items-start">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h3 className="font-semibold text-lg">Cache Control</h3>
            <p className="w-72 md:w-48 lg:72 text-center md:text-left">
              Intelligent caching system speeds up the application while using
              as little space as possible.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-3/12 md:items-start">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <h3 className="font-semibold text-lg">Portable & Functional</h3>
            <p className="w-72 md:w-48 lg:72 text-center md:text-left">
              Easily upload and download files and folders, stream your media,
              view your images without needing to download.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-3/12 md:items-start">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <h3 className="font-semibold text-lg">No Sync Needed</h3>
            <p className="w-72 md:w-48 lg:72 text-center md:text-left">
              No bandwidth and time consuming syncing is required.
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-3/12 md:items-start">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <h3 className="font-semibold text-lg">Secure</h3>
            <p className="w-72 md:w-48 lg:72 text-center md:text-left">
              Our cloud storage uses sophisticated encryption methods widely
              accepted by cryptographers to make sure all of your files are safe
              and will stay so!
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-3/12 md:items-start">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-semibold text-lg">Native OS Feel</h3>
            <p className="w-72 md:w-48 lg:72 text-center md:text-left">
              Use your cloud within any operating system environment using our
              responsive client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
