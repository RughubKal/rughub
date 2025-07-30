import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Sparkles, Clock } from "lucide-react";

const WhyItMatters = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Health & Hygiene",
      description: "Remove allergens, dust mites, and bacteria that accumulate in rugs and bedding. Create a cleaner, healthier home environment for your family.",
      highlights: ["Allergen removal", "Dust mite elimination", "Bacteria reduction"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Preserve Your Investment",
      description: "Professional cleaning extends the life of expensive rugs and quality bedding. Protect valuable items from damage caused by improper cleaning.",
      highlights: ["Fiber protection", "Color preservation", "Extended lifespan"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Superior Results",
      description: "Professional equipment and techniques achieve deep cleaning that home washing simply cannot match. Restore items to like-new condition.",
      highlights: ["Deep penetration", "Odor elimination", "Stain removal"]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Save Time & Effort",
      description: "No more struggling with bulky items or multiple wash cycles. We handle the heavy lifting while you focus on what matters most.",
      highlights: ["Convenient service", "Professional handling", "Time savings"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why It Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional rug and bedding cleaning isn't just about appearance – it's about 
              health, hygiene, and protecting your valuable home investments.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="space-y-1">
                        {benefit.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="bg-gradient-accent rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              The Hidden Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Dust mites can live in an unwashed mattress</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2-3x</div>
                <p className="text-muted-foreground">Longer lifespan with professional cleaning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Of allergens removed with deep cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;