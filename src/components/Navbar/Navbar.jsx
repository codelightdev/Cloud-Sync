// import { SiAccuweather } from "react-icons/si"
import { LuCloudSun } from "react-icons/lu";
import "./Navbar.css"
import useWeather from "../../hook/useWeather"
import { Link } from "react-router-dom";
function Navbar() {
    const { country, city, handleCountryChange, handleCityChange, handleSubmit } = useWeather()
  return (
    <>
        <header>
            <nav>
                <Link to='/'>
                    <div className="logo">
                        {/* <SiAccuweather /> */}
                        <LuCloudSun />
                        <h2>CloudSync</h2>
                    </div>
                </Link>
                <form onSubmit={handleSubmit}>
                    <div className="box">
                        <input type="text" value={country} onChange={handleCountryChange} placeholder="Country" />
                    </div>
                    <div className="box">
                        <input type="text" value={city} onChange={handleCityChange} placeholder="City" />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </nav>
        </header>
    </>
  )
}

export default Navbar