function Card(props) {
    return(
   <div className="gallery__galleryCards">
            <img src={props.picture} alt="Illustration de la location" className="gallery__galleryCards__picture" />
            <span className="gallery__galleryCards__titleCard">{props.title}</span>              
    </div>
    )
}

export default Card