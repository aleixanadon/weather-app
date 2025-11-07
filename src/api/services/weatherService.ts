import api from "../axiosInstance";
import type { WeatherData } from "../../interfaces/WeatherData";

export const weatherService = {
  getWeatherByCityName: async (
    cityName: string
  ): Promise<WeatherData> => {
    const { data } = await api.get<WeatherData>("/weather", {
      params: { q: cityName },
    });
    return data;
  },
};
