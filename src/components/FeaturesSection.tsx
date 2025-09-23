import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  TrendingUp, 
  Cloud, 
  Users, 
  Shield, 
  Smartphone,
  MapPin,
  Calculator,
  MessageCircle,
  Award
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Smart Crop Management",
      description: "AI-powered recommendations for crop selection, fertilizers, and disease prevention based on your soil and climate data.",
      category: "Farming Tools",
      gradient: "from-primary to-success"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Price Intelligence", 
      description: "Real-time market prices from e-NAM and local mandis. Know when and where to sell for maximum profit.",
      category: "Market Data",
      gradient: "from-accent to-primary"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Hyper-Local Weather",
      description: "Precise weather forecasts and alerts for your exact location to plan farming activities effectively.",
      category: "Weather Advisory",
      gradient: "from-accent to-success"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Government Schemes",
      description: "Discover and apply for relevant government schemes like PM-KISAN, PMFBY, and KCC with guided assistance.",
      category: "Benefits & Schemes",
      gradient: "from-secondary to-warning"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Land Management",
      description: "Interactive maps to track your land parcels, monitor crop growth, and manage multiple fields efficiently.",
      category: "Land Tracking",
      gradient: "from-primary to-accent"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Financial Ledger",
      description: "Simple income-expense tracking, budget planning, and financial insights to improve farm profitability.",
      category: "Finance Management",
      gradient: "from-success to-warning"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Farmer Community",
      description: "Connect with fellow farmers, share experiences, and learn from agricultural experts in your region.",
      category: "Community",
      gradient: "from-accent to-secondary"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "IVR Support",
      description: "Access key information via phone calls in your local language - no internet required for basic features.",
      category: "Accessibility",
      gradient: "from-warning to-success"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Assistant",
      description: "24/7 multilingual chatbot support for instant answers to farming queries and platform guidance.",
      category: "Support",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="tools">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comprehensive Digital Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="text-primary block mt-2">Modern Farming</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From seed to market, Farmsathi provides end-to-end digital solutions to help Indian farmers 
            increase productivity, reduce costs, and maximize profits.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-strong transition-all duration-300 hover:scale-105 border-border bg-gradient-card group cursor-pointer"
            >
              {/* Feature Icon with Gradient */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                {feature.icon}
              </div>

              {/* Category Badge */}
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium mb-3">
                {feature.category}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover p-0">
                  Learn More →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Farming?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of farmers who are already using Farmsathi to increase their productivity and income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Register as Farmer
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;