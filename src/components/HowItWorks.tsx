import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Truck, Sparkles, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Book Your Service",
      description: "Contact us with details about your rugs or bedding. We'll provide a quote and schedule your service.",
      action: "Call or complete our contact form"
    },
    {
      number: "02", 
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "We Pickup",
      description: "Our team arrives at your scheduled time to safely collect your items. Optional service for $20.",
      action: "Safe collection from your home"
    },
    {
      number: "03",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Professional Clean",
      description: "Your items receive thorough, professional cleaning using specialized equipment and techniques.",
      action: "Deep cleaning at our facility"
    },
    {
      number: "04",
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Clean Delivery",
      description: "We return your freshly cleaned items to your home, ready to enjoy again.",
      action: "Convenient delivery back to you"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, convenient process from start to finish. Professional service 
              with minimal disruption to your day.
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

          {/* Additional Info */}
          <div className="bg-card rounded-lg p-8 shadow-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join satisfied customers who trust RugHub for their professional 
                  cleaning needs. Quality service, transparent pricing, and convenient 
                  pickup & delivery.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Fast turnaround time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Fully insured service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Satisfaction guaranteed</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  variant="cta" 
                  size="lg"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto"
                >
                  Start Your Service Today
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Quick response • Fair pricing • Local service
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