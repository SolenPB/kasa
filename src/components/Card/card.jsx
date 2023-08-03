function Card(props) {
    return(
   <div className="gallery-cards" href="#">
            <img src={props.picture} alt="logement" className="picture" />
            <span className="title-card">{props.title}</span>
    </div>
    )
}

export default Card