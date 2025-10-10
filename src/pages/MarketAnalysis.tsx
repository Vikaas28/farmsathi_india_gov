import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, IndianRupee, MapPin, ArrowLeft, BarChart3, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const MarketAnalysis = () => {
  const [loading, setLoading] = useState(true);
  const [marketData, setMarketData] = useState<any[]>([]);
  const [selectedState, setSelectedState] = useState('Delhi');
  const [fetchingData, setFetchingData] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const indianStates = [
    'Delhi', 'Punjab', 'Haryana', 'Uttar Pradesh', 'Maharashtra', 
    'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Madhya Pradesh'
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        setLoading(false);
        fetchMarketPrices();
      }
    });
  }, [navigate]);

  const fetchMarketPrices = async () => {
    setFetchingData(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-market-prices', {
        body: { state: selectedState }
      });

      if (error) throw error;

      if (data.success && data.data) {
        setMarketData(data.data.slice(0, 10));
      } else {
        toast({
          title: 'No data available',
          description: 'Unable to fetch market prices at this time',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('Error fetching market prices:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch real-time market prices',
        variant: 'destructive'
      });
    } finally {
      setFetchingData(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchMarketPrices();
    }
  }, [selectedState]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

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

        <div className="flex gap-4 mb-6 flex-wrap items-center">
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {indianStates.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            onClick={fetchMarketPrices} 
            disabled={fetchingData}
            variant="outline"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${fetchingData ? 'animate-spin' : ''}`} />
            Refresh Data
          </Button>
        </div>

        {fetchingData ? (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-12 w-full mb-4" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : marketData.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {marketData.map((item, idx) => (
              <Card key={idx} className="border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">
                        {item.commodity || 'N/A'}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.market || item.district || selectedState}
                      </CardDescription>
                    </div>
                    <Badge variant="default">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <IndianRupee className="h-5 w-5 text-primary" />
                        <span className="text-3xl font-bold text-foreground">
                          {item.modal_price || item.max_price || 'N/A'}
                        </span>
                        <span className="text-sm text-muted-foreground">/quintal</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Min Price:</span>
                      <span className="font-medium">₹{item.min_price || 'N/A'}/qt</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Max Price:</span>
                      <span className="font-medium">₹{item.max_price || 'N/A'}/qt</span>
                    </div>
                    {item.arrival_date && (
                      <div className="text-xs text-muted-foreground">
                        Updated: {new Date(item.arrival_date).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No market data available for {selectedState}. Try selecting a different state.
              </p>
            </CardContent>
          </Card>
        )}

        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              Market Insights | बाजार अंतर्दृष्टि
            </CardTitle>
            <CardDescription>
              Real-time market analysis and selling recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-success/30 bg-success/5">
                <h4 className="font-medium mb-2">State-wise Price Comparison Available</h4>
                <p className="text-sm text-muted-foreground">
                  Compare prices across {indianStates.length} major agricultural states in real-time
                </p>
              </div>
              <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                <h4 className="font-medium mb-2">Live Market Data</h4>
                <p className="text-sm text-muted-foreground">
                  Prices updated directly from AGMARKNET - India's official agricultural marketing platform
                </p>
              </div>
              <div className="p-4 rounded-lg border border-warning/30 bg-warning/5">
                <h4 className="font-medium mb-2">Best Selling Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Compare modal prices across states to identify the best markets for your produce
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default MarketAnalysis;
