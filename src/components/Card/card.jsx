function Card(props) {
    return(
   <div className="gallery__gallery-cards">
            <img src={props.picture} alt="" className="gallery__gallery-cards__picture" />
            <div className="gallery__gallery-cards__overlay">
            <span className="gallery__gallery-cards__title-card">{props.title}</span>
            </div>
    </div>
    )
}

export default Card