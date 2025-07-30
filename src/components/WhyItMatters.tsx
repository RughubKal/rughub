import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Sparkles, Clock } from "lucide-react";

const WhyItMatters = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Stop Making Your Family Sick",
      description: "Right now, your children are breathing in 10,000+ dust mites, dead skin cells, and bacteria from 'clean' bedding. Professional deep cleaning removes 95% of these health threats in one service.",
      highlights: ["95% allergen elimination", "Dust mite extermination", "Bacteria death sentence"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Save Thousands on Replacements",
      description: "That $3,000 Persian rug will be worthless in 6 months without proper care. Our professional cleaning extends lifespan by 300% - saving you thousands on premature replacements.",
      highlights: ["300% longer lifespan", "Zero color bleeding", "Investment protection guarantee"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Results You Can Actually See",
      description: "Home washing removes only 30% of embedded dirt. Our industrial equipment extracts 95% of deep-set grime, odors, and stains your washing machine can't touch.",
      highlights: ["95% deep dirt removal", "Industrial-grade extraction", "Stain removal guarantee"]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Get Your Life Back",
      description: "Stop wasting weekends struggling with bulky bedding and rugs. We pickup, clean, and deliver while you enjoy your time. Complete white-glove service.",
      highlights: ["Zero effort required", "Professional pickup/delivery", "Same-week turnaround"]
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header with Pain Amplification */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What's REALLY At Stake Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This isn't about "clean" vs "dirty" - it's about protecting your family's health and 
              thousands of dollars in home investments. Every day you wait, the damage gets worse.
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

          {/* Shocking Statistics */}
          <div className="bg-gradient-accent rounded-lg p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              The Terrifying Truth About "Clean" Bedding
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">2 MILLION</div>
                <p className="text-muted-foreground">Dust mites living in your mattress right now</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">$5,000+</div>
                <p className="text-muted-foreground">Average cost to replace ruined expensive rugs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">70%</div>
                <p className="text-muted-foreground">Of deep dirt STAYS after home washing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;