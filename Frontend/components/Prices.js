import React from "react";
import { PriceTable } from "./PriceTable";

export const Prices = () => {
  return (
    <div className="">
      <div id="prices" className="mt-16 text-white md:text-black md:mt-32 flex">
        <div className="m-auto flex flex-col rounded-2xl md:bg-white bg-opacity-60 items-center p-5 2xl:border-2 2xl:bg-opacity-90 md:shadow-2xl">
          <svg
            className="hidden md:block w-12 h-12 bg-green-100 rounded-full transform rotate-90 text-customBlue-lighter"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <h1 className="text-center text-4xl font-semibold -700 mt-6 px-6">
            Choose a plan that works for you
          </h1>
          <PriceTable></PriceTable>
        </div>
      </div>
    </div>
  );
};
