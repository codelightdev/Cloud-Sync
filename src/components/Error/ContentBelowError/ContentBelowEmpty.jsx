import { CloudSun } from "lucide-react";
import "./ContentBelowStatus.css";

function ContentBelowEmpty() {
    return (
        <section id="content-below">

            <div className="content-status empty">

                <div className="status-icon">
                    <CloudSun />
                </div>

                <h2>No Weather Data</h2>

                <p>
                    Search for a country and city above to display
                    humidity, sunrise, wind speed and location details.
                </p>

                <div className="status-badge">
                    Waiting for Search
                </div>

            </div>

        </section>
    );
}

export default ContentBelowEmpty;