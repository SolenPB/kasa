function Card(props) {
    return(
   <div className="gallery__gallery-cards">
            <img src={props.picture} alt="" className="gallery__gallery-cards__picture" />
            <span className="gallery__gallery-cards__title-card gallery__gallery-cards__overlay">{props.title}</span>
    </div>
    )
}

export default Card