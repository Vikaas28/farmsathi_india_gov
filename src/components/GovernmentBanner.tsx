import React from 'react';
import { Shield, Award, Users } from 'lucide-react';

const GovernmentBanner = () => {
  return (
    <section className="bg-gradient-to-r from-secondary via-background to-primary py-3 border-b-2 border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 text-sm">
          {/* Government Seal */}
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">Government Certified Platform</span>
          </div>
          
          {/* Divider */}
          <div className="w-px h-4 bg-border"></div>
          
          {/* Trust Indicator */}
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-secondary" />
            <span className="font-medium text-foreground">Digital India Initiative</span>
          </div>
          
          {/* Divider */}
          <div className="w-px h-4 bg-border"></div>
          
          {/* User Count */}
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-success" />
            <span className="font-medium text-foreground">2M+ Registered Farmers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentBanner;