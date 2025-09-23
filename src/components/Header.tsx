import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Globe, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Government Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-soft">
              फा
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-foreground">Farmsathi</h1>
              <p className="text-xs text-muted-foreground">Government of India Initiative</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#schemes" className="text-foreground hover:text-primary transition-colors">Schemes</a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">Farmer Tools</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">Support</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Globe className="w-4 h-4 mr-2" />
              हिंदी
            </Button>

            {/* Help Phone */}
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="w-4 h-4 mr-2" />
              Help: 1800-XXX-XXXX
            </Button>

            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>

            {/* Login Button */}
            <Button variant="hero" size="sm">
              Login / Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;