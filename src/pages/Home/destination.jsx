import Card from "../../components/Card/card";

function Destination() { 
    fetch('../../datas/destination.json') 
    .then(res => {return res.json})
    .then(database => function (database) {
            
})
.catch();

return(<Card label='essai' picture='#' title='bonjour' />)
}

export default Destination

