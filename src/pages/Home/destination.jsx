import Card from "../../components/Card/card";
import { Link } from "react-router-dom";

function Destination() { 
    let data = require('../../datas/destination.json');
    let element = data.slice(0,6);

return(
    <div className="gallery">
           {element.map((data, index) => {
             return <>
              <Link className="gallery__nav-card" to={data.id} key={index}>
                <Card title={data.title} picture={data.cover} />
              </Link>
             </>
           })}
    </div>
)
}

export default Destination
