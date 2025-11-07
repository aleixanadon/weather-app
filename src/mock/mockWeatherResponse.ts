import type { WeatherData } from "../interfaces/WeatherData";

export const mockWeatherResponse: WeatherData = {
  coord: {
    lon: 2.159,
    lat: 41.3888,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 292.1,
    feels_like: 291.41,
    temp_min: 290.48,
    temp_max: 292.89,
    pressure: 1012,
    humidity: 52,
    sea_level: 1012,
    grnd_level: 1004,
  },
  visibility: 10000,
  wind: {
    speed: 4.12,
    deg: 190,
  },
  clouds: {
    all: 20,
  },
  dt: 1762520969,
  sys: {
    type: 2,
    id: 18549,
    country: "ES",
    sunrise: 1762497008,
    sunset: 1762533599,
  },
  timezone: 3600,
  id: 3128760,
  name: "Barcelona",
  cod: 200,
};
