import Card from "../../components/Card/card";

function Destination() { 
    let data = require('../../datas/destination.json');
    data = data.slice(0,6);
    console.log(data);

return(
    <div className="gallery">
        <div className="place1">
           {data.map((data, index) => {
             return <Card key={index} title={data.title} picture={data.cover} />
           })}
        </div>
    </div>
)
}

export default Destination
