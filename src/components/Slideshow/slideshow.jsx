function Slideshow(props) {
    return(
        <div className="slide">
            <img src={props.pictures} alt="test" className="slide__slide-pictures"/>
            <span className="slide__slide-title">{props.title}</span>
            <span className="slide__slide-location">{props.location}</span>

            <div className="slide__host"><span>{props.host.name}</span>
            <img src={props.host.picture} alt="Profil de l'hôte" className="slide__slide-host__host-picture" /></div>

            <span className="slide__slide-tags">{props.tags}</span>
            <span>{props.rating}</span>
            <p>{props.description}</p>
            <span>{props.equipments}</span>
        </div>
    )
}

export default Slideshow