import Card from "../../components/Card/card";

function Destination() { 
    fetch('../../datas/destination.json') 
    .then(res => {return res.json})
    .then(database => function (database) {
            
})
.catch();

return(
    <div className="gallery">
        <div className="place1">
            <Card label='essai' picture='#' title='bonjour' />
            <Card label='essai' picture='#' title='bonjour' />
            <Card label='essai' picture='#' title='bonjour' />
        </div>
        <div className="place2">
            <Card label='essai' picture='#' title='bonjour' />
            <Card label='essai' picture='#' title='bonjour' />
            <Card label='essai' picture='#' title='bonjour' />
        </div>
    </div>
)
}

export default Destination

