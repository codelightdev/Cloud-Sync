import { CloudOff } from "lucide-react";
import "./ContentBelowStatus.css";

function ContentBelowError() {
    return (
        <section id="content-below">

            <div className="content-status error">

                <div className="status-icon">
                    <CloudOff />
                </div>

                <h2>Unable to Load Weather Details</h2>

                <p>
                    We couldn't retrieve the weather information.
                    Please check your internet connection and try again.
                </p>

                <div className="status-badge">
                    Connection Error
                </div>

            </div>

        </section>
    );
}

export default ContentBelowError;