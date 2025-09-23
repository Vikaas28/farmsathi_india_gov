import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  IndianRupee, 
  Umbrella, 
  CreditCard, 
  Droplets,
  Tractor,
  FileText,
  CheckCircle,
  ArrowRight,
  Info
} from 'lucide-react';

const SchemesSection = () => {
  const schemes = [
    {
      id: "pm-kisan",
      name: "PM-KISAN Samman Nidhi",
      description: "Direct income support of ₹6000 per year to eligible farmer families",
      amount: "₹6,000/year",
      eligibility: "All landholding farmers",
      status: "Active",
      icon: <IndianRupee className="w-6 h-6" />,
      color: "success",
      documents: ["Aadhaar Card", "Land Records", "Bank Account Details"]
    },
    {
      id: "pmfby",
      name: "PM Fasal Bima Yojana",
      description: "Comprehensive crop insurance against natural calamities and weather risks",
      amount: "Up to ₹2L coverage",
      eligibility: "All farmers (sharecroppers included)",
      status: "Enrollment Open",
      icon: <Umbrella className="w-6 h-6" />,
      color: "accent",
      documents: ["Crop Details", "Land Documents", "Bank Account"]
    },
    {
      id: "kcc",
      name: "Kisan Credit Card",
      description: "Flexible credit facility for agricultural needs at subsidized interest rates",
      amount: "Based on land holding",
      eligibility: "Farmers with land records",
      status: "Available",
      icon: <CreditCard className="w-6 h-6" />,
      color: "warning",
      documents: ["Land Records", "Income Proof", "Identity Proof"]
    },
    {
      id: "pmksy",
      name: "PM Krishi Sinchayee Yojana",
      description: "Water conservation and irrigation development for sustainable farming",
      amount: "Up to 90% subsidy",
      eligibility: "Individual/Group farmers",
      status: "Applications Open",
      icon: <Droplets className="w-6 h-6" />,
      color: "primary",
      documents: ["Water Source Proof", "Land Documents", "Project Proposal"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="schemes">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/20 px-4 py-2 rounded-full mb-4">
            <FileText className="w-4 h-4 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">सरकारी योजनाएं</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Government Schemes
            <span className="text-primary block mt-2">For Your Benefit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access all major government welfare schemes designed to support farmers. 
            Get personalized recommendations based on your profile and location.
          </p>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {schemes.map((scheme) => (
            <Card key={scheme.id} className="p-8 hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-samsung)] border-border/50 bg-gradient-to-br from-card to-muted/30 backdrop-blur-sm rounded-2xl transform hover:-translate-y-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-[var(--shadow-card)] backdrop-blur-sm
                    ${scheme.color === 'success' ? 'bg-gradient-to-br from-success to-success/80' : 
                      scheme.color === 'accent' ? 'bg-gradient-to-br from-accent to-accent/80' : 
                      scheme.color === 'warning' ? 'bg-gradient-to-br from-warning to-warning/80' : 
                      'bg-gradient-to-br from-primary to-primary/80'}`}>
                    {scheme.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground">{scheme.name}</h3>
                    <Badge variant="secondary" className="mt-2 rounded-full">
                      {scheme.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Benefit Amount</div>
                  <div className="text-lg font-bold text-primary">{scheme.amount}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {scheme.description}
              </p>

              {/* Eligibility */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">Eligibility:</span>
                </div>
                <p className="text-sm text-muted-foreground ml-6">{scheme.eligibility}</p>
              </div>

              {/* Required Documents */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">Required Documents:</span>
                </div>
                <div className="flex flex-wrap gap-2 ml-6">
                  {scheme.documents.map((doc, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {doc}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <Button variant="default" className="flex-1">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="icon">
                  <Info className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-8 text-center border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-samsung)]">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-[var(--shadow-button)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-card-foreground mb-3">Eligibility Check</h4>
            <p className="text-sm text-muted-foreground">
              Instant verification of your eligibility for all schemes
            </p>
          </Card>

          <Card className="p-8 text-center border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-samsung)]">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-[var(--shadow-button)]">
              <FileText className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-card-foreground mb-3">Document Guidance</h4>
            <p className="text-sm text-muted-foreground">
              Step-by-step help for document preparation
            </p>
          </Card>

          <Card className="p-8 text-center border-success/20 bg-gradient-to-br from-success/5 to-success/10 rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-samsung)]">
            <div className="w-16 h-16 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-[var(--shadow-button)]">
              <Tractor className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-card-foreground mb-3">Status Tracking</h4>
            <p className="text-sm text-muted-foreground">
              Real-time updates on your application status
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="p-10 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 border-primary/20 rounded-3xl shadow-[var(--shadow-elevated)] backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Need Help with Applications?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts are available to guide you through the application process
            </p>
            <Button variant="samsung" size="lg">
              Get Expert Assistance
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;