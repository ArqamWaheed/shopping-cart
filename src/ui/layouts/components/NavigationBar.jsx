import '../../../styles/NavigationBar.css';
import Logo from '../../../assets/Logo.png'

function NavigationBar() {

    return (
        <nav>
            <div className="navLogoDiv">
                <img className="imgLogo" src={Logo} alt="Logo" />
                <h2>One <span>P</span>iece</h2>
            </div>
            <div className="navNavDiv">
                <p className="nav-hide">Home</p>
                <p className="nav-hide">Shop</p>
                <p className="nav-hide">About</p>
                <p className="nav-hide">Contact</p>
                <p className="nav-hide">FAQ</p>
                <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path className="menu-svg" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>           
            </div>
        </nav>
    )
}

export default NavigationBar;
