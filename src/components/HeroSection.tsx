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
          <div className="inline-flex items-center space-x-2 bg-[var(--gradient-glass)] backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20 shadow-[var(--shadow-card)]">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-base font-semibold text-white">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center space-x-4 text-white p-4 bg-[var(--gradient-glass)] rounded-2xl backdrop-blur-md border border-white/20 shadow-[var(--shadow-card)]">
              <div className="w-14 h-14 bg-gradient-to-br from-success to-success/80 rounded-2xl flex items-center justify-center shadow-[var(--shadow-button)]">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Market Intelligence</h3>
                <p className="text-white/90">Real-time crop prices</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white p-4 bg-[var(--gradient-glass)] rounded-2xl backdrop-blur-md border border-white/20 shadow-[var(--shadow-card)]">
              <div className="w-14 h-14 bg-gradient-to-br from-warning to-warning/80 rounded-2xl flex items-center justify-center shadow-[var(--shadow-button)]">
                <Smartphone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Smart Farming</h3>
                <p className="text-white/90">AI-powered crop guidance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-white p-4 bg-[var(--gradient-glass)] rounded-2xl backdrop-blur-md border border-white/20 shadow-[var(--shadow-card)]">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-[var(--shadow-button)]">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Gov. Schemes</h3>
                <p className="text-white/90">Direct benefit access</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Digital Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-10 py-4 font-bold">
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