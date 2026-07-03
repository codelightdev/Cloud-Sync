import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/Home"
import RootLayout from "./layout/RootLayout/RootLayout"
import WeatherContextProvider from "./context/WeatherContext/WeatherContextProvider"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
  return (
    <>
      <WeatherContextProvider>
        <RouterProvider router={router} />
      </WeatherContextProvider>
    </>
  )
}

export default App