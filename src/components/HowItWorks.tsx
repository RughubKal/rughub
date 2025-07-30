import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Truck, Sparkles, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "60-Second Free Quote",
      description: "Call now for instant pricing. No home visit required. We'll tell you exactly what it costs and book your pickup within 24 hours.",
      action: "FREE quote in under 60 seconds"
    },
    {
      number: "02", 
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "White-Glove Pickup",
      description: "Our uniformed team arrives exactly on time with protective covering. We handle your expensive items like our own. FREE this week only.",
      action: "Professional pickup (FREE normally $20)"
    },
    {
      number: "03",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Deep Sanitization Process",
      description: "Industrial-grade equipment destroys 99.9% of allergens, bacteria, and dust mites. Your items get the hospital-grade cleaning they deserve.",
      action: "99.9% allergen elimination guaranteed"
    },
    {
      number: "04",
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Like-New Delivery",
      description: "Fresh, sanitized items delivered to your door within 3-5 days. If you're not amazed by the results, we'll re-clean for FREE.",
      action: "100% satisfaction guarantee"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header with Social Proof */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How 847+ Kalgoorlie Families Got Their Lives Back
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The same proven 4-step system that's saved families thousands in replacement costs 
              and eliminated health risks in their homes. Guaranteed results.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Action */}
                    <div className="mt-auto">
                      <div className="text-sm text-primary font-medium bg-primary/10 rounded-lg py-2 px-3">
                        {step.action}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Social Proof & Urgency */}
          <div className="bg-card rounded-lg p-8 shadow-card border-l-4 border-green-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  "Best Investment We Ever Made" - Sarah M.
                </h3>
                <p className="text-muted-foreground mb-6">
                  "Our $4,000 Persian rug looked ruined. RugHub made it look brand new again. 
                  The allergies stopped, the smell disappeared, and we saved thousands on replacement. 
                  I'm telling everyone about this service!"
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span><strong>847+ families served</strong> in Kalgoorlie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span><strong>$180,000+ saved</strong> in replacement costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span><strong>Zero damage claims</strong> in 5 years</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
                  <p className="font-bold">⚡ LIMITED TIME: Only 12 slots left this week</p>
                </div>
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto animate-pulse"
                >
                  Claim Your FREE Pickup Now
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Call within 2 hours • Save $20 • Same week service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;