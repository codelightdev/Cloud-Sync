import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import RootLayout from "./layout/RootLayout/RootLayout"
import WeatherContextProvider from "./context/WeatherContext/WeatherContextProvider"
import { useEffect, useState } from "react"
import AppLoader from "./components/Preloader/AppLoader/AppLoader"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )

  const [appLoading, setAppLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
      const handleLoad = () => {
          // Start fade out
          setFadeOut(true);

          // Remove loader after animation
          setTimeout(() => {
              setAppLoading(false);
          }, 500);
      };

      if (document.readyState === "complete") {
          handleLoad();
      } else {
          window.addEventListener("load", handleLoad);

          return () => {
              window.removeEventListener("load", handleLoad);
          };
      }
  }, []);

  return (
    
    <>
      {appLoading && (
          <AppLoader fadeOut={fadeOut} />
      )}
      <WeatherContextProvider>
        <RouterProvider router={router} />
      </WeatherContextProvider>
    </>
  )
}

export default App