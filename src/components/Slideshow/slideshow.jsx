function Slideshow(props) {
    return(
        <div className="slide">
            <img src={props.picture} alt="logement"/>
            <span>{props.title}</span>
            <span>{props.host.name}</span>
            <span>{props.location}</span>
            <span>{props.tags}</span>
            <span>{props.rating}</span>
            <p>{props.description}</p>
            <span>{props.equipments}</span>
        </div>
    )
}

export default Slideshow