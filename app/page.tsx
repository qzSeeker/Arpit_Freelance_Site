import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import HireMe from "./components/HireMe";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />        {/* For Freelance Clients */}
      <Projects />        {/* Case studies (important for both) */}
      <Work />            {/* Experience (important for recruiters) */}
      <Skills />          {/* Technical depth */}
      <HireMe />          {/* Strong CTA */}
      <Contact />         {/* Final action */}
    </div>
  );
}
