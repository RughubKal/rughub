import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center bg-hero-bg text-hero-foreground overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Professional rug cleaning service" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto container-padding">
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

            {/* Headline with Problem Hook */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
              Stop Sleeping on Thousands of Dust Mites and Allergens
            </h2>

            <p className="text-lg sm:text-xl text-hero-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your expensive rugs and bedding are harboring invisible threats to your family's health. 
              Get professional deep cleaning that removes what home washing can't touch.
            </p>

            {/* Urgency & Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span>97% Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Same-Week Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>

            {/* Urgent CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="w-full sm:w-auto animate-float">
                Get FREE Quote in 60 Seconds
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-hero-foreground/30 text-hero-foreground hover:bg-hero-foreground/10 hover:scale-105 transition-all duration-300" onClick={() => document.getElementById('what-we-do')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                See The Hidden Dangers
              </Button>
            </div>

            {/* Value Stack with Urgency */}
            <div className="mt-3xl p-8 bg-hero-foreground/10 backdrop-blur-sm rounded-xl border border-hero-foreground/20 max-w-md mx-auto hover:bg-hero-foreground/15 transition-all duration-300">
              <p className="text-lg font-semibold text-primary mb-2">Limited Time Offer</p>
              <p className="text-3xl font-bold mb-1">$38.50<span className="text-lg font-normal"> per sqm</span></p>
              <p className="text-sm text-hero-foreground/70 mb-3">+ FREE pickup & delivery (normally $20)</p>
              <p className="text-xs text-primary font-medium bg-primary/20 rounded-full px-3 py-1 inline-block">⚡ Book this week - Save $20!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-hero-foreground/60 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;