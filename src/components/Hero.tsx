import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-bg text-hero-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional rug cleaning service" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  RugHub
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-hero-foreground/90 font-light">
                Kalgoorlie
              </p>
            </div>

            {/* Tagline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
              Professional Rug Cleaning & Heavy Bedding Services
            </h2>

            <p className="text-lg sm:text-xl text-hero-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your rugs and heavy bedding with our professional cleaning service. 
              From Persian rugs to thick quilts, we handle what your home washing machine can't.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span>Professional Service</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Local Kalgoorlie</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>Pick-up & Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="w-full sm:w-auto"
              >
                Get A Quote Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10"
                onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Pricing Highlight */}
            <div className="mt-12 p-6 bg-hero-foreground/10 backdrop-blur-sm rounded-lg border border-hero-foreground/20 max-w-md mx-auto">
              <p className="text-lg font-semibold text-primary mb-2">Starting from</p>
              <p className="text-3xl font-bold mb-1">$38.50<span className="text-lg font-normal"> per sqm</span></p>
              <p className="text-sm text-hero-foreground/70">+ Optional pickup & delivery $20</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-foreground/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-hero-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-hero-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;