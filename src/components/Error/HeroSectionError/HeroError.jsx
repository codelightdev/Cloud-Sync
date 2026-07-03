import { CloudOff } from "lucide-react";
import "./HeroStatus.css";

function HeroError() {
    return (
        <section id="heroError" className="hero-status">

            <div className="status-card">

                <div className="status-icon error">
                    <CloudOff />
                </div>

                <h2>
                    Couldn't Fetch Weather
                </h2>

                <p>
                    We couldn't connect to the weather service.
                    Please make sure you click on the search button
                    Please check your internet connection and try again.
                </p>

                <div className="status-tip">
                    Refresh the page or search again.
                </div>

            </div>

        </section>
    );
}

export default HeroError;