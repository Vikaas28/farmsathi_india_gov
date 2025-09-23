import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  Award,
  IndianRupee,
  Smartphone
} from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "2.1M+",
      label: "Registered Farmers",
      description: "Active users across India",
      gradient: "from-primary to-success"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      value: "500+",
      label: "Districts Covered",
      description: "Pan-India coverage",
      gradient: "from-accent to-primary"
    },
    {
      icon: <IndianRupee className="w-8 h-8" />,
      value: "₹15,000Cr",
      label: "Benefits Disbursed",
      description: "Through government schemes",
      gradient: "from-success to-warning"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "35%",
      label: "Income Increase",
      description: "Average improvement",
      gradient: "from-warning to-accent"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      value: "15+",
      label: "Languages",
      description: "Regional language support",
      gradient: "from-secondary to-primary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "98.5%",
      label: "Satisfaction Rate",
      description: "User approval rating",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Empowering Farmers
            <span className="text-primary block">Across India</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join millions of farmers who have transformed their agricultural practices with Farmsathi
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:scale-105 border-border bg-gradient-card group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-card-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;