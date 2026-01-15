import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import HireMe from "./components/HireMe";

export default function Home() {
  return (
    <div>
      <Hero/>
      <HireMe/>
      <Work/>
      <Skills/>
      <Contact/>
    </div>
  );
}
