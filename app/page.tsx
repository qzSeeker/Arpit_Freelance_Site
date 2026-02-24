import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Problem from "./components/Problem";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Services from "./services/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}