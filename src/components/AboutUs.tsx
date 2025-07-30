import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, MapPin, Clock, Shield } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "We use professional-grade equipment and proven techniques to deliver exceptional results every time."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust & Reliability",
      description: "Built on years of honest service and transparent practices that Kalgoorlie families can depend on."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description: "We're not just a business - we're your neighbors, committed to serving our local community."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About RugHub
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted local partner for professional rug and bedding care in Kalgoorlie
            </p>
          </div>

          {/* Story & Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Our Story */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Our Story</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Founded in the heart of Kalgoorlie, RugHub was born from a simple observation: 
                families in our community deserved better options for caring for their valuable 
                rugs and bedding. What started as a mission to fill this gap has grown into 
                the region's most trusted cleaning service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the unique challenges of maintaining textiles in our climate, 
                and we've built our expertise specifically around the needs of local families. 
                Every technique we use, every product we choose, is selected with Kalgoorlie 
                homes in mind.
              </p>
            </div>

            {/* Our Mission */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide Kalgoorlie families with professional, convenient, and affordable 
                cleaning services that extend the life of their most cherished textiles while 
                creating healthier home environments.
              </p>
              <div className="bg-gradient-accent rounded-lg p-6">
                <h4 className="font-semibold text-foreground mb-3">Our Promise to You</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Professional results you can see and feel
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Transparent pricing with no hidden costs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    Convenient pickup and delivery service
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    100% satisfaction guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Local Achievement Stats */}
          <div className="bg-gradient-accent rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Serving Kalgoorlie Since Day One
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Years serving Kalgoorlie families</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Happy customers in our community</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24hr</div>
                <p className="text-muted-foreground">Typical turnaround time</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to experience the RugHub difference for yourself?
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Contact us today for your free quote</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;