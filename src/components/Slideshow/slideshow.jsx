function Slideshow(props) {
    return(
        <div className="slide">
            <img src={props.picture} alt="logement"/>
            <span>{props.title}</span>
            <span>{props.host.name}</span>
        </div>
    )
}

export default Slideshow