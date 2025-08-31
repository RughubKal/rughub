import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Truck, Calculator, Clock, Star, Bed } from "lucide-react";
import { useState } from "react";
const OurOffer = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const calculatePrice = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!l || !w || l <= 0 || w <= 0) return null;
    const sqm = l * w;
    const price = sqm * 25; // $25 per sqm base rate

    return {
      sqm: sqm.toFixed(1),
      price: price.toFixed(0)
    };
  };
  const calculation = calculatePrice();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="section-padding bg-secondary">
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
            {/* Pricing Calculator Card */}
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
                    $25
                  </div>
                  <p className="text-muted-foreground">starting from</p>
                </div>

                {/* Calculator */}
                <div className="bg-muted rounded-lg p-4 space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-primary" />
                    Price Calculator
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="length" className="text-sm">Length (m)</Label>
                      <Input id="length" type="number" placeholder="2.0" value={length} onChange={e => setLength(e.target.value)} className="h-9" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width" className="text-sm">Width (m)</Label>
                      <Input id="width" type="number" placeholder="3.0" value={width} onChange={e => setWidth(e.target.value)} className="h-9" />
                    </div>
                  </div>

                  {calculation && <div className="border-t border-border pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Square meters:</span>
                        <span className="font-medium">{calculation.sqm} sqm</span>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">
                          Estimated: ${calculation.price}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Based on $25 per sqm starting rate
                        </p>
                      </div>
                    </div>}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Professional cleaning & care</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">All rug types & heavy bedding</span>
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
                    $40
                  </div>
                  <p className="text-muted-foreground">starting price</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Bed className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Sheets, pillowcases & covers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Same day turnaround if dropped off before 9am</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Professional wash & dry</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Popular Items:</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Queen Doona:</span>
                      <span className="font-semibold">$55</span>
                    </div>
                    <div className="flex justify-between">
                      <span>King Topper:</span>
                      <span className="font-semibold">$60</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Super King Doona:</span>
                      <span className="font-semibold">$65</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Badge variant="outline" className="mx-auto">
                    Loan Doonas Available
                  </Badge>
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
              <Button variant="secondary" size="lg" onClick={scrollToContact} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Get Your Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default OurOffer;