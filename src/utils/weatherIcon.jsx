// import {
//     Sun,
//     Cloud,
//     CloudSun,
//     CloudRain,
//     CloudDrizzle,
//     CloudLightning,
//     CloudSnow,
//     CloudFog,
//     // Wind,
//     Moon,
// } from "lucide-react";

// export function getWeatherIcon(type, iconCode) {
//     const weather = type?.toLowerCase() || "";

//     // OpenWeather icon codes ending with "n" indicate nighttime
//     const isNight = iconCode?.endsWith("n");

//     switch (weather) {
//         case "clear":
//             return isNight ? <Moon /> : <Sun />;

//         case "clouds":
//             return <Cloud />;

//         case "few clouds":
//         case "scattered clouds":
//         case "broken clouds":
//             return <CloudSun />;

//         case "rain":
//             return <CloudRain />;

//         case "drizzle":
//             return <CloudDrizzle />;

//         case "thunderstorm":
//             return <CloudLightning />;

//         case "snow":
//             return <CloudSnow />;

//         case "mist":
//         case "fog":
//         case "haze":
//         case "smoke":
//         case "dust":
//         case "sand":
//         case "ash":
//         case "squall":
//         case "tornado":
//             return <CloudFog />;

//         default:
//             return isNight ? <Moon /> : <Sun />;
//     }
// }


import {
    Sun,
    Moon,
    Cloud,
    // CloudSun,
    CloudRain,
    CloudDrizzle,
    CloudLightning,
    CloudSnow,
    CloudFog,
} from "lucide-react";

export function getWeatherIcon(type, iconCode) {
    const weather = type?.toLowerCase() || "";
    const isNight = iconCode?.endsWith("n");

    switch (weather) {
        case "clear":
            return {
                icon: isNight ? <Moon /> : <Sun />,
                className: isNight ? "night" : "sunny",
            };

        case "clouds":
            return {
                icon: <Cloud />,
                className: "cloud",
            };

        case "rain":
            return {
                icon: <CloudRain />,
                className: "rain",
            };

        case "drizzle":
            return {
                icon: <CloudDrizzle />,
                className: "rain",
            };

        case "thunderstorm":
            return {
                icon: <CloudLightning />,
                className: "storm",
            };

        case "snow":
            return {
                icon: <CloudSnow />,
                className: "snow",
            };

        case "mist":
        case "fog":
        case "haze":
        case "smoke":
        case "dust":
        case "sand":
        case "ash":
        case "squall":
        case "tornado":
            return {
                icon: <CloudFog />,
                className: "fog",
            };

        default:
            return {
                icon: isNight ? <Moon /> : <Sun />,
                className: isNight ? "night" : "sunny",
            };
    }
}

