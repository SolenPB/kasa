function Card(props) {
    return(
<a href="#">
   <div className="gallery__gallery-cards">
            <img src={props.picture} alt="logement" className="gallery__gallery-cards__picture" />
            <span className="gallery__gallery-cards__title-card gallery__gallery-cards__overlay">{props.title}</span>
    </div>
</a>
    )
}

export default Card