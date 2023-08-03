function Card(props) {
    return(
   <div className="gallery__gallery-cards" href="#">
            <img src={props.picture} alt="logement" className="gallery-cards__picture" />
            <span className="gallery-cards__title-card">{props.title}</span>
    </div>
    )
}

export default Card