import { Link } from "react-router-dom";
import Logo from "../../assets/logo";

function Header() {
    return(
    <div className="header">
        <Logo />
        <nav>
            <Link className="header__nav-list" to="/">Accueil</Link>
            <Link className="header__nav-list" to="/about">A propos</Link>
        </nav>
    </div>
    )
}

export default Header