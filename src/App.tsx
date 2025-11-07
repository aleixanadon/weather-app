import { useEffect, useState } from 'react'
import './App.css'
import type { WeatherData } from './interfaces/WeatherData'
import { weatherService } from './api/services/weatherService';

function App() {
  
  const [data, setData] = useState<WeatherData|null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    setLoading(true)
    try {
      weatherService.getWeatherByCityName("Mollet del Vallès")
      .then(setData);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    } 
      
  }, [])

  return (
    loading ? (
      <>loading</>
    ) : (
      <>{JSON.stringify(data)}</>
    )
  )
}

export default App
