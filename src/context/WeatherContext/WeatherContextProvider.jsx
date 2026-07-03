import { useCallback, useEffect, useState } from "react"
import { WeatherContext } from "./WeatherContext"

function WeatherContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [error, setError] = useState(null)
  const [country, setCountry] = useState("")
  // Give it a default city so it doesn't fetch empty string on mount
  const [city, setCity] = useState("") 
  const [toast, setToast] = useState({
        show: false,
        message: "",
        type: "",
    });

  // A clean helper function to create artificial delay
//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const showToast = (message, type) => {
        setToast({
            show: true,
            message: message,
            type: type,
        });

        setTimeout(() => {
            setToast((prev) => ({
                ...prev,
                show: false,
            }));
        }, 5000);
    };


    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }
    
    const handleCityChange = (e) => {
        setCity(e.target.value);
    }


 // Keep your useCallback exactly as it is for form submissions
  const fetchWeatherData = useCallback(async () => {
    // if (!city.trim()) return;
    if (!city.trim() || !country.trim()) return;

    const apiKey = "c631ec0faabe65e89a55fcb71cd149f7"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`

    setIsLoading(true)
    setError(null)
    
    try {
        // await delay(3000);
        const response = await fetch(apiUrl);
        if(!response.ok) throw new Error("Couldn't fetch data");
        const data = await response.json()
        setWeatherData(data)
    } catch (err) {
        console.error(err.message)
        setError(err.message)
        setWeatherData(null)
    } finally {
        setIsLoading(false)
    }
  }, [city, country]);

  // FIX: Run once the page loads using a dedicated execution block
  useEffect(() => {
    let isMounted = true;

    const initializeWeather = async () => {
      // Only run the internal state updates if the component is still mounted
      if (isMounted) {
        await fetchWeatherData();
      }
    };

    initializeWeather();

    return () => {
      isMounted = false; // Cleanup to prevent memory leaks or unwanted states
    };
  }, [fetchWeatherData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!country.trim() && !city.trim()) {
        showToast("Please enter a country and city.", "warning");
        return;
    }

    if (!country.trim()) {
        showToast("Please enter a country.", "warning");
        return;
    }

    if (!city.trim()) {
        showToast("Please enter a city.", "warning");
        return;
    }

    setHasSearched(true)
    fetchWeatherData();
  }

  const weather = weatherData && weatherData.main && weatherData.sys
    ? {
        temp: Math.round(weatherData.main.temp),
        city: weatherData.name,
        country: weatherData.sys.country,
        humidity: weatherData.main.humidity,
        type: weatherData.weather[0].main,
        pressure: weatherData.main.pressure,
        windSpeed: weatherData.wind.speed,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                    }),
        sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                    }),
        latitude: weatherData.coord.lat,
        longitude: weatherData.coord.lon,

      }
    : null;

// console.log("Weather data:", weatherData); // Debugging line to check the structure of weatherData

 
  return (
    <WeatherContext.Provider value={{ isLoading, setIsLoading, weather, weatherData, setWeatherData, error, setError, handleCityChange, handleCountryChange, country, city, handleSubmit, hasSearched, toast }}>
        {props.children}
    </WeatherContext.Provider>
  )
}

export default WeatherContextProvider