import "./Footer.css";
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaTiktok,
    FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-container">

                <p className="copyright">
                    © 2026 All Rights Reserved.
                </p>

                <a
                    href="https://codelightportfolio2024.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="developer"
                >
                    CodeLight
                </a>

                <div className="socials">

                    <a
                        href="https://wa.me/2349044687582"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=61558660801207"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.instagram.com/codelightdev?igsh=cWxwYTB4bms4bjFn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://youtube.com/@codelightacademy?si=ofiFWrGj1QvZONhh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                    >
                        <FaYoutube />
                    </a>

                    <a
                        href="https://x.com/codelightdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                    >
                        <FaXTwitter />
                    </a>

                    <a
                        href="https://www.tiktok.com/@codelightacademy?_r=1&_t=ZS-97jPKVvgKWb"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                    >
                        <FaTiktok />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/iwejuohenryebuka/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>

                </div>
            </div>
        </footer>
    );
}

export default Footer;