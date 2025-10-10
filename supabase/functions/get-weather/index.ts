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
    const { city, state, lat, lon } = await req.json();
    const apiKey = Deno.env.get('OPENWEATHER_API_KEY');

    if (!apiKey) {
      throw new Error('OpenWeather API key not configured');
    }

    let weatherUrl: string;
    
    if (lat && lon) {
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
      const location = state ? `${city},${state},IN` : `${city},IN`;
      weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    } else {
      throw new Error('Either city or coordinates must be provided');
    }

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    if (!weatherResponse.ok) {
      throw new Error(weatherData.message || 'Failed to fetch weather data');
    }

    // Fetch 5-day forecast
    const forecastUrl = lat && lon 
      ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      : `https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=${apiKey}&units=metric`;
    
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    return new Response(JSON.stringify({ 
      success: true, 
      current: weatherData,
      forecast: forecastData
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching weather:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
