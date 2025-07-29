import logo from '../assets/logo-no_bg.png';
import {Link} from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
    return(
        <div className='mainNavBar'>
            <div className='lefttnav'>
                <Link to='BrandonApps/'>
                    <img className='BigNavPic'
                    src={logo} alt="NavPicture" />
                </Link>
            </div>

            <div className='rightnav'>
                <Link style={{textDecoration: 'none'}} to="BrandonApps/">
                    <span className='navlink'>Home</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to="BrandonApps/services/offered">
                    <span className='navlink'>Services</span>
                </Link>
                <Link style={{textDecoration: 'none'}} to="BrandonApps/contact">
                    <span className='navlink'>Contact</span>
                </Link>

                <Link style={{textDecoration: 'none'}} to="BrandonApps/about-us">
                    <span className='navlink'>Our Company</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;