import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Tractor, Droplets, Sprout, IndianRupee, ExternalLink, CheckCircle2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Schemes = () => {
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

  const schemes = [
    {
      id: 'pm-kisan',
      name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      category: 'income-support',
      icon: IndianRupee,
      status: 'active',
      amount: '₹6,000/year',
      description: 'Direct income support of ₹6000 per year to all landholding farmer families in three equal installments',
      eligibility: [
        'All landholding farmers',
        'Small and marginal farmers',
        'Family with cultivable land'
      ],
      documents: [
        'Aadhaar Card',
        'Land ownership documents',
        'Bank account details',
        'Mobile number'
      ],
      link: 'https://pmkisan.gov.in/',
      lastDate: 'Rolling basis'
    },
    {
      id: 'pmfby',
      name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
      category: 'insurance',
      icon: Sprout,
      status: 'active',
      amount: 'Premium: 2% (Kharif), 1.5% (Rabi)',
      description: 'Comprehensive crop insurance scheme covering pre-sowing to post-harvest losses',
      eligibility: [
        'All farmers including sharecroppers and tenant farmers',
        'Farmers growing notified crops',
        'Must have insurable interest in the crop'
      ],
      documents: [
        'Aadhaar Card',
        'Land records (owned/tenant)',
        'Bank account details',
        'Sowing certificate',
        'Loan details (for loanee farmers)'
      ],
      link: 'https://pmfby.gov.in/',
      lastDate: 'Before sowing season'
    },
    {
      id: 'pmksy',
      name: 'PMKSY (Pradhan Mantri Krishi Sinchayee Yojana)',
      category: 'irrigation',
      icon: Droplets,
      status: 'active',
      amount: 'Up to 90% subsidy',
      description: 'Scheme to expand cultivable area under irrigation, reduce water wastage, and enhance water use efficiency',
      eligibility: [
        'Individual farmers',
        'Group of farmers',
        'Self Help Groups',
        'Cooperative societies',
        'FPOs'
      ],
      documents: [
        'Aadhaar Card',
        'Land ownership documents',
        'Bank account details',
        'Project proposal',
        'Survey report'
      ],
      link: 'https://pmksy.gov.in/',
      lastDate: 'Check with local authorities'
    },
    {
      id: 'kcc',
      name: 'KCC (Kisan Credit Card)',
      category: 'credit',
      icon: FileText,
      status: 'active',
      amount: 'Credit limit based on land holding',
      description: 'Provides adequate and timely credit support for farmers agricultural needs including crop production',
      eligibility: [
        'Farmers with owned/leased land',
        'Share croppers and tenant farmers',
        'Self Help Groups',
        'Joint liability groups'
      ],
      documents: [
        'KCC application form',
        'Aadhaar Card',
        'Land documents',
        'Recent photograph',
        'Identity and address proof'
      ],
      link: 'https://www.india.gov.in/spotlight/kisan-credit-card-kcc',
      lastDate: 'Rolling basis'
    },
    {
      id: 'smam',
      name: 'SMAM (Sub-Mission on Agricultural Mechanization)',
      category: 'mechanization',
      icon: Tractor,
      status: 'active',
      amount: '40-50% subsidy on machinery',
      description: 'Promotes farm mechanization to increase productivity and reduce drudgery',
      eligibility: [
        'Individual farmers',
        'Custom Hiring Centers',
        'FPOs',
        'Cooperative societies',
        'SHGs'
      ],
      documents: [
        'Aadhaar Card',
        'Land records',
        'Bank account details',
        'Caste certificate (if applicable)',
        'Registration certificate'
      ],
      link: 'https://agrimachinery.nic.in/',
      lastDate: 'Check state nodal agency'
    },
    {
      id: 'paramparagat',
      name: 'Paramparagat Krishi Vikas Yojana (PKVY)',
      category: 'organic',
      icon: Sprout,
      status: 'active',
      amount: '₹50,000 per hectare (3 years)',
      description: 'Promotes organic farming and supports certification of organic products',
      eligibility: [
        'Farmers willing to adopt organic farming',
        'Minimum cluster size: 20 hectares',
        'Group of 20 or more farmers'
      ],
      documents: [
        'Group registration documents',
        'Aadhaar cards of all members',
        'Land records',
        'Bank account details',
        'Soil health card'
      ],
      link: 'https://pgsindia-ncof.gov.in/',
      lastDate: 'Annual application cycle'
    },
    {
      id: 'pmkusum',
      name: 'PM-KUSUM (PM Kisan Urja Suraksha)',
      category: 'energy',
      icon: Sprout,
      status: 'active',
      amount: '60-90% subsidy on solar',
      description: 'Financial support for installation of solar pumps and grid connected solar power plants',
      eligibility: [
        'Individual farmers',
        'Group of farmers',
        'Farmer Producer Organizations',
        'Cooperatives',
        'Panchayats'
      ],
      documents: [
        'Aadhaar Card',
        'Land ownership documents',
        'Bank account details',
        'Electricity bill (for grid connection)',
        'NOC from electricity department'
      ],
      link: 'https://pmkusum.mnre.gov.in/',
      lastDate: 'State-wise notifications'
    },
    {
      id: 'national-horticulture',
      name: 'National Horticulture Mission',
      category: 'horticulture',
      icon: Sprout,
      status: 'active',
      amount: 'Varies by component',
      description: 'Holistic development of horticulture sector covering fruits, vegetables, root crops, and more',
      eligibility: [
        'Farmers and horticulture growers',
        'Farmer groups and cooperatives',
        'Self Help Groups',
        'Entrepreneurs'
      ],
      documents: [
        'Application form',
        'Aadhaar Card',
        'Land documents',
        'Bank details',
        'Project report (for commercial units)'
      ],
      link: 'https://midh.gov.in/',
      lastDate: 'State-wise timelines'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Schemes' },
    { value: 'income-support', label: 'Income Support' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'credit', label: 'Credit' },
    { value: 'mechanization', label: 'Mechanization' },
    { value: 'organic', label: 'Organic Farming' },
    { value: 'energy', label: 'Energy' },
    { value: 'horticulture', label: 'Horticulture' }
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
            सरकारी योजनाएं
          </h1>
          <p className="text-lg text-muted-foreground">
            Government Schemes | Central & State Agricultural Schemes
          </p>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="flex-wrap h-auto">
            {categories.map((cat) => (
              <TabsTrigger key={cat.value} value={cat.value}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <div className="grid md:grid-cols-2 gap-6">
                {schemes
                  .filter(s => category.value === 'all' || s.category === category.value)
                  .map((scheme) => {
                    const Icon = scheme.icon;
                    return (
                      <Card key={scheme.id} className="border-primary/20 hover:border-primary/40 transition-colors">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <Badge variant="default">Active</Badge>
                            </div>
                          </div>
                          <CardTitle className="text-xl">{scheme.name}</CardTitle>
                          <CardDescription>{scheme.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center gap-2 text-primary font-semibold">
                            <IndianRupee className="h-5 w-5" />
                            {scheme.amount}
                          </div>

                          <div>
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-success" />
                              Eligibility:
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {scheme.eligibility.map((item, idx) => (
                                <li key={idx}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <FileText className="h-4 w-4 text-primary" />
                              Required Documents:
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {scheme.documents.map((doc, idx) => (
                                <li key={idx}>• {doc}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            Last Date: {scheme.lastDate}
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1" asChild>
                              <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Apply Now
                              </a>
                            </Button>
                            <Button variant="outline">
                              More Info
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-8 border-primary/30">
          <CardHeader>
            <CardTitle>How to Apply | आवेदन कैसे करें</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-medium mb-1">Check Eligibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Review the eligibility criteria for your chosen scheme
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-medium mb-1">Gather Documents</h4>
                  <p className="text-sm text-muted-foreground">
                    Collect all required documents mentioned in the scheme details
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-medium mb-1">Visit Official Portal</h4>
                  <p className="text-sm text-muted-foreground">
                    Click "Apply Now" to visit the official scheme website
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-medium mb-1">Submit Application</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill the online form and upload required documents
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h4 className="font-medium mb-1">Track Status</h4>
                  <p className="text-sm text-muted-foreground">
                    Use your application number to track approval status
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Schemes;
