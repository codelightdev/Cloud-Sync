import { Building2, Droplet, Earth, Globe, MapPin, Sunrise, Sunset, Wind } from 'lucide-react'
import './ContentBelow.css'
import useWeather from '../../hook/useWeather'
import ContentBelowSkeleton from '../Skeleton/ContentBelowSkeleton/ContentBelowSkeleton'
import ContentBelowError from '../Error/ContentBelowError/ContentBelowError'
import ContentBelowEmpty from '../Error/ContentBelowError/ContentBelowEmpty'

function ContentBelow() {
    const {isLoading, weather, error, hasSearched } = useWeather()
    
    // // 1. If it's loading, show a fallback so it doesn't try to read "weather"
    if(isLoading) return <ContentBelowSkeleton />

    // 2. If there is an error or weather failed to fetch, show an error message
    if(error) return <ContentBelowError />
    if(!hasSearched) return <ContentBelowEmpty />
    if(!weather) return <ContentBelowEmpty />

  return (
    <>
        <section id="content-below">
            <div className="container">
                <div className="left-col">
                    <div className="left-col-box">
                        <div className="icon">
                            <Droplet />
                        </div>
                        <div className="info">
                            <h2>Humidity</h2>
                            <p>{weather?.humidity}%</p>
                        </div>
                    </div>
                    <div className="left-col-box">
                        <div className="icon">
                            <Sunset />
                        </div>
                        <div className="info">
                            <h2>Sunset</h2>
                            <p>{weather?.sunset}</p>
                        </div>
                    </div>
                    <div className="left-col-box">
                        <div className="icon">
                            <Wind />
                        </div>
                        <div className="info">
                            <h2>Wind Speed</h2>
                            <p>{weather?.windSpeed} mph</p>
                        </div>
                    </div>
                    <div className="left-col-box">
                        <div className="icon">
                            <Sunrise />
                        </div>
                        <div className="info">
                            <h2>Sunrise</h2>
                            <p>{weather?.sunrise}</p>
                        </div>
                    </div>
                </div>
                <div className="right-col">
                    <div className="location-details">
                        <div className="loc-head">
                            <h2><MapPin /> Location Details</h2>
                        </div>
                        <div className="location-cont">
                            <div className="location-box">
                                <div className="icon">
                                    <Building2 />
                                </div>
                                <div className="loc-info">
                                    <h5>City</h5>
                                    <h2>{weather?.city}</h2>
                                </div>
                            </div>
                            <div className="location-box">
                                <div className="icon">
                                    <Earth />
                                </div>
                                <div className="loc-info">
                                    <h5>Country</h5>
                                    <h2>{weather?.country}</h2>
                                </div>
                            </div>
                            <div className="location-box">
                                <div className="icon">
                                    <Globe />
                                </div>
                                <div className="loc-info">
                                    <h5>Longitude</h5>
                                    <h2>{weather?.longitude}°</h2>
                                </div>
                            </div>
                            <div className="location-box">
                                <div className="icon">
                                    <Globe />
                                </div>
                                <div className="loc-info">
                                    <h5>Latitude</h5>
                                    <h2>{weather?.latitude}°</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ContentBelow