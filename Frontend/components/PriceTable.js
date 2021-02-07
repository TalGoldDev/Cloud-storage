import React from "react";

export const PriceTable = () => {
  return (
    <div>
      <section>
        <div class="container max-w-full mx-auto px-6">
          <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

          <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div class="relative block flex flex-col lg:flex-row items-center">
              <div class="w-11/12 max-w-sm sm:w-5/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
                <div class="bg-white bg-opacity-40 rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2k px-8 lg:px-6">
                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      SILVER
                    </h1>
                    <h2 class="text-sm -500 text-center pb-6">FREE</h2>
                    <p className="text-center">
                      Try our service for free, <br></br>1GB of storage space on
                      our cloud.
                    </p>
                  </div>

                  <div class="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="-700 text-lg ml-1">1GB Free Storage</span>
                      </li>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="-700 text-lg ml-1">
                          Great for personal use
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div class="block flex items-center p-8  uppercase">
                    <button
                      class="mt-3 text-lg font-semibold 
	bg-customBlue-lighter w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl md:hover:bg-customBlue-light focus:outline-none"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-md sm:w-5/5 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white bg-opacity-40 md:bg-opacity-100 rounded-lg shadow-lg">
                <div class="text-lg leading-none rounded-t-lg md:bg-gray-200 border-b-2 font-semibold uppercase py-4 text-center tracking-wide">
                  Most Popular
                </div>
                <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2  px-8 lg:px-6">
                  <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    GOLD
                  </h1>
                  <h2 class="text-sm -500 text-center pb-4">
                    <span class="text-3xl">$7.95</span> /mo
                  </h2>
                  <p className="text-center">
                    Or prepay annually: <br></br>
                  </p>
                  <p className="mt-2 text-blue-500 font-semibold text-center underline">
                    $60 / year
                  </p>
                </div>
                <div class="flex pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <li class="flex items-center">
                      <div class="rounded-full p-2 fill-current text-green-700">
                        <svg
                          class="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span class="-700 text-lg ml-3">100 GB storage</span>
                    </li>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          class="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span class="-700 text-lg ml-3">Member benefits</span>
                    </li>
                    <li class="flex items-center">
                      <div class=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          class="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span class="-700 text-lg ml-3">Original</span>
                    </li>
                  </ul>
                </div>

                <div class="block flex items-center p-8  uppercase">
                  <button
                    class="mt-3 text-lg font-semibold 
	bg-customBlue-lighter w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl md:hover:bg-customBlue-light focus:outline-none"
                  >
                    Select
                  </button>
                </div>
              </div>
              <div class="w-11/12 max-w-sm sm:w-5/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
                <div class="bg-white bg-opacity-40 rounded-lg shadow-inner shadow-lg overflow-hidden">
                  <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 px-8 lg:px-6">
                    <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      PLATINUM
                    </h1>
                    <h2 class="text-sm -500 text-center pb-6">$15.95 /mo</h2>
                    <p className="text-center">
                      Or prepay annually: <br></br>
                    </p>
                    <p className="mt-2 text-blue-500 font-semibold text-center underline">
                      $170 / year
                    </p>
                  </div>
                  <div class="flex flex-wrap mt-3 px-6">
                    <ul>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="-700 text-lg ml-3">200 GB Storage</span>
                      </li>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="-700 text-lg ml-3">All benefits</span>
                      </li>
                      <li class="flex items-center">
                        <div class=" rounded-full p-2 fill-current text-green-700">
                          <svg
                            class="w-6 h-6 align-middle"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span class="-700 text-lg ml-3">
                          Access To Personal Support
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div class="block flex items-center p-8  uppercase">
                    <button
                      class="mt-3 text-lg font-semibold 
	bg-customBlue-lighter w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl transition md:hover:bg-customBlue-light focus:outline-none"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
