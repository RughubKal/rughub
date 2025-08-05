import { Phone, Mail, MapPin, Facebook, Instagram, Users } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return <footer className="bg-hero-bg text-hero-foreground py-3xl relative">
      {/* Walk-ins Welcome Popup */}
      <div 
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500 transform ${
          showPopup ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
        }`}
      >
        <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-elegant flex items-center gap-3 max-w-xs">
          <Users className="w-5 h-5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-sm">Walk-ins Welcome!</p>
            <p className="text-xs opacity-90">No appointment needed</p>
          </div>
          <button 
            onClick={() => setShowPopup(false)}
            className="ml-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Close popup"
          >
            ×
          </button>
        </div>
      </div>
      
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  RugHub
                </span>
              </h3>
              <p className="text-hero-foreground/80">
                Professional rug cleaning and heavy bedding services in Kalgoorlie. 
                Quality care for your valuable home textiles.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-hero-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-hero-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#what-we-do" className="block text-hero-foreground/70 hover:text-primary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('what-we-do')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  What We Do
                </a>
                <a href="#our-offer" className="block text-hero-foreground/70 hover:text-primary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('our-offer')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Pricing
                </a>
                <a href="#how-it-works" className="block text-hero-foreground/70 hover:text-primary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  How It Works
                </a>
                <a href="#contact" className="block text-hero-foreground/70 hover:text-primary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+61891234567" className="text-hero-foreground/70 hover:text-primary transition-colors">0412 669 532</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@rughubkalgoorlie.com.au" className="text-hero-foreground/70 hover:text-primary transition-colors break-all">admin@rughubkal.com.au</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-hero-foreground/70">186A Dugan Street, Kalgoorlie, WA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-hero-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-hero-foreground/60 text-sm">
                © {currentYear} RugHub Kalgoorlie. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-hero-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-hero-foreground/60 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;