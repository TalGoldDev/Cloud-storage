import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-500 md:bg-white md:bg-left-top md:bg-hero-pattern md:bg-contain 2xl:bg-cover md:bg-no-repeat">
      <div className="items-center relative min-h-screen max-w-screen-xl m-auto">
        <div className="pt-5 pl-8 pr-8 md:pl-32 md:pr-32 text-white">
          <Navbar></Navbar>
          <Component {...pageProps} />
        </div>
      </div>
      <div
        id="footer"
        className="bg-blue-500 md:bg-white md:bg-left-top md:bg-footer-bg md:bg-cover md:bg-no-repeat"
      >
        <div className="items-center relative h-auto max-w-screen-xl m-auto">
          <div className="pt-5 pl-8 pr-8 md:pl-32 md:pr-32 text-white">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
