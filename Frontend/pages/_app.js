import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blue-100">
      <div
        id="background"
        className="items-center relative min-h-screen max-w-screen-xl m-auto"
      >
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
