import "./Footer.css";
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaTiktok,
} from "react-icons/fa6";

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">

                <p className="copyright">
                    © 2026 All Rights Reserved.
                </p>

                <a
                    href="https://yourportfolio.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer"
                >
                    CodeLight
                </a>

                <div className="socials">

                    <a
                        href="https://wa.me/2348012345678"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                    >
                        <FaYoutube />
                    </a>

                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                    >
                        <FaXTwitter />
                    </a>

                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <FaTiktok />
                    </a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;