import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Calculator, Clock, Star } from "lucide-react";

const OurOffer = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header with Value Stack */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              The Complete "Home Sanctuary" Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to eliminate health threats, protect expensive investments, 
              and get peace of mind. Usually $278+ value - yours for just $38.50/sqm this week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Pricing Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  "Health Guardian" Deep Clean Package
                </CardTitle>
                <Badge variant="secondary" className="mx-auto bg-green-500 text-white">
                  SAVE $20/sqm This Week
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground line-through">Regular: $58.50/sqm</div>
                  <div className="text-5xl font-bold text-primary mb-2">
                    $38.50
                  </div>
                  <p className="text-muted-foreground">per square meter</p>
                  <div className="text-sm bg-green-500 text-white px-3 py-1 rounded-full inline-block mt-2">SAVE $20/sqm!</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>99.9% allergen elimination</strong> (normally $15 extra)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Stain protection treatment</strong> (normally $25 extra)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Odor elimination guarantee</strong> (normally $20 extra)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Damage insurance coverage</strong> (normally $18 extra)</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-xs text-center text-muted-foreground mb-2">REAL CUSTOMER SAVINGS:</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>2m × 3m Persian rug:</span>
                      <div className="text-right">
                        <div className="text-xs line-through text-muted-foreground">$351.00</div>
                        <span className="font-semibold text-foreground">$231.00</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Queen doona (~2.5sqm):</span>
                      <div className="text-right">
                        <div className="text-xs line-through text-muted-foreground">$146.25</div>
                        <span className="font-semibold text-foreground">$96.25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pickup & Delivery Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  White-Glove Pickup & Delivery
                </CardTitle>
                <Badge variant="outline" className="mx-auto bg-red-500 text-white border-red-500">
                  FREE This Week Only
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground line-through">Regular: $20</div>
                  <div className="text-5xl font-bold text-green-500 mb-2">
                    FREE
                  </div>
                  <p className="text-muted-foreground">this week only</p>
                  <div className="text-sm bg-red-500 text-white px-3 py-1 rounded-full inline-block mt-2">SAVE $20!</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Same-day booking available</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Uniformed professionals</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Protective covering included</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground"><strong>Damage insurance coverage</strong></span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold text-foreground mb-2">🚚 Premium Service Includes:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>✅ Professional pickup from your home</div>
                    <div>✅ Climate-controlled transport</div>
                    <div>✅ Photo documentation of items</div>
                    <div>✅ Text updates on progress</div>
                    <div>✅ Return delivery within 3-5 days</div>
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded text-center text-sm font-bold mt-3">
                    🎁 BONUS: Free stain protection spray ($35 value)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Urgency Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground border-2 border-red-500">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg inline-block mb-4">
                <p className="font-bold">⚠️ WARNING: Free pickup ends in 48 hours!</p>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Total Package Value: $278 - Your Price: $38.50/sqm
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6 max-w-2xl mx-auto">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Health Guardian Deep Clean:</span>
                    <span className="line-through">$58.50/sqm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Allergen Elimination:</span>
                    <span className="line-through">$15/sqm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stain Protection:</span>
                    <span className="line-through">$25/sqm</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>White-Glove Pickup:</span>
                    <span className="line-through">$20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Stain Protection Spray:</span>
                    <span className="line-through">$35</span>
                  </div>
                  <div className="flex justify-between font-bold text-green-500">
                    <span>YOUR TOTAL SAVINGS:</span>
                    <span>$95+</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 animate-pulse mb-4"
              >
                🔥 CLAIM THIS DEAL NOW - Save $95+
              </Button>
              <p className="text-sm opacity-75">
                🔒 Risk-Free • 100% Satisfaction Guarantee • Call within 2 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffer;