function Card(props) {
    return(
   <div className="gallery-cards" href="#">
            <span>{props.label}</span>
            <img src={props.picture} alt="logement" />
            <span>{props.title}</span>
    </div>
    )
}

export default Card