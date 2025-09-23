import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube,
  Shield,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">
                फा
              </div>
              <div>
                <h3 className="text-xl font-bold">Farmsathi</h3>
                <p className="text-sm text-background/70">Government of India</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering Indian farmers with digital technology and direct access to government welfare schemes for sustainable agricultural growth.
            </p>
            <div className="flex items-center space-x-2 text-background/70">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Secure • Trusted • Government Verified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Farmer Tools</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Crop Recommendation</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Disease Detection</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Market Prices</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Weather Forecast</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Land Management</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Financial Ledger</a></li>
            </ul>
          </div>

          {/* Government Schemes */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Government Schemes</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">PM-KISAN</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">PM Fasal Bima Yojana</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Kisan Credit Card</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">PM Krishi Sinchayee</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Soil Health Card</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors flex items-center">
                All Schemes <ExternalLink className="w-3 h-3 ml-1" />
              </a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support Center</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-background/70" />
                <div>
                  <div className="text-sm">Toll-Free Helpline</div>
                  <div className="font-medium">1800-XXX-XXXX</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-background/70" />
                <div>
                  <div className="text-sm">Email Support</div>
                  <div className="font-medium">support@farmsathi.gov.in</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-background/70 mt-1" />
                <div>
                  <div className="text-sm">Head Office</div>
                  <div className="text-sm text-background/80">
                    Ministry of Agriculture<br />
                    New Delhi, India
                  </div>
                </div>
              </div>
            </div>

            {/* Language Support */}
            <div className="mb-6">
              <h5 className="font-medium mb-2">Available in 15+ Languages</h5>
              <p className="text-sm text-background/70">हिंदी • English • বাংলা • தமிழ் • తెలుగు</p>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-background/70">
              © 2024 Government of India. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Accessibility</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">RTI</a>
            </div>
          </div>

          {/* Social Media & Apps */}
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/70 hover:text-background hover:bg-background/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Government Compliance */}
        <Separator className="bg-background/20 mt-8 mb-6" />
        <div className="text-center">
          <p className="text-xs text-background/60 mb-2">
            This is an official website of the Government of India | Last Updated: {new Date().toLocaleDateString()}
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs text-background/60">
            <span>Designed & Developed by NIC</span>
            <span>•</span>
            <span>Hosted by NIC</span>
            <span>•</span>
            <span>Content Managed by Ministry of Agriculture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;