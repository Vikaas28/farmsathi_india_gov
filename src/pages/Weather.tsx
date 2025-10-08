import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cloud, Droplets, Wind, Sun, CloudRain, AlertTriangle, ArrowLeft, Thermometer } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Weather = () => {
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

  const currentWeather = {
    temp: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    rainfall: 0,
    uvIndex: 6,
  };

  const forecast = [
    { day: 'आज (Today)', icon: CloudRain, temp: '28°/22°', rain: 60, condition: 'Light Rain' },
    { day: 'कल (Tomorrow)', icon: Sun, temp: '32°/24°', rain: 20, condition: 'Sunny' },
    { day: 'परसों (Day After)', icon: Cloud, temp: '30°/23°', rain: 40, condition: 'Cloudy' },
    { day: 'Wed', icon: CloudRain, temp: '27°/21°', rain: 80, condition: 'Heavy Rain' },
    { day: 'Thu', icon: Sun, temp: '31°/23°', rain: 10, condition: 'Clear' },
  ];

  const alerts = [
    {
      icon: AlertTriangle,
      title: 'Heavy Rainfall Alert',
      desc: 'Expected 50-70mm rain on Wednesday. Postpone pesticide spraying.',
      severity: 'high'
    },
    {
      icon: Sun,
      title: 'High Temperature Alert',
      desc: 'Temperature may reach 35°C tomorrow. Ensure adequate irrigation.',
      severity: 'medium'
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
            हाइपर लोकल मौसम
          </h1>
          <p className="text-lg text-muted-foreground">
            Hyper Local Weather | Farm-Specific Weather Forecasts
          </p>
        </div>

        {/* Current Weather */}
        <Card className="border-primary/30 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Current Weather | वर्तमान मौसम</CardTitle>
            <CardDescription>Your Farm Location - Updated 10 mins ago</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-lg">
                <Thermometer className="h-12 w-12 text-primary mb-2" />
                <div className="text-4xl font-bold">{currentWeather.temp}°C</div>
                <div className="text-sm text-muted-foreground">{currentWeather.condition}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-primary" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-medium">{currentWeather.humidity}%</span>
                </div>
                <Progress value={currentWeather.humidity} className="h-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wind className="h-5 w-5 text-primary" />
                    <span className="text-sm">Wind Speed</span>
                  </div>
                  <span className="font-medium">{currentWeather.windSpeed} km/h</span>
                </div>
                <Progress value={(currentWeather.windSpeed / 50) * 100} className="h-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sun className="h-5 w-5 text-primary" />
                    <span className="text-sm">UV Index</span>
                  </div>
                  <span className="font-medium">{currentWeather.uvIndex}</span>
                </div>
                <Progress value={(currentWeather.uvIndex / 11) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5-Day Forecast */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5-Day Forecast | 5 दिन का पूर्वानुमान</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {forecast.map((day, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="font-medium">{day.day}</div>
                    <day.icon className="h-12 w-12 mx-auto text-primary" />
                    <div className="text-xl font-bold">{day.temp}</div>
                    <div className="text-sm text-muted-foreground">{day.condition}</div>
                    <div className="flex items-center justify-center gap-1 text-sm">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span>{day.rain}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Weather Alerts */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-warning" />
              Weather Alerts | मौसम चेतावनी
            </CardTitle>
            <CardDescription>
              Important weather alerts affecting your farming activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    alert.severity === 'high' ? 'border-destructive/30 bg-destructive/5' :
                    'border-warning/30 bg-warning/5'
                  }`}
                >
                  <alert.icon className={`h-6 w-6 mt-1 ${
                    alert.severity === 'high' ? 'text-destructive' : 'text-warning'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground">{alert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Weather;
