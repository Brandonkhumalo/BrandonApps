import { Link } from "react-router-dom";
import '../styles/footer.css';
import fb from '../assets/fb.svg';
import insta from '../assets/insta.svg';
import tk from '../assets/tiktok.svg';
import linkedin from '../assets/linkedin.svg';

function Footer() {
    return(
        <div>
            <div className="footerContainer">
                <div className="motor">
                    <div>Living, learning, & leveling</div>
                    <div>up one day at a time</div>
                </div>
                <div className="icons">
                    <Link to="">
                        <img src={fb} alt="Facebook" className="Sicons"/>
                    </Link>
                    <Link to="">
                        <img src={insta} alt="Instagram" className="Sicons"/>
                    </Link>
                    <Link to="">
                        <img src={tk} alt="Tiktok" className="Sicons"/>
                    </Link>
                    <Link to="">
                        <img src={linkedin} alt="Linkedin" className="Sicons"/>
                    </Link>
                </div>
            </div>
            <hr></hr>
            <p className="copyright">Copyright©2025 | All right reserved</p>
        </div>
    )
}

export default Footer;