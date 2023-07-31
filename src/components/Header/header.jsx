import { Link } from "react-router-dom";
/*import styled from 'styled-components';*/
import Logo from "../../assets/logo";

/*const StyledLink = styled(Link)`
    padding: 15px;
    color: #ff6060;
    text-decoration: none;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
`*/
function Header() {
    return(
    <div className="header">
        <Logo />
        <nav>
            <Link className="nav-link" to="/">Accueil</Link>
            <Link className="nav-link" to="/about">A propos</Link>
        </nav>
    </div>
    )
}

export default Header