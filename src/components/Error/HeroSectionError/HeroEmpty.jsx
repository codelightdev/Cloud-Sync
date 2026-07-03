import { CloudSun } from "lucide-react";
import "./HeroStatus.css";

function HeroEmpty() {
    return (
        <section id="heroEmpty" className="hero-status">

            <div className="status-card">

                <div className="status-icon empty">
                    <CloudSun />
                </div>

                <h2>
                    Search Any City
                </h2>

                <p>
                    Enter a country and city above to view
                    live weather conditions.
                </p>

                <div className="status-tip">
                    Example: Nigeria • Lagos
                </div>

            </div>

        </section>
    );
}

export default HeroEmpty;