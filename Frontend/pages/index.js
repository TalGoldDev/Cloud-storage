import Head from "next/head";

export default function Home() {
  return (
    <div className="pt-32">
      <Head>
        <title>Cloud Storage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="herobox">
          <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left">
            <span className="text-customBlue-lighter">Cloud</span>Storage
          </h1>

          <p className="mt-7 text-xl lg:w-6/12 lg:leading-8 text-blue-200 text-center md:text-left">
            Quality High-Speed Cloud Service. Create an account <br></br>now and
            get a massive
            <span className="text-customBlue-300"> 10GB OF Free Storage!</span>
          </p>

          <div
            id="call-to-action"
            className="mt-8 md:space-x-4 text-center flex flex-col md:flex-row space-y-4 md:space-y-0"
          >
            <a className="text-lg font-bold bg-customBlue-lighter pt-3 pb-3 pr-6 pl-6 rounded-3xl">
              Register Now
            </a>
            <a className="text-lg font-semibold border-2 pt-3 pb-3 pr-6 pl-6 rounded-3xl">
              Find Out More
            </a>
          </div>
        </div>
        <div id="features"></div>
        <div id="prices"></div>
        <div id="faq"></div>
      </main>

      <footer className="mt-32">footer</footer>
    </div>
  );
}
