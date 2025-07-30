import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import OurOffer from "@/components/OurOffer";
import WhyItMatters from "@/components/WhyItMatters";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <OurOffer />
      <WhyItMatters />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
