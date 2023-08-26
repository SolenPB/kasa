function Card(props) {
    return(
   <div className="gallery__galleryCards">
            <img src={props.picture} alt="" className="gallery__galleryCards__picture" />
                <div className="gallery__galleryCards__overlay"></div>
            <span className="gallery__galleryCards__titleCard">{props.title}</span>              
    </div>
    )
}

export default Card