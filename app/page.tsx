import Connect from "./Connect";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center h-fit "> 

      <section className="relative w-full max-w-6xl h-fit flex flex-col gap-6 bg-white border-x border-stone-400 px-4">
        <Navbar/> 
        <Hero/>
        <Connect/>
        <Footer/>
      </section>

    </main>
  );
}
