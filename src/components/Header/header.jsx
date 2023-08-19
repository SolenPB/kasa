import { Link } from "react-router-dom";
import Logo from "../../assets/logo";
import { useLocation } from "react-router-dom";

function Header() {
    const nav = useLocation();
    let navStyle = "";

        let styleChanged = nav.pathname;
        if(styleChanged === "/about"){
            navStyle = {divParent : "header",
                        divEnfant : "header__nav-list__home__inactive",
                        divEnfant2 : "header__nav-list__about__active"};
        } else if(styleChanged === "/"){
            navStyle = {divParent : "header",
                        divEnfant : "header__nav-list__home__active",
                        divEnfant2 : "header_nav-list__about__inactive"};
        } else {
            navStyle = {divParent : "header",
                        divEnfant : "header__nav-list",
                        divEnfant2 : "header__nav-list"};
        }

    console.log(nav);
    return(
    <div className={navStyle.divParent}>
        <Logo />
        <nav>
            <Link className={navStyle.divEnfant} to="/">Accueil</Link>
            <Link className={navStyle.divEnfant2} to="/about">A propos</Link>
        </nav>
    </div>
    )
}

export default Header