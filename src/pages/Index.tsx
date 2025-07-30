import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import OurOffer from "@/components/OurOffer";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="what-we-do">
        <WhatWeDo />
      </section>
      <section id="our-offer">
        <OurOffer />
      </section>
      <section id="why-it-matters">
        <AboutUs />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
