import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { state, commodity } = await req.json();
    
    // Using India's AGMARKNET API for real market prices
    const apiUrl = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070`;
    const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
    
    const params = new URLSearchParams({
      'api-key': apiKey,
      format: 'json',
      limit: '100'
    });

    if (state) params.append('filters[state]', state);
    if (commodity) params.append('filters[commodity]', commodity);

    const response = await fetch(`${apiUrl}?${params}`);
    const data = await response.json();

    return new Response(JSON.stringify({ 
      success: true, 
      data: data.records || [] 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching market prices:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
