function Card(props) {
    return(
   <div className="gallery__gallery-cards" href="#">
            <img src={props.picture} alt="logement" className="gallery__gallery-cards__picture" />
            <span className="gallery__gallery-cards__title-card">{props.title}</span>
            <div className="gallery__gallery-cards__overlay"></div>
    </div>
    )
}

export default Card