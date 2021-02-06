import Head from "next/head";
import { Features } from "../components/Features";
import { Herobox } from "../components/Herobox";

export default function Home() {
  return (
    <div className="pt-12 md:pt-32">
      <Head>
        <title>Cloud Storage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Herobox></Herobox>
        <Features></Features>
        <div id="prices"></div>
        <div id="faq"></div>
      </main>

      <footer className="mt-32">footer</footer>
    </div>
  );
}
