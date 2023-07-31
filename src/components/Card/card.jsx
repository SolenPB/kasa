function Card(props) {
    return(
   <div style={{ display: 'flex', flexDirection:'column', padding:
    15 }}>
            <span>{props.label}</span>
            <img src={props.picture} alt="logement" />
            <span>{props.title}</span>
    </div>
    )
}

export default Card