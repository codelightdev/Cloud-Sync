import cloudy from "../assets/img/bg/cloudy.jpg";
import normal from "../assets/img/bg/normal.avif";
import rainy from "../assets/img/bg/rainy.jpg";
import snowy from "../assets/img/bg/snowy.jpg";
import stormy from "../assets/img/bg/storm.jpg";
import sunset from "../assets/img/bg/sunset.jpg";

export function getWeatherBackground(type = "", iconCode = "") {

    const weather = type.toLowerCase();
    const isNight = iconCode.endsWith("n");

    // Night background
    if (isNight) return sunset;

    // Thunderstorm
    if (weather.includes("thunder")) {
        return stormy;
    }

    // Rain
    if (
        weather.includes("rain") ||
        weather.includes("drizzle")
    ) {
        return rainy;
    }

    // Snow
    if (weather.includes("snow")) {
        return snowy;
    }

    // Clouds
    if (
        weather.includes("cloud") ||
        weather.includes("mist") ||
        weather.includes("fog") ||
        weather.includes("haze")
    ) {
        return cloudy;
    }

    // Clear sky
    return normal;
}