# ☁️ CloudSync

<p align="center">
  <img src="./src/assets/img/Logo/Logo.png" alt="CloudSync Logo" width="160"/>
</p>

<p align="center">
  <strong>A modern weather forecasting application built with React.</strong>
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=for-the-badge&logo=css3)
![OpenWeather](https://img.shields.io/badge/OpenWeather-API-orange?style=for-the-badge)

</p>

---

## 🌍 Live Preview

### Production

🌐 https://cloudsync.vercel.app

or

🌐 https://cloudsynclive.netlify.app

---

# 📖 Overview

**CloudSync** is a beautifully designed weather forecasting web application that delivers **real-time weather information** for cities around the globe.

Designed with a modern **glassmorphism interface**, dynamic weather backgrounds, animated weather icons, skeleton loading screens, responsive layouts, and comprehensive error handling, CloudSync provides an intuitive and visually engaging user experience.

The application consumes data directly from the **OpenWeather API**, ensuring users receive accurate and up-to-date weather conditions.

---

# ✨ Features

## 🌦 Real-Time Weather

- Live temperature
- Weather condition
- Weather description
- Humidity
- Wind Speed
- Sunrise
- Sunset
- Longitude
- Latitude
- Country
- City

---

## 🎨 Beautiful User Interface

- Modern Glassmorphism Design
- Fully Responsive
- Mobile Friendly
- Tablet Optimized
- Desktop Optimized
- Clean Typography
- Smooth Animations

---

## 🌤 Dynamic Weather Experience

CloudSync intelligently changes its appearance according to the weather.

Supported weather backgrounds include:

- ☀️ Sunny
- 🌙 Night
- ☁️ Cloudy
- 🌧 Rain
- ⛈ Storm
- ❄️ Snow
- 🌫 Fog
- 🌥 Mist

---

## ☁ Dynamic Weather Icons

Weather icons automatically change based on the API response.

Examples include:

- Sunny
- Moon
- Clouds
- Rain
- Thunderstorm
- Snow
- Fog
- Mist
- Drizzle

---

## ⚡ Skeleton Loading

Premium animated skeleton loaders were built from scratch.

Includes:

- Hero Skeleton
- Weather Card Skeleton
- Location Skeleton
- Statistics Skeleton
- Glassmorphism shimmer effects
- Responsive animations

---

## 🚨 Error Handling

Beautiful custom states for:

- Invalid City
- Invalid Country
- API Errors
- Network Errors
- Empty Search
- Initial Landing Page

---

## 🔔 Smart Toast Notifications

Interactive toast notifications notify users when:

- Country is missing
- City is missing
- Both fields are empty

Features include:

- Auto dismiss
- Smooth animations
- Glassmorphism styling
- Responsive positioning

---

## 📱 Responsive Design

Optimized for:

- Mobile Phones
- Tablets
- Laptops
- Large Desktop Screens

---

# 🚀 Technologies Used

## Frontend

- React
- Vite
- JavaScript (ES6+)
- CSS3
- HTML5

---

## APIs

- OpenWeather API

---

## React Libraries

### Icons

- Lucide React
- React Icons

### Hooks

- useState
- useEffect
- useCallback
- useContext
- Custom Hooks

---

## Styling

- CSS Variables
- Flexbox
- CSS Grid
- Media Queries
- CSS Animations
- Keyframes
- Glassmorphism Effects

---

# 📂 Project Structure

```
CloudSync/
│
├── public/
│
├── src/
│
│── assets/
│   ├── img/
│   │     ├── bg/
│   │     ├── icons/
│   │     └── logo/
│
│── components/
│   ├── Navbar/
│   ├── HeroSection/
│   ├── ContentBelow/
│   ├── Footer/
│   ├── Error/
│   ├── Skeleton/
│   └── Toast/
│
│── context/
│   └── WeatherContext/
│
│── hook/
│   └── useWeather.js
│
│── utils/
│   ├── weatherIcon.js
│   ├── weatherBackground.js
│   └── helpers.js
│
│── App.jsx
│── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🧠 Application Flow

```
User opens CloudSync

        │

        ▼

Enter Country + City

        │

        ▼

Validation

        │

        ├───────────────┐
        │               │
        ▼               ▼

Valid Input      Invalid Input

        │               │
        ▼               ▼

Fetch Weather     Toast Notification

        │

        ▼

Skeleton Loader

        │

        ▼

API Response

        │

 ┌──────┴─────────┐

 ▼                ▼

Success         Error

 ▼                ▼

Weather UI     Error UI
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/codelightdev/Cloud-Sync.git
```

Navigate into the project

```bash
cd cloudsync
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production

```bash
npm run build
```

Preview production

```bash
npm run preview
```

---

# 🔑 Environment Variables

Create a `.env` file

```env
VITE_OPENWEATHER_API_KEY=YOUR_API_KEY
```

Example

```env
VITE_OPENWEATHER_API_KEY=123456789xxxxxxxxxxxx
```

Then use

```javascript
const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
```

instead of hardcoding your API key.

---

# 🌎 API Reference

### OpenWeather API

Current Weather Endpoint

```
https://api.openweathermap.org/data/2.5/weather
```

Documentation

https://openweathermap.org/current

---

# 📊 Weather Data Displayed

- Temperature
- Humidity
- Weather Type
- Description
- Country
- City
- Longitude
- Latitude
- Wind Speed
- Sunrise
- Sunset

---

# 🎯 Performance Optimizations

✔ Context API

✔ Custom Hooks

✔ useCallback

✔ Component Reusability

✔ Conditional Rendering

✔ Lazy UI States

✔ Skeleton Loading

✔ Dynamic Assets

✔ Responsive Layouts

✔ SEO Optimized

✔ Meta Tags

✔ Open Graph

✔ Structured Data (Schema.org)

---

# ♿ Accessibility

CloudSync includes:

- Semantic HTML
- Keyboard Friendly Navigation
- Accessible Icons
- Proper Contrast Ratios
- Responsive Font Sizes
- Mobile Friendly Controls

---

# 🔮 Future Improvements

- 7-Day Forecast
- Hourly Forecast
- Air Quality Index
- UV Index
- Weather Radar
- Maps Integration
- GPS Auto Detection
- Multiple Languages
- Dark / Light Theme
- Favourite Cities
- Search History
- Weather Alerts
- Progressive Web App (PWA)
- Offline Support

---

# 📸 Screenshots

You can place screenshots inside

```
/public/screenshots/
```

Example

```
Home.png

Weather.png

Loading.png

Error.png

Mobile.png
```

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.

2. Create your feature branch.

```
git checkout -b feature/AmazingFeature
```

3. Commit your changes.

```
git commit -m "Add Amazing Feature"
```

4. Push to the branch.

```
git push origin feature/AmazingFeature
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute it according to the license terms.

---

# 👨‍💻 Author

## Henry Iwejuo

**Frontend Developer**

Creator of **CloudSync**

Portfolio

🌐 http://codelightportfolio2024.netlify.app/

GitHub

https://github.com/codelightdev

LinkedIn

https://www.linkedin.com/in/iwejuohenryebuka/

---

# 🙏 Acknowledgements

Special thanks to:

- React Team
- Vite Team
- OpenWeather
- Lucide React
- React Icons
- The Open Source Community

---

<p align="center">

### ☁️ CloudSync

**Beautiful Weather. Instantly. Anywhere.**

Made with ❤️ by **Henry Iwejuo (CodeLight)**

© 2026 CloudSync. All Rights Reserved.

</p>