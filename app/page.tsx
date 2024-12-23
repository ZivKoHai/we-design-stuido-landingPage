import Hero from "./components/Hero";
import SubHero from "./components/subHero";
import Services from "./components/Services";
import About from "./components/About";
import LatestProjects from "./components/LatestProjects";
import Testimonials from "./components/Testimonials";
import TheProcess from "./components/TheProcess";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <Services />
      <About />
      <LatestProjects />
      <Testimonials />
      <TheProcess />
      <FAQ />
      <Contact />
    </>
  );
}
