import { useEffect } from "react";

import Hero from "../components/LupitaEduardo/Hero";
import Parents from "../components/LupitaEduardo/Parents";
import About from "../components/LupitaEduardo/About";
import Gallery from "../components/LupitaEduardo/Gallery";
import Ceremony from "../components/LupitaEduardo/Ceremony";
import DressCode from "../components/LupitaEduardo/DressCode";
import Gift from "../components/LupitaEduardo/Gift";
import RSVP from "../components/LupitaEduardo/RSVP";
import Footer from "../components/LupitaEduardo/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/LupitaEduardoTemplate.css";

function LupitaEduardoTemplate({ invitation }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Hero />
      <Parents />
      <About />
      <Gallery />
      <Ceremony />
      <DressCode />
      <Gift />
      <RSVP />
      <Footer />
    </>
  );
}

export default LupitaEduardoTemplate;
