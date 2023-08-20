import { Link } from "react-router-dom";
import Logo from "../../assets/logo";
import { useLocation } from "react-router-dom";

function Header() {
    const nav = useLocation();
    let navStyle = "";

        let styleChanged = nav.pathname;
        if(styleChanged === "/about"){
            navStyle = {divParent : "header__nav-list",
                        divEnfant : "header__nav-list__inactive",
                        divEnfant2 : "header__nav-list__active"};
        } else if(styleChanged === "/"){
            navStyle = {divParent : "header__nav-list",
                        divEnfant : "header__nav-list__active",
                        divEnfant2 : "header__nav-list__inactive"};
        } else {
            navStyle = {divParent : "header__nav-list",
                        divEnfant : "header__nav-list__inactive",
                        divEnfant2 : "header__nav-list__inactive"};
        }

    return(
    <div className="header">
        <Logo />
        <nav className={navStyle.divParent}>
            <Link className={navStyle.divEnfant} to="/">Accueil</Link>
            <Link className={navStyle.divEnfant2} to="/about">A propos</Link>
        </nav>
    </div>
    )
}

export default Header