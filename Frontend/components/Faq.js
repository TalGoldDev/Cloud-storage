import React from "react";

export const Faq = () => {
  return (
    <div
      id="faq"
      className="mt-16 text-white md:text-black md:mt-36 flex w-full"
    >
      <div className="m-auto flex flex-col rounded-2xl items-center pt-3 pb-3 w-5/6 ">
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
        <h1 className="text-center text-4xl font-semibold -700 mt-6 px-6">
          Frequently Asked Questions
        </h1>
        <Questions></Questions>
      </div>
    </div>
  );
};

const Questions = () => {
  return (
    <div>
      <div className="mt-6 w-full text-white">
        <h2 className="text-3xl  border-b-2 w-full items-center font-medium rounded px-2 py-3  mt-2 cursor-pointer md:text-black">
          What is “cloud-based” storage?
        </h2>
        <p className="p-2 text-xl text-justify text-left mb-5 md:text-black">
          The “cloud” is a term for a network of servers all working together to
          provide a service. The “cloud” actually isn’t a cloud at all but is a
          shorthand term for describing a network of servers spread around
          various locations. When you store files on a cloud storage device,
          that means that the files are stored on a server network owned by the
          storage provider rather than in one physical location (like a
          computer’s hard drive).
        </p>
      </div>
      <div className="mt-6 w-full">
        <h2 className="text-3xl border-b-2 w-full items-center font-medium rounded px-2 py-3  mt-2 md:text-black ">
          What are the advantages of using Cloud Storage?
        </h2>
        <p className="p-2 text-xl text-justify text-left mb-5 ">
          <p>
            Easy online access to all your stored files – Because all files are
            stored in the cloud, you can access any of your files wherever
            there’s an internet connection.
          </p>
          <br></br>
          <p>
            Safe way to back up your files – When your files are stored on our
            cloud, you never have to be concerned about losing your files in the
            event of a computer crash.
          </p>
          <br></br>
          <p>
            Tons of storage space for Gold & Platinum accounts – which means you
            never have to worry about running out of space to store your files.
          </p>
        </p>
      </div>
      <div className="mt-6 w-full">
        <h2 className="text-3xl border-b-2 w-full items-center font-medium rounded px-2 py-3 mt-2 md:text-black">
          How do I access my account?
        </h2>
        <p className="p-2 text-xl text-justify text-left mb-5">
          Simply log into your account through our web-based platform, log in
          and you can start using our cloud storage by uploading & downloading
          files.
        </p>
      </div>
    </div>
  );
};
