import './HeroSection.css'
import useWeather from '../../hook/useWeather'
import HeroSkeleton from '../Skeleton/HeroSectionSkeleton/HeroSectionSekeleton'
import HeroError from '../Error/HeroSectionError/HeroError'
import HeroEmpty from '../Error/HeroSectionError/HeroEmpty'
import { getWeatherIcon } from '../../utils/weatherIcon'
import { getWeatherBackground } from "../../utils/weatherBackground";

function HeroSection() {
    const {isLoading, weather, error, hasSearched} = useWeather()

   // 1. If it's loading, show a fallback so it doesn't try to read "weather"
   if(isLoading) return <HeroSkeleton />

    // 2. If there is an error or weather failed to fetch, show an error message
    if(error) return <HeroError />
    
    if(!hasSearched) return <HeroEmpty />
    
    if(!weather) return <HeroEmpty />
    


    const weatherIcon = getWeatherIcon(weather.type, weather.icon);
    const background = getWeatherBackground(weather.type, weather.icon);

  return (
    <>
        <section id="hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)), url(${background})`}}>
            <div className="weather">
                <div className="weather-box">
                    {/* <div className="w-icon">
                        {getWeatherIcon(weather.type, weather.icon)}
                    </div> */}
                    <div className={`w-icon ${weatherIcon.className}`}>
                        {weatherIcon.icon}
                    </div>
                    <div className="w-info">
                        <div className="temp">
                            <h2>{weather?.temp}<span>°C</span></h2>
                        </div>
                        <div className="location">
                            <h3>{weather?.city}, {weather?.country}</h3>
                        </div>
                        <div className="oth-info">
                            <p>{weather?.type} </p>
                            <p>{weather?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroSection