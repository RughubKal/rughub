import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Truck, Calculator, Clock, Star, Bed, Package, Sheet } from "lucide-react";

const OurOffer = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with convenient pickup and delivery options. 
              Quality service at fair rates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Pricing Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Cleaning Rates
                </CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  Per Square Meter
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    $38.50
                  </div>
                  <p className="text-muted-foreground">per square meter</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calculator className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Easy calculation: length × width</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Professional cleaning & care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">All rug types & heavy bedding</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Example Pricing:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>2m × 3m rug:</span>
                      <span className="font-semibold">$231.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Queen doona (2.2m × 2.4m):</span>
                      <span className="font-semibold">$203.28</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pickup & Delivery Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Pickup & Delivery
                </CardTitle>
                <Badge variant="outline" className="mx-auto">
                  Optional Service
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    $20
                  </div>
                  <p className="text-muted-foreground">flat rate (both ways)</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Local Kalgoorlie area</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Convenient scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Safe handling guaranteed</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>✓ Pickup from your home</div>
                    <div>✓ Professional transport</div>
                    <div>✓ Clean delivery back to you</div>
                    <div>✓ Flexible scheduling</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bedding Washing Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Bedding Washing
                </CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  Fixed Pricing
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">
                    From $20
                  </div>
                  <p className="text-muted-foreground">per item</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Hygiene wash, dry, fold & packaging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">All prices include GST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Pickup & delivery: $20</span>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="doonas">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" />
                        Doonas/Duvet & Mattress Toppers
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1">
                          <span>Single</span>
                          <span className="font-semibold">$20.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>King Single</span>
                          <span className="font-semibold">$25.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Double</span>
                          <span className="font-semibold">$35.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Queen</span>
                          <span className="font-semibold">$40.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>King</span>
                          <span className="font-semibold">$45.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Super King</span>
                          <span className="font-semibold">$50.00</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="blankets">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <Sheet className="w-4 h-4" />
                        Blankets/Comforters
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1">
                          <span>Throw/Lap</span>
                          <span className="font-semibold">$20.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Single</span>
                          <span className="font-semibold">$25.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Double</span>
                          <span className="font-semibold">$35.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>Queen</span>
                          <span className="font-semibold">$40.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>King</span>
                          <span className="font-semibold">$45.00</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="weighted">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Weighted Blankets
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1">
                          <span>2-4kg</span>
                          <span className="font-semibold">$35.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>5-7kg</span>
                          <span className="font-semibold">$45.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>8-10kg</span>
                          <span className="font-semibold">$55.00</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span>11kg+</span>
                          <span className="font-semibold">$65.00</span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="bg-muted rounded-lg p-3 text-xs text-muted-foreground text-center">
                  All prices include Hygiene Wash, Dry, Fold & Packaging
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us for a personalized quote based on your specific items.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Your Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffer;