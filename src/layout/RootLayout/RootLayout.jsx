import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react';
import useWeather from '../../hook/useWeather';

function RootLayout() {
  const { isLoading, error, weather } = useWeather()
  useEffect(() => {

      if (isLoading) {
          document.title = "Loading Weather... | Cloud Sync";
          return;
      }

      if (error) {
          document.title = "Weather Not Found | Cloud Sync";
          return;
      }

      if (weather) {
          document.title =
              `${weather.city}, ${weather.country} • ${weather.temp}°C • ${weather.type} | Cloud Sync`;
          return;
      }

      document.title =
          "Cloud Sync — Real-Time Weather Forecast Worldwide";

  }, [weather, error, isLoading]);
  
  return (
    <>
        <Navbar />
        <div className="app">
            <Outlet />
        </div>
    </>
  )
}

export default RootLayout