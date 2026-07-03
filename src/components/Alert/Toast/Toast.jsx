import { AlertCircle } from "lucide-react";
import useWeather from "../../../hook/useWeather";
import "./Toast.css";

function Toast() {

    const { toast } = useWeather();

    return (
        <div className={`toast ${toast.show ? "show" : ""}`}>
            <div className="toast-icon">
                <AlertCircle />
            </div>

            <div className="toast-info">
                <h4>Oops!</h4>
                <p>{toast.message}</p>
            </div>
        </div>
    );
}

export default Toast;