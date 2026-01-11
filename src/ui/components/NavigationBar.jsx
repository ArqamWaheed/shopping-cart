import "../styles/NavigationBar.css";
import Logo from "../../assets/Logo.png"

function NavigationBar() {

    return (
        <nav>
            <div className="navLogoDiv">
                <img className="imgLogo" src={Logo} alt="Logo" />
                <h2>One <span>P</span>iece</h2>
            </div>
            <div className="navNavDiv">
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
                <p>FAQ</p>
            </div>
        </nav>
    )
}

export default NavigationBar;