import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext/WeatherContext'

function useWeather() {
  return useContext(WeatherContext)
}

export default useWeather