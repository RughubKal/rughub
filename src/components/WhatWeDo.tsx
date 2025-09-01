import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shirt, Shield, Home } from "lucide-react";
const WhatWeDo = () => {
  const services = [{
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Area Rugs",
    description: "Persian, Oriental, modern rugs, and runners of all sizes. Professional cleaning that preserves fibres and colours."
  }, {
    icon: <Shirt className="w-8 h-8 text-primary" />,
    title: "Heavy Bedding",
    description: "Quilts, doonas, comforters, and thick blankets. Items too bulky for home washing machines."
  }, {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Deep Cleaning",
    description: "Professional-grade equipment removes deep-set dirt, allergens, and odours that regular cleaning can't reach."
  }, {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Fibre Protection",
    description: "Specialised techniques for delicate materials. We protect your investment with proper care methods."
  }];
  return <section id="what-we-do" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We specialise in cleaning items that are too large, delicate, or valuable for standard home washing. Professional results you can trust.</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => <Card key={index} className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 hover:transform hover:scale-105">
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
              </Card>)}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-accent rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why Choose Professional Cleaning?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Preserve Quality</h4>
                  <p>Extend the life of your valuable rugs and bedding with proper cleaning techniques.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Save Time</h4>
                  <p>No more struggling with bulky items or multiple washing cycles at home.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Better Results</h4>
                  <p>Professional equipment and expertise deliver superior cleaning results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhatWeDo;