import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Work/>
      <Skills/>
      <Contact/>
    </div>
  );
}
