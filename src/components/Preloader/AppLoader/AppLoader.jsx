import "./AppLoader.css";
import { CloudSun } from "lucide-react";

function AppLoader(props) {
    return (
        <div className={`app-loader ${props.hide ? "hide" : ""}`}>

            <div className="loader-card">

                <div className="loader-icon">
                    <CloudSun />
                </div>

                <h1>CloudSync</h1>

                <p>Fetching weather...</p>

                <div className="loading-bar">
                    <span></span>
                </div>

            </div>

        </div>
    );
}

export default AppLoader;