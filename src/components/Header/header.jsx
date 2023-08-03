import { Link } from "react-router-dom";
import Logo from "../../assets/logo";

function Header() {
    return(
    <div className="header">
        <Logo />
        <nav>
            <Link className="header__nav-link" to="/">Accueil</Link>
            <Link className="header__nav-link" to="/about">A propos</Link>
        </nav>
    </div>
    )
}

export default Header