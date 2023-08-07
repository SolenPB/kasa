function Slideshow(props) {
    return(
        <div className="slide">
            <img src={props.picture} alt="logement"/>
            <span>{props.title}</span>
        </div>
    )
}

export default Slideshow