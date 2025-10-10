import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Droplets, Wind, Sun, ArrowLeft, MapPin, RefreshCw, Thermometer } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const Weather = () => {
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState('Delhi');
  const [fetchingData, setFetchingData] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const majorCities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 
    'Hyderabad', 'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow',
    'Chandigarh', 'Bhopal', 'Patna', 'Indore', 'Nagpur'
  ];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/auth');
      } else {
        setLoading(false);
        fetchWeatherData();
      }
    });
  }, [navigate]);

  const fetchWeatherData = async () => {
    setFetchingData(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-weather', {
        body: { city: selectedCity }
      });

      if (error) throw error;

      if (data.success) {
        setWeatherData(data.current);
        
        // Process forecast data - get one forecast per day
        if (data.forecast && data.forecast.list) {
          const dailyForecasts = data.forecast.list.filter((_: any, idx: number) => idx % 8 === 0).slice(0, 5);
          setForecastData(dailyForecasts);
        }
      } else {
        throw new Error(data.error || 'Failed to fetch weather data');
      }
    } catch (error: any) {
      console.error('Error fetching weather:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch real-time weather data',
        variant: 'destructive'
      });
    } finally {
      setFetchingData(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchWeatherData();
    }
  }, [selectedCity]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const getWeatherIcon = (condition: string) => {
    if (condition.includes('rain')) return <Droplets className="h-12 w-12" />;
    if (condition.includes('cloud')) return <Cloud className="h-12 w-12" />;
    return <Sun className="h-12 w-12" />;
  };

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
            मौसम सलाह
          </h1>
          <p className="text-lg text-muted-foreground">
            Weather Advisory | Hyper-Local Weather Information
          </p>
        </div>

        <div className="flex gap-4 mb-6 flex-wrap items-center">
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {majorCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button 
            onClick={fetchWeatherData} 
            disabled={fetchingData}
            variant="outline"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${fetchingData ? 'animate-spin' : ''}`} />
            Refresh Weather
          </Button>
        </div>

        {fetchingData ? (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-48" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-32 w-full" />
              </CardContent>
            </Card>
          </div>
        ) : weatherData ? (
          <>
            <Card className="mb-8 border-primary/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <MapPin className="h-6 w-6 text-primary" />
                      {weatherData.name}, {weatherData.sys?.country}
                    </CardTitle>
                    <CardDescription>
                      Real-time weather conditions
                    </CardDescription>
                  </div>
                  <Badge variant="default">Live</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-6">
                    <div className="text-primary">
                      {getWeatherIcon(weatherData.weather?.[0]?.main?.toLowerCase() || '')}
                    </div>
                    <div>
                      <div className="text-5xl font-bold">{Math.round(weatherData.main?.temp)}°C</div>
                      <div className="text-xl text-muted-foreground capitalize">
                        {weatherData.weather?.[0]?.description}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Droplets className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Humidity</div>
                        <div className="text-xl font-semibold">{weatherData.main?.humidity}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Wind className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Wind Speed</div>
                        <div className="text-xl font-semibold">{weatherData.wind?.speed} m/s</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Thermometer className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Feels Like</div>
                        <div className="text-xl font-semibold">{Math.round(weatherData.main?.feels_like)}°C</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Cloud className="h-8 w-8 text-primary" />
                      <div>
                        <div className="text-sm text-muted-foreground">Pressure</div>
                        <div className="text-xl font-semibold">{weatherData.main?.pressure} hPa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5-Day Forecast | 5 दिन का पूर्वानुमान</CardTitle>
                <CardDescription>Extended weather forecast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  {forecastData.map((day, idx) => (
                    <Card key={idx} className="border-primary/20">
                      <CardContent className="p-4 text-center">
                        <div className="text-sm font-medium mb-2">
                          {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="flex justify-center text-primary mb-2">
                          {getWeatherIcon(day.weather?.[0]?.main?.toLowerCase() || '')}
                        </div>
                        <div className="text-2xl font-bold mb-1">
                          {Math.round(day.main?.temp)}°C
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {day.weather?.[0]?.description}
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-2 text-xs">
                          <Droplets className="h-3 w-3" />
                          {day.pop ? Math.round(day.pop * 100) : 0}%
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-warning/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-6 w-6 text-primary" />
                  Agricultural Advisory | कृषि सलाह
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weatherData.main?.temp > 35 && (
                    <div className="p-4 rounded-lg border border-warning/30 bg-warning/5">
                      <h4 className="font-medium mb-2">High Temperature Alert</h4>
                      <p className="text-sm text-muted-foreground">
                        Ensure adequate irrigation. Consider evening watering to reduce evaporation.
                      </p>
                    </div>
                  )}
                  {weatherData.main?.humidity > 80 && (
                    <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
                      <h4 className="font-medium mb-2">High Humidity</h4>
                      <p className="text-sm text-muted-foreground">
                        Monitor crops for fungal diseases. Ensure proper ventilation.
                      </p>
                    </div>
                  )}
                  {weatherData.wind?.speed > 10 && (
                    <div className="p-4 rounded-lg border border-warning/30 bg-warning/5">
                      <h4 className="font-medium mb-2">Strong Winds</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure greenhouses and temporary structures. Avoid pesticide spraying.
                      </p>
                    </div>
                  )}
                  <div className="p-4 rounded-lg border border-success/30 bg-success/5">
                    <h4 className="font-medium mb-2">General Recommendation</h4>
                    <p className="text-sm text-muted-foreground">
                      Weather data updated in real-time from OpenWeather. Plan your farming activities accordingly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Unable to fetch weather data. Please try again.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Weather;
