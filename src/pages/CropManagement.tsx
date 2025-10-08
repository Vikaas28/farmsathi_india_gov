import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf, Calendar, Droplets, Bug, TrendingUp, ArrowLeft } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const CropManagement = () => {
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

  const crops = [
    { name: 'गेहूं (Wheat)', stage: 'Flowering', progress: 65, days: 45, status: 'healthy' },
    { name: 'धान (Rice)', stage: 'Vegetative', progress: 40, days: 70, status: 'attention' },
    { name: 'मक्का (Corn)', stage: 'Maturity', progress: 85, days: 15, status: 'healthy' },
  ];

  const recommendations = [
    { icon: Droplets, title: 'Irrigation Alert', desc: 'Water wheat crop in 2 days', priority: 'high' },
    { icon: Bug, title: 'Pest Control', desc: 'Monitor for aphids in rice', priority: 'medium' },
    { icon: Calendar, title: 'Fertilizer Schedule', desc: 'Apply urea for corn next week', priority: 'low' },
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
            स्मार्ट फसल प्रबंधन
          </h1>
          <p className="text-lg text-muted-foreground">
            Smart Crop Management | AI-Powered Farming Insights
          </p>
        </div>

        {/* Current Crops */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {crops.map((crop, idx) => (
            <Card key={idx} className="border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Leaf className={`h-8 w-8 ${crop.status === 'healthy' ? 'text-success' : 'text-warning'}`} />
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    crop.status === 'healthy' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                  }`}>
                    {crop.status === 'healthy' ? 'स्वस्थ' : 'ध्यान दें'}
                  </span>
                </div>
                <CardTitle className="mt-4">{crop.name}</CardTitle>
                <CardDescription>{crop.stage} Stage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Growth Progress</span>
                      <span className="font-medium">{crop.progress}%</span>
                    </div>
                    <Progress value={crop.progress} className="h-2" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{crop.days} days to harvest</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Recommendations */}
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              AI Recommendations | एआई सिफारिशें
            </CardTitle>
            <CardDescription>
              Personalized insights based on your farm data and weather conditions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    rec.priority === 'high' ? 'border-destructive/30 bg-destructive/5' :
                    rec.priority === 'medium' ? 'border-warning/30 bg-warning/5' :
                    'border-muted bg-muted/20'
                  }`}
                >
                  <rec.icon className={`h-6 w-6 mt-1 ${
                    rec.priority === 'high' ? 'text-destructive' :
                    rec.priority === 'medium' ? 'text-warning' :
                    'text-muted-foreground'
                  }`} />
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">{rec.title}</h4>
                    <p className="text-sm text-muted-foreground">{rec.desc}</p>
                  </div>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CropManagement;
