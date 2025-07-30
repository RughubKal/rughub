import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `RugHub Service Inquiry - ${formData.service || 'General'}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}`;
    
    const mailtoLink = `mailto:info@rughubkalgoorlie.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with your inquiry.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto content-spacing-lg animate-fade-in">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Contact RugHub
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to book your service or have questions? Get in touch with us today 
              for a personalized quote and friendly service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  Get Your Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <Input
                      id="service"
                      name="service"
                      placeholder="e.g., Rug cleaning, Doona washing, etc."
                      value={formData.service}
                      onChange={handleInputChange}
                      className="bg-input border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your items</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your rugs/bedding: size, material, any stains or special requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-input border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full"
                  >
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone Card */}
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Call Us</h3>
                      <p className="text-muted-foreground">For immediate assistance</p>
                      <a 
                        href="tel:+61891234567" 
                        className="text-primary font-semibold hover:text-primary-deep transition-colors"
                      >
                        (08) 9123 4567
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Email Us</h3>
                      <p className="text-muted-foreground">Send us your inquiry</p>
                      <a 
                        href="mailto:info@rughubkalgoorlie.com.au" 
                        className="text-primary font-semibold hover:text-primary-deep transition-colors"
                      >
                        info@rughubkalgoorlie.com.au
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Card */}
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Service Area</h3>
                      <p className="text-muted-foreground">Local Kalgoorlie region</p>
                      <p className="text-sm text-muted-foreground">Pickup & delivery available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours Card */}
              <Card className="bg-card border-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <div className="bg-gradient-primary rounded-lg p-6 text-primary-foreground text-center">
                <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                <p className="mb-4 opacity-90">Call us directly for faster service</p>
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => window.location.href = 'tel:+61891234567'}
                >
                  Call (08) 9123 4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;