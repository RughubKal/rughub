import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shirt, Shield, Home } from "lucide-react";

const WhatWeDo = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "Expensive Rugs At Risk",
      description: "Your $2,000+ Persian rug harbors 10,000+ dust mites per square meter. Home cleaning destroys fibers and fades colors permanently."
    },
    {
      icon: <Shirt className="w-8 h-8 text-primary" />,
      title: "Heavy Bedding Nightmare",
      description: "That thick doona hasn't been properly cleaned in months. It's now a breeding ground for bacteria, dead skin, and allergens your family breathes nightly."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Surface Cleaning = Wasted Money",
      description: "Home washing only touches 30% of embedded dirt. 70% of allergens, odors, and bacteria remain deep in fibers, making your family sick."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "One Wrong Wash = Ruined Forever",
      description: "Delicate fibers shrink, colors run, and expensive items become worthless trash. Professional care or permanent damage - your choice."
    }
  ];

  return (
    <section id="what-we-do" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header with Problem Amplification */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Hidden Threats Lurking In Your Home
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every day you delay professional cleaning, thousands more dust mites, bacteria, and allergens 
              multiply in your rugs and bedding. Here's what's really happening...
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cost of Inaction */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-accent rounded-lg p-8 max-w-4xl mx-auto border-l-4 border-red-500">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                The TRUE Cost of Doing Nothing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">🏥 Health Crisis</h4>
                  <p>Asthma attacks, allergic reactions, and respiratory issues from dust mites and bacteria. Hospital bills: $2,000+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">💸 Financial Loss</h4>
                  <p>Ruined expensive rugs, replacement costs, and permanent stains. Total damage: $5,000+</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">😴 Sleep Torture</h4>
                  <p>Restless nights, bad odors, and uncomfortable bedding. Your family's peace of mind: Priceless</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;