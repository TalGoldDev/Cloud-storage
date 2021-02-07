import React from "react";

export const Faq = () => {
  return (
    <div id="faq" className="mt-16 text-white md:text-black md:mt-36 flex">
      <div className="m-auto flex flex-col rounded-2xl items-center p-3 ">
        <svg
          className="hidden md:block w-12 h-12 bg-green-100 rounded-full text-customBlue-lighter"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </div>
    </div>
  );
};
