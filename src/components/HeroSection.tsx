import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, TrendingUp, Shield } from 'lucide-react';
import heroImage from '@/assets/farmsathi-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Indian farmers using digital technology in agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Government Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">
              भारत सरकार की पहल | Government of India Initiative
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Farmsathi</span>
            <span className="block text-3xl md:text-4xl font-normal text-white/90 mt-2">
              किसानों का डिजिटल साथी
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Empowering India's farmers with cutting-edge technology. Access real-time market prices, 
            weather forecasts, government schemes, and expert agricultural guidance - all in one platform.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Market Intelligence</h3>
                <p className="text-sm text-white/80">Real-time crop prices</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-warning rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Smart Farming</h3>
                <p className="text-sm text-white/80">AI-powered crop guidance</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Gov. Schemes</h3>
                <p className="text-sm text-white/80">Direct benefit access</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Digital Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by farmers across India</p>
            <div className="flex items-center space-x-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold">2M+</div>
                <div className="text-sm">Registered Farmers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Districts Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;