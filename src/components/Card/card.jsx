import { Link } from "react-router-dom";

function Card(props) {
    return(
<Link className="nav-card" to="/carrousel">
   <div className="gallery__gallery-cards">
            <img src={props.picture} alt="logement" className="gallery__gallery-cards__picture" />
            <span className="gallery__gallery-cards__title-card gallery__gallery-cards__overlay">{props.title}</span>
    </div>
</Link>
    )
}

export default Card