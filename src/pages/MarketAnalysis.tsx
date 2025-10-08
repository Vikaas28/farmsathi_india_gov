import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, IndianRupee, MapPin, ArrowLeft, BarChart3 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const MarketAnalysis = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const marketPrices = [
    { crop: 'गेहूं (Wheat)', price: 2450, change: 5.2, trend: 'up', msp: 2275, location: 'Delhi Mandi' },
    { crop: 'धान (Rice)', price: 3200, change: -2.1, trend: 'down', msp: 2183, location: 'Punjab Mandi' },
    { crop: 'मक्का (Corn)', price: 1890, change: 3.5, trend: 'up', msp: 2090, location: 'UP Mandi' },
    { crop: 'सोयाबीन (Soybean)', price: 4300, change: 1.8, trend: 'up', msp: 4600, location: 'MP Mandi' },
  ];

  const insights = [
    {
      title: 'Best Time to Sell Wheat',
      desc: 'Prices expected to rise 8-10% in next 15 days due to lower production forecasts',
      type: 'opportunity'
    },
    {
      title: 'Rice Market Update',
      desc: 'Current prices below MSP. Consider holding stock for 20 days for better rates',
      type: 'warning'
    },
    {
      title: 'Government Procurement',
      desc: 'New procurement centers opening in 3 districts. Register by 15th for hassle-free selling',
      type: 'info'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            बाजार विश्लेषण
          </h1>
          <p className="text-lg text-muted-foreground">
            Market Analysis | Real-time Mandi Prices & Trends
          </p>
        </div>

        {/* Market Prices */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {marketPrices.map((item, idx) => (
            <Card key={idx} className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{item.crop}</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </CardDescription>
                  </div>
                  <Badge variant={item.trend === 'up' ? 'default' : 'destructive'}>
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {item.change > 0 ? '+' : ''}{item.change}%
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <IndianRupee className="h-5 w-5 text-primary" />
                      <span className="text-3xl font-bold text-foreground">
                        {item.price}
                      </span>
                      <span className="text-sm text-muted-foreground">/quintal</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">MSP (Minimum Support Price):</span>
                    <span className="font-medium">₹{item.msp}/qt</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Price History
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Market Insights */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              Market Insights | बाजार अंतर्दृष्टि
            </CardTitle>
            <CardDescription>
              AI-powered market analysis and selling recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, idx) => (
                <div 
                  key={idx}
                  className={`p-4 rounded-lg border ${
                    insight.type === 'opportunity' ? 'border-success/30 bg-success/5' :
                    insight.type === 'warning' ? 'border-warning/30 bg-warning/5' :
                    'border-primary/30 bg-primary/5'
                  }`}
                >
                  <h4 className="font-medium mb-2">{insight.title}</h4>
                  <p className="text-sm text-muted-foreground">{insight.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MarketAnalysis;
