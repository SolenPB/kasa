import Card from "../../components/Card/card";

function Destination() { 
    let data = require('../../datas/destination.json');
    data = data.slice(0,6);
    console.log(data);

return(
    <div className="gallery">
           {data.map((data, index) => {
             return <Card key={index} title={data.title} picture={data.cover} />
           })}
    </div>
)
}

export default Destination
