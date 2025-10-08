import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Menu, Globe, Phone, LogOut, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { User as SupabaseUser } from '@supabase/supabase-js';

const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Logged out',
        description: 'You have been successfully logged out.',
      });
      navigate('/auth');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    }
  };

  return (
    <>
      {/* Government Top Bar */}
      <div className="bg-[var(--gradient-gov-header)] py-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-foreground font-medium">भारत सरकार | Government of India</span>
            <div className="flex items-center space-x-4 text-foreground">
              <span>कृषि एवं किसान कल्याण मंत्रालय</span>
              <span>|</span>
              <span>Ministry of Agriculture & Farmers Welfare</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-background border-b-2 border-primary/20 shadow-[var(--shadow-government)] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Government Logo and Branding */}
            <div className="flex items-center space-x-4">
              {/* Government Emblem */}
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[var(--shadow-government)] border-2 border-white">
                <div className="text-center">
                  <div className="text-sm">भा</div>
                  <div className="text-xs">GOI</div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-foreground">
                  Farmsathi
                  <span className="text-primary ml-2">फार्मसाथी</span>
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  Digital India Initiative for Farmers
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6 bg-muted/30 px-6 py-2 rounded-full">
                <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">गृह पृष्ठ</a>
                <a href="#schemes" className="text-foreground hover:text-primary transition-colors font-medium">योजनाएं</a>
                <a href="#tools" className="text-foreground hover:text-primary transition-colors font-medium">उपकरण</a>
                <a href="#community" className="text-foreground hover:text-primary transition-colors font-medium">समुदाय</a>
                <a href="#support" className="text-foreground hover:text-primary transition-colors font-medium">सहायता</a>
              </div>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <Button variant="outline" size="sm" className="hidden md:flex border-primary/30">
                <Globe className="w-4 h-4 mr-2" />
                हिं | EN
              </Button>

              {/* Helpline */}
              <Button variant="outline" size="sm" className="hidden lg:flex border-secondary/30 text-secondary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Kisan Call Centre: 1800-180-1551
              </Button>

              {/* Mobile Menu */}
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>

              {/* Auth Actions */}
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span className="max-w-[150px] truncate">{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="border-destructive/30 text-destructive hover:bg-destructive/10">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gradient-to-r from-primary to-success font-medium"
                  onClick={() => navigate('/auth')}
                >
                  किसान लॉगिन | Farmer Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;