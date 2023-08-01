import Card from "../../components/Card/card";

function Destination() { 
    fetch('../../datas/destination.json') 
    .then(res => {return res.json})
    .then(database => function (database) {
            
})
.catch();

return(
    <div className="gallery">
        <Card label='essai' picture='#' title='bonjour' />
    </div>
)
}

export default Destination

